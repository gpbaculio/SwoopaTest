import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {useState} from 'react';

import {PaginatedResponse, Product, ProductsShopAPI} from 'src/mocks';

interface UsePaginatedQueryOptions {
  category?: Product['category'];
  initialPage?: number;
}

type ProductsQueryKey = [
  'products',
  {page: number; category?: Product['category']},
];

export function usePaginatedQuery({
  category,
  initialPage = 1,
}: UsePaginatedQueryOptions) {
  const [page, setPage] = useState(initialPage);

  const {data, isLoading, isError} = useQuery<
    PaginatedResponse<Product>,
    Error,
    PaginatedResponse<Product>,
    ProductsQueryKey
  >({
    queryKey: ['products', {page, category}],
    queryFn: async ({queryKey}) => {
      const [_, {page: queryPage, category: queryCategory}] = queryKey;
      const api = new ProductsShopAPI();
      return api.getProducts({page: queryPage, category: queryCategory});
    },
    placeholderData: keepPreviousData,
  });

  const goToNextPage = () => {
    if (
      data?.pagination?.currentPage &&
      data?.pagination?.currentPage < data?.pagination?.totalPages
    ) {
      setPage(prev => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (data?.pagination?.currentPage && data?.pagination?.currentPage > 1) {
      setPage(prev => prev - 1);
    }
  };

  return {
    products: data?.data ?? [],
    pagination: data?.pagination ?? {
      currentPage: page,
      totalPages: 1,
      totalItems: 0,
      itemsPerPage: 10,
    },
    isLoading,
    isError,
    goToNextPage,
    goToPreviousPage,
    setPage,
  };
}
