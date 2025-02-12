import React from 'react';

import {DynamicView, SkeletonLoader} from '@components';
import {Container} from './index';

const mockHeaders = new Array(4).fill(null);

export default function HomeLoader() {
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
