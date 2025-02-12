import {InfiniteData, useSuspenseInfiniteQuery} from '@tanstack/react-query';
import {PaginatedResponse, ProductType, ProductsShopAPI} from 'src/mocks';

interface UseInfiniteProductsOptions {
  category?: ProductType['category'] | 'All';
}

type ProductsQueryKey = [
  'products',
  {category?: ProductType['category'] | 'All'},
];

export function useInfiniteProductsQuery({
  category,
}: UseInfiniteProductsOptions) {
  const api = new ProductsShopAPI();

  const {data, ...rest} = useSuspenseInfiniteQuery<
    PaginatedResponse<ProductType>,
    Error,
    InfiniteData<PaginatedResponse<ProductType>>,
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
    data: data?.pages.flatMap(page => page.data) ?? [],
    ...rest,
  };
}
