export const colors = {
  PRIMARY_BLUE: '#3174F1', // Primary action buttons (like Facebook icon)
  BACKGROUND_WHITE: '#FFFFFF', // Clean background
  TEXT_BLACK: '#333333', // Main text color
  GREY_TEXT: '#7A7A7A', // Subtle UI text (like timestamps)
  LIGHT_GREY: '#D3D3D3', // Borders, dividers, and subtle UI elements
  SALE_GREEN: '#6DA34D', // Sale tag color
  PRICE_TAG_BLACK: '#000000', // Price text
  OVERLAY_BLACK: 'rgba(0, 0, 0, 0.5)', // Dark overlay for emphasis
  BUTTON_ACTIVE: '#3174F1', // Active button state
  BUTTON_INACTIVE: 'rgba(51, 51, 51, 0.7)', // Inactive buttons
  DISTANCE_TAG_GREY: '#B0B0B0', // Distance indicator text
};

export const container = {
  defaults: {},
  centerItems: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export const spacing = {
  XXXS: 2,
  XXS: 4, // Extra-extra small spacing
  XS: 8, // Extra small spacing
  S: 12, // Small spacing
  M: 16, // Medium spacing (standard padding/margin)
  L: 20, // Large spacing
  XL: 24, // Extra-large spacing
  XXL: 32, // Extra-extra large spacing
  XXXL: 40, // Even larger spacing for big sections
  auto: 'auto', // Automatic spacing for dynamic layouts
};

export const text = {
  defaults: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
  },
  NunitoRegular: {
    fontWeight: '400',
    fontFamily: 'Nunito-Regular',
  },
  NunitoMedium: {
    fontFamily: 'Nunito-Medium',
    fontWeight: '500',
  },
  NunitoSemiBold: {
    fontFamily: 'Nunito-SemiBold',
    fontWeight: '600',
  },
  NunitoBold: {
    fontFamily: 'Nunito-Bold',
    fontWeight: '700',
  },
};
