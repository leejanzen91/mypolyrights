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

const palette: IPalette = {
  black: "#222222",
  white: "#f4f4f4",
  blue: "#3d3dfa",
  red: "#fa3d3d",
  yellow: "#f3d117",
  lightblue: "#5757ff",
  lightred: "#fa8282",
  lightyellow: "#ffe866",
};

export const DefaultPalette: IDefaultPalette = {
  ...palette,
  themePrimary: palette.blue,
  themeDark: palette.black,
  themeLight: palette.white,
  themeSecondary: palette.red
}

export default DefaultPalette;
