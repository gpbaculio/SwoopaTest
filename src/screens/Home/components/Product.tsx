import React from 'react';
import {ProductType} from 'src/mocks';
import {DynamicAnimatedView, DynamicText} from '@components';
import {FadeIn, FadeOut} from 'react-native-reanimated';

type ProductProps = {
  item: ProductType;
};

export function Product({item}: ProductProps) {
  return (
    <DynamicAnimatedView entering={FadeIn} exiting={FadeOut}>
      <DynamicText color="TEXT_BLACK">{item.name}</DynamicText>
    </DynamicAnimatedView>
  );
}
