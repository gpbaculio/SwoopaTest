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
  FooterLoader,
} from './components';

import {useInfiniteProductsQuery} from './hooks';

import {ProductType} from 'src/mocks';

export type HomeCategory = ProductType['category'] | 'All';

function Home() {
  const id = useId();
  const [category, setCategory] = useState<HomeCategory>('All');

  const {data, hasNextPage, fetchNextPage, isLoading, isError} =
    useInfiniteProductsQuery({
      category: 'All',
    });

  const [refreshing, setRefreshing] = useState(false);
  // Handle category change
  const handleChangeCategory = (key: HomeCategory) => setCategory(key);

  // Pull-to-Refresh handler
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      // await goToPreviousPage(); // Reload the first page
    } finally {
      setRefreshing(false);
    }
  };

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
        category={category}
        handleChangeCategory={handleChangeCategory}
      />
      <ListContainer>
        <FlashList
          data={data}
          keyExtractor={item => `${id}-product-${item.id}`}
          renderItem={({item}) => {
            return <Product item={item} />;
          }}
          estimatedItemSize={50} // Optimize performance
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5} // Load more when reaching 50% from the bottom
          ListFooterComponent={hasNextPage ? <FooterLoader /> : null}
        />
      </ListContainer>
    </Container>
  );
}

export default function HomeSuspense() {
  return (
    <Suspense fallback={<HomeLoader />}>
      <Home />
    </Suspense>
  );
}
