import React, {useState} from 'react';
import {ProductType} from 'src/mocks';
import {
  DynamicAnimatedImage,
  DynamicAnimatedView,
  DynamicImage,
  DynamicText,
} from '@components';
import {FadeIn, FadeOut} from 'react-native-reanimated';

type ProductProps = {
  item: ProductType;
};

export function Product({item}: ProductProps) {
  const [loading, setLoading] = useState(true);
  return (
    <DynamicAnimatedView entering={FadeIn} exiting={FadeOut}>
      <DynamicText color="TEXT_BLACK">{item.name}</DynamicText>
      <DynamicAnimatedImage
        entering={FadeIn}
        exiting={FadeOut}
        source={{uri: item.imageUrl}}
        width={100}
        opacity={loading ? 0 : 1}
        height={100}
        resizeMode="cover"
        onLoad={() => setLoading(false)} // Hide skeleton when image loads
        onError={() => setLoading(false)} // Hide skeleton if image fails
      />
    </DynamicAnimatedView>
  );
}
