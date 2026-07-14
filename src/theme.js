// Dronexy design tokens — extracted from the DroneXY Figma file
export const colors = {
  // Backgrounds
  bg: '#0D0D0D',          // home / main app background
  bgAlt: '#1A1A1A',       // auth & onboarding background
  surface: '#1C1C1E',     // cards
  surfaceAlt: '#242426',  // input fields
  border: '#333333',

  // Text
  text: '#FFFFFF',
  textSecondary: '#9E9E9E',
  textTertiary: '#6E6E6E',
  textPlaceholder: '#5C5C5C',

  // Accents
  green: '#23A004',       // "Address" pill on home search bar
  white: '#FFFFFF',
  black: '#000000',
  danger: '#E5484D',
};

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  pill: 999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const fonts = {
  regular: 'Lato_400Regular',
  bold: 'Lato_700Bold',
  black: 'Lato_900Black',
};

export const type = {
  h1: { fontFamily: fonts.bold, fontSize: 28, color: colors.text },
  h2: { fontFamily: fonts.bold, fontSize: 22, color: colors.text },
  title: { fontFamily: fonts.bold, fontSize: 18, color: colors.text },
  body: { fontFamily: fonts.regular, fontSize: 15, color: colors.text },
  caption: { fontFamily: fonts.regular, fontSize: 13, color: colors.textSecondary },
  small: { fontFamily: fonts.regular, fontSize: 11, color: colors.textSecondary },
};
