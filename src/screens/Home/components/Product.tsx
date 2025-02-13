import React, {useEffect, useState} from 'react';
import {ProductType} from 'src/mocks';
import {
  DynamicAnimatedImage,
  DynamicAnimatedImageBackground,
  DynamicAnimatedView,
  DynamicImage,
  DynamicText,
} from '@components';
import {FadeIn, FadeOut} from 'react-native-reanimated';
import {Image, useWindowDimensions} from 'react-native';

type ProductProps = {
  item: ProductType;
};

export function Product({item}: ProductProps) {
  const [loading, setLoading] = useState(true);
  const {height} = useWindowDimensions();

  return (
    <DynamicAnimatedView
      width="100%"
      height={height * 0.18}
      entering={FadeIn}
      exiting={FadeOut}
      borderRadius={16}
      overflow="hidden">
      <DynamicAnimatedImageBackground
        source={{uri: item.imageUrl}}
        opacity={loading ? 0 : 1}
        width="100%"
        height="100%"
        borderRadius={16}
        resizeMode="cover"
        onLoad={() => setLoading(false)} // Hide skeleton when image loads
        onError={() => setLoading(false)} // Hide skeleton if image fails
      >
        <DynamicText color="TEXT_BLACK">{item.name}</DynamicText>
      </DynamicAnimatedImageBackground>
    </DynamicAnimatedView>
  );
}
