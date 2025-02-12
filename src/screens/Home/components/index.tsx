import React from 'react';
import {ContainerProp, DynamicView, ScreenContainer} from '@components';

export * from './HomeLoader';

export function Container({children}: ContainerProp) {
  return (
    <ScreenContainer>
      <DynamicView px="M" pt="M">
        {children}
      </DynamicView>
    </ScreenContainer>
  );
}
