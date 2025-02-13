import React, {useState} from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {FadeIn, FadeOut} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

import {ProductType} from 'src/mocks';

import {
  ContainerProp,
  DynamicAnimatedImageBackground,
  DynamicAnimatedImageBackgroundProps,
  DynamicAnimatedView,
  DynamicText,
  DynamicView,
} from '@components';
import {ProductCategory} from './HeaderCategories';
import {ProductLoader} from './HomeLoader';
import {formatPrice, kmToMiles} from '../utils';
import {homeStyles} from './index';

type ProductProps = {
  item: ProductType;
};

export function Product({item}: ProductProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Container>
      <ProductImage
        source={{uri: item.imageUrl}}
        opacity={loading ? 0 : 1}
        onLoad={() => setLoading(false)} // Hide skeleton when image loads
        onError={() => setLoading(false)} // Hide skeleton if image fails
      >
        <ProductLinearGradient />
        <DynamicView p="S">
          <DynamicView variant="rowAlignCenter" justifyContent="space-between">
            <ProductCategory categoryKey={item.category} />
            <DynamicView>
              <DynamicView variant="rowAlignCenter">
                <Toplabel label={`${kmToMiles(item.distanceInKm)} mi`} />
                <Toplabel label={`${formatPrice(item.price, 'AUD')}`} />
              </DynamicView>
              {item.dealType === 'SALE' ? <Sale /> : null}
            </DynamicView>
          </DynamicView>
        </DynamicView>
      </ProductImage>
      {loading ? (
        <DynamicView position="absolute">
          <ProductLoader />
        </DynamicView>
      ) : null}
    </Container>
  );
}

function Sale() {
  return (
    <DynamicView
      ml="auto"
      mt="XS"
      px="XS"
      py="XXXS"
      borderRadius={16}
      backgroundColor="SALE_GREEN">
      <DynamicText color="BACKGROUND_WHITE" variant="NunitoBold">
        Sale
      </DynamicText>
    </DynamicView>
  );
}
type ToplabelProps = {
  label: string;
};

function Toplabel({label}: ToplabelProps) {
  return (
    <DynamicView
      px="XS"
      py="XXXS"
      ml="XS"
      borderRadius={16}
      backgroundColor="BACKGROUND_WHITE"
      style={homeStyles.shadow}
      variant="centerItems">
      <DynamicText variant="NunitoSemiBold">{label}</DynamicText>
    </DynamicView>
  );
}

function ProductImage({
  children,
  source,
  opacity,
  onLoad,
  onError,
}: DynamicAnimatedImageBackgroundProps & ContainerProp) {
  return (
    <DynamicAnimatedImageBackground
      entering={FadeIn}
      exiting={FadeOut}
      source={source}
      opacity={opacity}
      width="100%"
      height="100%"
      borderRadius={16}
      resizeMode="cover"
      onLoad={onLoad} // Hide skeleton when image loads
      onError={onError} // Hide skeleton if image fails
    >
      {children}
    </DynamicAnimatedImageBackground>
  );
}

function Container({children}: ContainerProp) {
  const {height} = useWindowDimensions();

  return (
    <DynamicAnimatedView
      width="100%"
      height={height * 0.19}
      entering={FadeIn}
      exiting={FadeOut}
      borderRadius={16}
      overflow="hidden">
      {children}
    </DynamicAnimatedView>
  );
}

function ProductLinearGradient() {
  return (
    <>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.2)', 'transparent']}
        style={[styles.linearGradient, styles.topGradient]}
      />
      <LinearGradient
        colors={['transparent', 'rgba(0, 0, 0, 0.2)']}
        style={[styles.linearGradient, styles.bottomGradient]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 16, // Make sure gradient follows rounded corners
    position: 'absolute',
  },
  topGradient: {
    top: 0,
  },
  bottomGradient: {
    bottom: 0,
  },
});
