import React from 'react';
import {StyleSheet} from 'react-native';

import {
  ContainerProp,
  DynamicMaterialDesignIcons,
  DynamicMaterialIcons,
  DynamicText,
  DynamicTouchableOpacity,
  DynamicTouchableOpacityProps,
  DynamicView,
  ScreenContainer,
} from '@components';

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
    <DynamicView variant="rowAlignCenter">
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
    </DynamicView>
  );
}

export function IconContainer({children}: ContainerProp) {
  return (
    <DynamicView
      backgroundColor="BACKGROUND_WHITE"
      style={styles.shadow}
      width={36}
      height={36}
      borderRadius={36}
      variant="centerItems">
      {children}
    </DynamicView>
  );
}

type HeaderIcon = {
  isActive: boolean;
};

export function IconHome({isActive}: HeaderIcon) {
  return (
    <DynamicMaterialDesignIcons
      size={24}
      name="home"
      color={isActive ? colors.PRIMARY_BLUE : colors.GREY_TEXT}
    />
  );
}

export function IconHousehold({isActive}: HeaderIcon) {
  return (
    <DynamicMaterialDesignIcons
      size={24}
      name="toggle-switch-off"
      color={isActive ? colors.PRIMARY_BLUE : colors.GREY_TEXT}
    />
  );
}

export function IconClothing({isActive}: HeaderIcon) {
  return (
    <DynamicMaterialIcons
      size={24}
      name="local-fire-department"
      color={isActive ? colors.PRIMARY_BLUE : colors.GREY_TEXT}
    />
  );
}

export function IconGarden({isActive}: HeaderIcon) {
  return (
    <DynamicMaterialIcons
      size={24}
      name="electric-bolt"
      color={isActive ? colors.PRIMARY_BLUE : colors.GREY_TEXT}
    />
  );
}

type LabelProp = {
  label: string;
};

export function HeaderLabel({label, isActive}: LabelProp & HeaderIcon) {
  return (
    <DynamicText
      mt="XXXS"
      fontSize={16}
      fontFamily="Nunito-SemiBold"
      color={isActive ? 'PRIMARY_BLUE' : 'GREY_TEXT'}>
      {label}
    </DynamicText>
  );
}

export function HeaderButton({
  children,
  onPress,
  ...rest
}: DynamicTouchableOpacityProps & ContainerProp) {
  return (
    <DynamicTouchableOpacity
      activeOpacity={0.8}
      variant="centerItems"
      mr="S"
      onPress={onPress}
      {...rest}>
      {children}
    </DynamicTouchableOpacity>
  );
}

export * from './HomeLoader';

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white',
    shadowColor: '#000', // Black shadow
    shadowOffset: {width: 0, height: 2}, // iOS shadow direction
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 3.5, // iOS blur radius
    elevation: 5, // Android shadow
  },
});
