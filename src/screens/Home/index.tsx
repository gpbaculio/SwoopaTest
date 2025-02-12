import {Text} from 'react-native';
import React from 'react';

import {
  DynamicText, 
  DynamicView,
  ScreenContainer,
} from '@components';

export default function Home() {
  return (
    <ScreenContainer>
      <DynamicView>
        <DynamicText>asd</DynamicText>
      </DynamicView>
    </ScreenContainer>
  );
}
