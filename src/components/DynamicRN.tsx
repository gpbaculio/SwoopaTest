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

export const DynamicPressable = createContainer(
  createBox<Theme, PressableProps>(Pressable),
);

export const DynamicTouchableOpacity = createContainer(
  createBox<Theme, TouchableOpacityProps>(TouchableOpacity),
);

export const DynamicKeyboardAvoidingView = createContainer(
  createBox<Theme, KeyboardAvoidingViewProps>(KeyboardAvoidingView),
);
