import React from 'react';
import {
  ContainerProp,
  DynamicMaterialDesignIcons,
  DynamicText,
  DynamicView,
  ScreenContainer,
} from '@components';
import {colors} from 'src/theme/variants';
import {StyleSheet} from 'react-native';

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
      width={32}
      height={32}
      borderRadius={32}
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
      size={21}
      name="home"
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
