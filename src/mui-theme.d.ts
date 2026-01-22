import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    typeText: {
      primary: string;
      secondary: string;
      tertiary: string;
      yellow: string;
      black: string;
      description: string;
      default: string;
    };

    title: {
      primary: string;
      secondary: string;
      tertiary: string;
      doc: string;
    };

    button: {
      primary: string;
      secondary: string;
      tertiary: string;
      default: string;
    };

    link: {
      primary: string;
      visited: string;
      hovered: string;
    };

    linkHover: {
      primary: string;
      secondary: string;
      tertiary: string;
    };

    icon: {
      primary: string;
      secondary: string;
      tertiary: string;
      default: string;
    };

    customBackground: {
      primary: string;
      secondary: string;
      tertiary: string;
      yellow: string;
      dark: string;
      default: string;
      blue: string;
    };

    loading: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }

  interface PaletteOptions {
    typeText?: Palette['typeText'];
    title?: Palette['title'];
    button?: Palette['button'];
    link?: Palette['link'];
    linkHover?: Palette['linkHover'];
    icon?: Palette['icon'];
    customBackground?: Palette['customBackground'];
    loading?: Palette['loading'];
  }
}
