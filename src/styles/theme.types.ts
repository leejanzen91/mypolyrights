export interface IPalette {
  black: string;
  white: string;
  blue: string;
  red: string;
  yellow: string;
  lightblue: string;
  lightred: string;
  lightyellow: string;
}

export interface IDefaultPalette extends IPalette {
  themePrimary: string;
  themeDark: string;
  themeLight: string;
  themeSecondary: string;
}

export interface IFonts {
  fontFamily: string;
}

export interface ISemanticColors {
  buttonBackground: string;
  buttonText: string;
  linkColor: string;
  siteBackground: string;
  textColor: string;
}

export interface ITheme {
  fonts: IFonts;
  isInverted: boolean;
  palette: IDefaultPalette;
  semanticColors: ISemanticColors;
}

export interface IPartialTheme {
  fonts?: Partial<IFonts>;
  isInverted?: boolean;
  palette?: Partial<IDefaultPalette>;
  semanticColors?: Partial<ISemanticColors>;
}