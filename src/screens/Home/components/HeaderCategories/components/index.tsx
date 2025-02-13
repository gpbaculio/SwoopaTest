import React from 'react';

import {
  ContainerProp,
  DynamicMaterialDesignIcons,
  DynamicMaterialIcons,
  DynamicText,
  DynamicTouchableOpacity,
  DynamicTouchableOpacityProps,
  DynamicView,
} from '@components';

import {colors} from 'src/theme/variants';

import {homeStyles} from '../../index';

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

export type HeaderIcon = {
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

export function IconContainer({children}: ContainerProp) {
  return (
    <DynamicView
      backgroundColor="BACKGROUND_WHITE"
      style={homeStyles.shadow}
      width={36}
      height={36}
      borderRadius={36}
      variant="centerItems">
      {children}
    </DynamicView>
  );
}
