import React from 'react';
import {useWindowDimensions} from 'react-native';

import {DynamicView, SkeletonLoader} from '@components';
import {Container, HeadersContainer} from './index';

const mockHeaders = new Array(4).fill(null);
const mockProducts = new Array(5).fill(null);

export function HomeLoader() {
  const {width, height} = useWindowDimensions();

  return (
    <Container>
      <SkeletonLoader>
        <>
          <DynamicView
            width={160}
            height={28}
            borderRadius={4}
            backgroundColor="GREY_TEXT"
          />
          <HeadersContainer>
            {mockHeaders.map((_, index) => (
              <DynamicView key={index} variant="centerItems" mr="S">
                <DynamicView
                  width={36}
                  height={36}
                  borderRadius={36}
                  backgroundColor="GREY_TEXT"
                />
                <DynamicView
                  mt="XS"
                  width={index === 0 ? 20 : 50}
                  height={20}
                  borderRadius={4}
                  backgroundColor="GREY_TEXT"
                />
              </DynamicView>
            ))}
          </HeadersContainer>
          {mockProducts.map((_i, index) => (
            <DynamicView
              key={`mock-product-${index}`}
              width={width - 32}
              height={height * 0.21}
              borderRadius={16}
              my="XS"
              backgroundColor="GREY_TEXT"
            />
          ))}
        </>
      </SkeletonLoader>
    </Container>
  );
}
