import {useState} from 'react';
import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  useQueryClient,
} from '@tanstack/react-query';
import {PaginatedResponse, ProductType} from 'src/mocks';

export function useRefreshProducts(
  refetch: (
    options?: RefetchOptions,
  ) => Promise<
    QueryObserverResult<
      InfiniteData<PaginatedResponse<ProductType>, unknown>,
      Error
    >
  >,
) {
  const client = useQueryClient();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await client.invalidateQueries(); // Invalidates cache
    console.log('refreshing!');
    try {
      await refetch(); // Triggers a re-fetch
    } finally {
      setRefreshing(false);
    }
  };

  return {refreshing, onRefresh};
}
