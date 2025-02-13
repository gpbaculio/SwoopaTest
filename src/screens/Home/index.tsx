import React, {useEffect, useId, useRef, useState} from 'react';
import {FlashList} from '@shopify/flash-list';
import {RefreshControl} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useWindowDimensions} from 'react-native';

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

export default function Home() {
  const id = useId();
  const listRef = useRef<FlashList<ProductType>>(null);
  const [category, setCategory] = useState<HomeCategory>('All');

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isError,
    refetch,
    isRefetching,
  } = useInfiniteProductsQuery({category});

  const handleChangeCategory = (newCategory: HomeCategory) => {
    setCategory(newCategory); // Update category state
  };

  const {bottom} = useSafeAreaInsets();
  const {height} = useWindowDimensions();
  const paddingBottom = bottom + (height * 0.19) / 2;

  useEffect(() => {
    // Scroll to top when category changes after refetching
    if (!isRefetching) {
      listRef.current?.scrollToOffset({offset: 0, animated: true});
    }
  }, [category, isRefetching]);

  const {refreshing, onRefresh} = useRefreshProducts(refetch);
  // Load more products when scrolling to the bottom
  const onEndReached = () => {
    if (!hasNextPage || isLoading) {
      return;
    }
    fetchNextPage();
  };

  if (isLoading) {
    return <HomeLoader />;
  }

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
        isLoading={isLoading || isRefetching}
        category={category}
        handleChangeCategory={handleChangeCategory}
      />
      <ListContainer opacity={isLoading || isRefetching ? 0.5 : 1}>
        <FlashList
          ListHeaderComponent={
            <ListHeader isLoading={isLoading || refreshing} />
          }
          scrollEnabled={!isLoading && !isRefetching}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: paddingBottom}}
          ref={listRef}
          data={data}
          keyExtractor={item => `${id}-product-${item.id}`}
          renderItem={({item}) => <Product item={item} />}
          ItemSeparatorComponent={Separator}
          estimatedItemSize={100} // Optimize performance
          refreshing={refreshing || isRefetching}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5} // Load more when reaching 50% from the bottom
          ListFooterComponent={hasNextPage ? <ProductsLoader /> : null}
        />
      </ListContainer>
    </Container>
  );
}

type LoadingProp = {
  isLoading: boolean;
};

function ListHeader({isLoading}: LoadingProp) {
  if (isLoading) {
    return <ProductsLoader />;
  }

  return null;
}

function Separator() {
  return <DynamicView my="XS" />;
}
