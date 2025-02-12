import Feather from '@react-native-vector-icons/feather';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import Ionicons from '@react-native-vector-icons/ionicons';
import {createBox} from '@shopify/restyle';

import {createContainer} from '@utils';

import {Theme} from '@theme';

type FeatherIconProps = React.ComponentProps<typeof Feather>;
export const DynamicFeather = createContainer(
  createBox<Theme, FeatherIconProps>(Feather),
);

type IoniconsProps = React.ComponentProps<typeof Ionicons>;
export const DynamicIonicons = createContainer(
  createBox<Theme, IoniconsProps>(Ionicons),
);

type MaterialIconsProps = React.ComponentProps<typeof MaterialIcons>;
export const DynamicMaterialIcons = createContainer(
  createBox<Theme, MaterialIconsProps>(MaterialIcons),
);

type MaterialDesignIconsProps = React.ComponentProps<
  typeof MaterialDesignIcons
>;
export const DynamicMaterialDesignIcons = createContainer(
  createBox<Theme, MaterialDesignIconsProps>(MaterialDesignIcons),
);
