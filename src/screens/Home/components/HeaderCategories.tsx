import React, {useId} from 'react';

import {
  HeaderButton,
  HeaderLabel,
  HeadersContainer,
  homeStyles,
  IconClothing,
  IconContainer,
  IconGarden,
  IconHome,
  IconHousehold,
} from './index';

import {HomeCategory} from '../index';
import {DynamicView} from '@components';

const categories = [
  {key: 'All', Icon: IconHome},
  {key: 'Household', Icon: IconHousehold},
  {key: 'Clothing', Icon: IconClothing},
  {key: 'Garden', Icon: IconGarden},
] as const;

type ProductCategoryProps = {
  categoryKey: string;
};

export const ProductCategory = ({categoryKey}: ProductCategoryProps) => {
  const Category = categories.find(cat => cat.key === categoryKey.trim());

  if (Category) {
    return (
      <DynamicView
        style={homeStyles.shadow}
        width={32}
        height={32}
        borderRadius={3}
        mb="auto"
        variant="centerItems">
        <Category.Icon isActive />
      </DynamicView>
    );
  }

  return null;
};

type HeaderCategoriesProps = {
  category: string;
  handleChangeCategory: (c: HomeCategory) => void;
  isLoading: boolean;
};

export function HeaderCategories({
  category,
  handleChangeCategory,
  isLoading,
}: HeaderCategoriesProps) {
  const id = useId();

  return (
    <HeadersContainer>
      {categories.map(({key, Icon}) => {
        const isActive = category === key;

        return (
          <HeaderButton
            disabled={isLoading}
            opacity={isLoading ? 0.5 : 1}
            key={`${id}-header-button-${key}`}
            onPress={() => handleChangeCategory(key as HomeCategory)}>
            <IconContainer>
              <Icon isActive={isActive} />
            </IconContainer>
            <HeaderLabel label={key} isActive={isActive} />
          </HeaderButton>
        );
      })}
    </HeadersContainer>
  );
}
