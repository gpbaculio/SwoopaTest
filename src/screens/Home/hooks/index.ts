import {InfiniteData, useSuspenseInfiniteQuery} from '@tanstack/react-query';
import {PaginatedResponse, Product, ProductsShopAPI} from 'src/mocks';

interface UseInfiniteProductsOptions {
  category?: Product['category'] | 'All';
}

type ProductsQueryKey = ['products', {category?: Product['category'] | 'All'}];

export function useInfiniteProductsQuery({
  category,
}: UseInfiniteProductsOptions) {
  const api = new ProductsShopAPI();

  const {data, fetchNextPage, hasNextPage} = useSuspenseInfiniteQuery<
    PaginatedResponse<Product>,
    Error,
    InfiniteData<PaginatedResponse<Product>>,
    ProductsQueryKey,
    number
  >({
    queryKey: ['products', {category}],
    queryFn: async ({pageParam = 1}) =>
      api.getProducts({category, page: pageParam}),
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const nextPage = lastPage.pagination.currentPage + 1;
      return nextPage <= lastPage.pagination.totalPages ? nextPage : undefined;
    },
  });

  return {
    products: data?.pages.flatMap(page => page.data) ?? [],
    fetchNextPage,
    hasNextPage,
  };
}
