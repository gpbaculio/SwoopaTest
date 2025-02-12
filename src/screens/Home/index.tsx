import React, {useId, useState} from 'react';

import {DynamicView} from '@components';
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
import {useInfiniteProductsQuery, usePaginatedQuery} from './hooks';

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
  console.log('products ', products);
  return (
    <Container>
      <Title />
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
