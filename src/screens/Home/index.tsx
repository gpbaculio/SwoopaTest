import React from 'react';

import {
  DynamicMaterialDesignIcons,
  DynamicText,
  DynamicTouchableOpacity,
  DynamicView,
} from '@components';
import {
  Container,
  HeaderLabel,
  IconContainer,
  IconHome,
  Title,
} from './components';

import {colors} from 'src/theme/variants';

export default function Home() {
  return (
    <Container>
      <Title />
      <DynamicView my="XS" variant="rowAlignCenter">
        <DynamicTouchableOpacity activeOpacity={0.8} variant="centerItems">
          <IconContainer>
            <IconHome isActive />
          </IconContainer>
          <HeaderLabel label="All" isActive />
        </DynamicTouchableOpacity>
      </DynamicView>
    </Container>
  );
}
