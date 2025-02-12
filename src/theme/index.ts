import {createTheme} from '@shopify/restyle';
import {spacing, colors, container, text} from './variants';

const theme = createTheme({
  colors,
  spacing,
  breakpoints: {},
  text,
  container,
});

// for dark mode create another theme

export type Theme = typeof theme;

export default theme;
