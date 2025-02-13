import {ContainerProp, DynamicAnimatedView} from '@components';
import React from 'react';
import {FadeIn, FadeOut} from 'react-native-reanimated';

export function HeadersContainer({children}: ContainerProp) {
  return (
    <DynamicAnimatedView
      entering={FadeIn}
      exiting={FadeOut}
      my="XS"
      variant="rowAlignCenter">
      {children}
    </DynamicAnimatedView>
  );
}
