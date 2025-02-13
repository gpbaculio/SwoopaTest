import React, {Suspense, useId, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {RefreshControl} from 'react-native-gesture-handler';

import {DynamicText, DynamicView} from '@components';
import {
  Container,
  Title,
  HomeLoader,
  Product,
  HeaderCategories,
  ListContainer,
  ProductsLoader,
} from './components';

import {useInfiniteProductsQuery, useRefreshProducts} from './hooks';

import {ProductType} from 'src/mocks';

export type HomeCategory = ProductType['category'] | 'All';

function Home() {
  const id = useId();
  const [category, setCategory] = useState<HomeCategory>('All');

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    refetch,
    isRefetching,
  } = useInfiniteProductsQuery({
    category,
  });

  // Handle category change
  const handleChangeCategory = (key: HomeCategory) => setCategory(key);

  const {refreshing, onRefresh} = useRefreshProducts(refetch);
  // Load more products when scrolling to the bottom
  const onEndReached = () => {
    if (!hasNextPage || isLoading) {
      return;
    }
    fetchNextPage();
  };

  if (isError) {
    return (
      <Container>
        <Title />
        <DynamicView my="XS" variant="rowAlignCenter">
          <DynamicText color="TEXT_BLACK">
            Something went wrong. Please try again.
          </DynamicText>
        </DynamicView>
      </Container>
    );
  }

  return (
    <Container>
      <Title />
      <HeaderCategories
        isLoading={isRefetching || isLoading}
        category={category}
        handleChangeCategory={handleChangeCategory}
      />
      <ListContainer>
        {isRefetching ? (
          <ProductsLoader />
        ) : (
          <FlashList
            data={data}
            keyExtractor={item => `${id}-product-${item.id}`}
            renderItem={({item}) => {
              return <Product item={item} />;
            }}
            ItemSeparatorComponent={Separator}
            estimatedItemSize={100} // Optimize performance
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5} // Load more when reaching 50% from the bottom
            ListFooterComponent={hasNextPage ? <ProductsLoader /> : null}
          />
        )}
      </ListContainer>
    </Container>
  );
}

function Separator() {
  return <DynamicView my="XS" />;
}

export default function HomeSuspense() {
  return (
    <Suspense fallback={<HomeLoader />}>
      <Home />
    </Suspense>
  );
}
