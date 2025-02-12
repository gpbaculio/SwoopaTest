import React, {Suspense, useId, useState} from 'react';

import {DynamicView, SkeletonLoader} from '@components';
import {
  Container,
  HeaderButton,
  HeaderLabel,
  IconClothing,
  IconContainer,
  IconGarden,
  IconHome,
  IconHouseHold,
  Title,
} from './components';

import {Product} from 'src/mocks';
import {useInfiniteProductsQuery} from './hooks';
import {View} from 'react-native';

type HomeCategory = Product['category'] | 'All';

const categories = [
  {key: 'All', Icon: IconHome},
  {key: 'HouseHold', Icon: IconHouseHold},
  {key: 'Clothings', Icon: IconClothing},
  {key: 'Garden', Icon: IconGarden},
];

export default function Home() {
  const [category, setCategory] = useState<HomeCategory>('All');

  const id = useId();
  const {
    products,
    pagination,
    isLoading,
    isError,
    goToNextPage,
    goToPreviousPage,
  } = useInfiniteProductsQuery({category: 'All'});

  return (
    <Container>
      <Title />
      <SkeletonLoader>
        <DynamicView width={100} height={100} backgroundColor="GREY_TEXT" />
      </SkeletonLoader>
      <DynamicView my="XS" variant="rowAlignCenter">
        {categories.map(({key, Icon}) => {
          const isActive = category === key;

          return (
            <HeaderButton
              key={`${id}-header-button-${key}`}
              onPress={() => setCategory(key as HomeCategory)}>
              <IconContainer>
                <Icon isActive={isActive} />
              </IconContainer>
              <HeaderLabel label={key} isActive={isActive} />
            </HeaderButton>
          );
        })}
      </DynamicView>
    </Container>
  );
}
