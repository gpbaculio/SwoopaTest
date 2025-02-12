import React, {useId} from 'react';

import {
  HeaderButton,
  HeaderLabel,
  HeadersContainer,
  IconClothing,
  IconContainer,
  IconGarden,
  IconHome,
  IconHousehold,
} from './index';
import {HomeCategory} from '../index';

const categories = [
  {key: 'All', Icon: IconHome},
  {key: 'Household', Icon: IconHousehold},
  {key: 'Clothings', Icon: IconClothing},
  {key: 'Garden', Icon: IconGarden},
];

type HeaderCategoriesProps = {
  category: string;
  handleChangeCategory: (c: HomeCategory) => void;
};

export function HeaderCategories({
  category,
  handleChangeCategory,
}: HeaderCategoriesProps) {
  const id = useId();

  return (
    <HeadersContainer>
      {categories.map(({key, Icon}) => {
        const isActive = category === key;

        return (
          <HeaderButton
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
