// src/theme.ts
import { createTheme } from '@mui/material';

const colors = {
  typeText: {
    primary: '#ffffff',
    secondary: '#217EFD',
    tertiary: '#5CB5AF',
    description: '#979797',
    yellow: '#FFDE0D',
    black: '#000000',
    default: '#1C2142',
  },

  customBackground: {
    primary: '#FFFFFF',
    secondary: '#1C2142',
    tertiary: '#5CB5AF',
    yellow: '#FFDE0D',
    dark: '#000000',
    default: '#EAEAEA',
    blue: '#1976D2',
  },

  button: {
    primary: '#FFFFFF',
    secondary: '#217EFD',
    tertiary: '#5CB5AF',
    default: '#2578A8',
  },

  link: {
    primary: '#ffffff',
    visited: '#FFDE0D',
  },

  linkHover: {
    primary: '#FFDE0D',
    secondary: '#5CB5AF',
    tertiary: '#217EFD',
  },

  icon: {
    primary: '#5CB5AF',
    secondary: '#217EFD',
    tertiary: '#FFDE0D',
    default: '#FFFFFF',
  },

  title: {
    primary: '#ffffff',
    secondary: '#5CB5AF',
    tertiary: '#FFDE0D',
    doc: '#217EFD',
  },

  loading: {
    primary: '#FFFFFF',
    secondary: '#FFDE0D',
    tertiary: '#217EFD',
  },
};

export const themeDefault = createTheme({
  palette: {
    title: {
      primary: colors.title.primary,
      secondary: colors.title.secondary,
      tertiary: colors.title.tertiary,
      doc: colors.title.doc,
    },
    button: {
      primary: colors.button.primary,
      secondary: colors.button.secondary,
      tertiary: colors.button.tertiary,
      default: colors.button.default,
    },
    link: {
      primary: colors.link.primary,
      visited: colors.link.visited,
      hovered: colors.linkHover.primary,
    },
    linkHover: {
      primary: colors.linkHover.primary,
      secondary: colors.linkHover.secondary,
      tertiary: colors.linkHover.tertiary,
    },
    icon: {
      primary: colors.icon.primary,
      secondary: colors.icon.secondary,
      tertiary: colors.icon.tertiary,
      default: colors.icon.default,
    },
    typeText: {
      primary: colors.typeText.primary,
      secondary: colors.typeText.secondary,
      tertiary: colors.typeText.tertiary,
      yellow: colors.typeText.yellow,
      description: colors.typeText.description,
      default: colors.typeText.default,
      black: colors.typeText.black,
    },

    customBackground: {
      primary: colors.customBackground.primary,
      secondary: colors.customBackground.secondary,
      tertiary: colors.customBackground.tertiary,
      yellow: colors.customBackground.yellow,
      dark: colors.customBackground.dark,
      default: colors.customBackground.default,
      blue: colors.customBackground.blue,
    },

    loading: {
      primary: colors.loading.primary,
      secondary: colors.loading.secondary,
      tertiary: colors.loading.tertiary,
    },
  },
  typography: {
    fontFamily: '"Open Sans"',

    h1: {
      color: colors.title.primary,
      lineHeight: '30px',
    },
    h2: {
      color: colors.title.secondary,
      lineHeight: '30px',
    },
    h3: {
      color: colors.title.tertiary,
    },
    h4: {
      color: colors.typeText.primary,
    },
    h5: {
      color: colors.typeText.primary,
    },
    h6: {
      color: colors.typeText.primary,
    },
    body1: {
      color: colors.typeText.default,
    },
    body2: {
      color: colors.typeText.default,
    },
    subtitle1: {
      color: colors.typeText.description,
    },
    subtitle2: {
      color: colors.typeText.description,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: '"Open Sans"',
        },
      },
    },
  },
});
