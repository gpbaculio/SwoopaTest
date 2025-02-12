import React from 'react';
import {ProductType} from 'src/mocks';
import {DynamicText, DynamicView} from '@components';

type ProductProps = {
  item: ProductType;
};

export function Product({item}: ProductProps) {
  return (
    <DynamicView>
      <DynamicText color="TEXT_BLACK">{item.name}</DynamicText>
    </DynamicView>
  );
}
