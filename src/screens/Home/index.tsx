import {Text} from 'react-native';
import React from 'react';

import {DynamicView, ScreenContainer} from '@components';

export default function Home() {
  return (
    <ScreenContainer>
      <DynamicView>
        <Text>Home</Text>
      </DynamicView>
    </ScreenContainer>
  );
}
