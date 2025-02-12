import Animated from 'react-native-reanimated';
import {createBox} from '@shopify/restyle';
import {ScrollView} from 'react-native-gesture-handler';

import {DynamicPressable, DynamicView} from './DynamicRN';

import {createContainer} from '@utils';

import {Theme} from '@theme';

export const DynamicAnimatedView =
  Animated.createAnimatedComponent(DynamicView);

export const AnimatedPressable =
  Animated.createAnimatedComponent(DynamicPressable);

type AnimatedPressableProps = React.ComponentProps<typeof AnimatedPressable>;
export const DynamicAnimatedPressable = createContainer(
  createBox<Theme, AnimatedPressableProps>(AnimatedPressable),
);

const AnimatedScroll = Animated.createAnimatedComponent(ScrollView);

type AnimatedScrollProps = React.ComponentProps<typeof AnimatedScroll>;
export const DynamicScrollView = createContainer(
  createBox<Theme, AnimatedScrollProps>(AnimatedScroll),
);
