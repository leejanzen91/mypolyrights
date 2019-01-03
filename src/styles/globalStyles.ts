import { createGlobalStyle } from "styled-components";
import { fonts, semanticColors } from './theme'

import MissionGothicRegular from "../assets/fonts/Mission Gothic Regular.otf";
import MissionGothicRegularItalic from "../assets/fonts/Mission Gothic Regular Italic.otf";
import MissionGothicBlack from "../assets/fonts/Mission Gothic Black.otf";
import MissionGothicBlackItalic from "../assets/fonts/Mission Gothic Black Italic.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Mission Gothic";
    src: url(${MissionGothicRegular});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Mission Gothic";
    src: url(${MissionGothicRegularItalic});
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: "Mission Gothic";
    src: url(${MissionGothicBlack});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Mission Gothic";
    src: url(${MissionGothicBlackItalic});
    font-weight: bold;
    font-style: italic;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${fonts.fontFamily};
    color: ${semanticColors.textColor};
    background: ${semanticColors.siteBackground};
    line-height: 1.6;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    text-transform: uppercase;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin-top: .1em;
    margin-bottom: .75em;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.5em;
  }

  a {
    color: ${semanticColors.linkColor};
  }
`;
