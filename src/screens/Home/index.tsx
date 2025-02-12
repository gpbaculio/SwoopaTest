import React from 'react';

import {
  DynamicMaterialDesignIcons,
  DynamicText,
  DynamicView,
} from '@components';
import {Container} from './components';

export default function Home() {
  return (
    <Container>
      <DynamicView>
        <DynamicMaterialDesignIcons name="wave" />
        <DynamicText>asd</DynamicText>
      </DynamicView>
    </Container>
  );
}
