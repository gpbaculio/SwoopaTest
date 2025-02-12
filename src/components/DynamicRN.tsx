import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Pressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  Image,
  ImageProps,
  TextInputProps,
  TextInput,
  ImageBackground,
  ImageBackgroundProps,
} from 'react-native';
import {createBox, createText} from '@shopify/restyle';

import {createContainer} from '@utils';

import {Theme} from '@theme';

export const DynamicView = createContainer(createBox<Theme, ViewProps>(View));

export const DynamicText = createText<Theme>();

export const DynamicTextInput = createContainer(
  createBox<Theme, TextInputProps>(TextInput),
);

export const DynamicImage = createContainer(
  createBox<Theme, ImageProps>(Image),
);

export const DynamicImageBackground = createContainer(
  createBox<Theme, ImageBackgroundProps>(ImageBackground),
);

export const DynamicPressable = createContainer(
  createBox<Theme, PressableProps>(Pressable),
);

export const DynamicTouchableOpacity = createContainer(
  createBox<Theme, TouchableOpacityProps>(TouchableOpacity),
);

export type DynamicTouchableOpacityProps = React.ComponentProps<
  typeof DynamicTouchableOpacity
>;

export const DynamicKeyboardAvoidingView = createContainer(
  createBox<Theme, KeyboardAvoidingViewProps>(KeyboardAvoidingView),
);
