import React, {useId, useState} from 'react';

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

type HomeCategory = Product['category'] | 'All';

const categories = [
  {key: 'All', Icon: IconHome},
  {key: 'HouseHold', Icon: IconHouseHold},
  {key: 'Clothings', Icon: IconClothing},
  {key: 'Garden', Icon: IconGarden},
];

function Home() {
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
const mockHeaders = new Array(4).fill(null);
export default function H() {
  return (
    <Container>
      <SkeletonLoader>
        <>
          <DynamicView
            width={150}
            height={24}
            borderRadius={4}
            backgroundColor="BUTTON_ACTIVE"
          />
          <DynamicView my="XS" variant="rowAlignCenter">
            {mockHeaders.map((_, index) => (
              <DynamicView key={index} variant="centerItems" mr="S">
                <DynamicView
                  width={36}
                  height={36}
                  borderRadius={36}
                  backgroundColor="BUTTON_ACTIVE"
                />
                <DynamicView
                  mt="XXS"
                  width={index === 0 ? 20 : 50}
                  height={20}
                  borderRadius={4}
                  backgroundColor="BUTTON_ACTIVE"
                />
              </DynamicView>
            ))}
          </DynamicView>
        </>
      </SkeletonLoader>
    </Container>
  );
}
