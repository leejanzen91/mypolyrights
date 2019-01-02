import DefaultPalette from './DefaultPalette';
import DefaultFonts from './fonts';
import { IDefaultPalette, IPartialTheme, ISemanticColors, ITheme } from './theme.types';

function _makeSemanticColorsFromPalette(p: IDefaultPalette, isInverted: boolean) {
  const toReturn: ISemanticColors = {
    buttonBackground: p.themePrimary,
    buttonText: isInverted ? p.white : p.black,
    linkColor: isInverted ? p.lightblue : p.blue,
    siteBackground: isInverted ? p.themeDark : p.themeLight,
    textColor: isInverted ? p.themeLight : p.themeDark,
  };

  return toReturn;
}

let _theme: ITheme = {
  fonts: DefaultFonts,
  isInverted: false,
  palette: DefaultPalette,
  semanticColors: _makeSemanticColorsFromPalette(DefaultPalette, false),
};

export const palette = _theme.palette;
export const semanticColors = _theme.semanticColors;

export const fonts = {
  fontFamily: 'Roboto, sans-serif',
  monospace: 'FiraCode, monospace',
};

export function createTheme(theme: IPartialTheme) {
  const newPalette = { ...DefaultPalette, ...theme.palette };
  const newSemanticColors = {
    ..._makeSemanticColorsFromPalette(newPalette, !!theme.isInverted),
    ...theme.semanticColors,
  };

  return {
    fonts: {
      ...DefaultFonts,
      ...theme.fonts,
    },
    isInverted: !!theme.isInverted,
    palette: newPalette,
    semanticColors: newSemanticColors,
  };
}

export function getTheme() {
  return _theme;
}

export function loadTheme(theme: IPartialTheme) {
  _theme = createTheme(theme);
  return _theme;
}
