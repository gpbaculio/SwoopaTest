import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {FadeIn, FadeOut} from 'react-native-reanimated';

import {
  ContainerProp,
  DynamicAnimatedView,
  DynamicAnimatedViewProps,
  DynamicMaterialDesignIcons,
  DynamicText,
  DynamicView,
  ScreenContainer,
} from '@components';
export * from './HomeLoader';
export * from './Product';
export * from './HeaderCategories';

import {colors} from 'src/theme/variants';

export function Container({children}: ContainerProp) {
  return (
    <ScreenContainer>
      <DynamicView px="M" pt="M">
        {children}
      </DynamicView>
    </ScreenContainer>
  );
}

export function Title() {
  return (
    <DynamicAnimatedView
      entering={FadeIn}
      exiting={FadeOut}
      variant="rowAlignCenter">
      <DynamicMaterialDesignIcons
        color={colors.GREY_TEXT}
        size={20}
        name="hand-wave"
      />
      <DynamicText
        ml="XXS"
        fontSize={20}
        variant="NunitoBold"
        color="TEXT_BLACK">
        Marketplace
      </DynamicText>
    </DynamicAnimatedView>
  );
}

export function ListContainer({
  children,
  opacity,
}: ContainerProp & DynamicAnimatedViewProps) {
  const {height} = useWindowDimensions();

  return (
    <DynamicAnimatedView
      opacity={opacity}
      entering={FadeIn}
      exiting={FadeOut}
      flex={1}
      minHeight={height * 0.9}>
      {children}
    </DynamicAnimatedView>
  );
}

export const homeStyles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000', // Black shadow
    shadowOffset: {width: 0, height: 2}, // iOS shadow direction
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 3.5, // iOS blur radius
    elevation: 5, // Android shadow
  },
});
