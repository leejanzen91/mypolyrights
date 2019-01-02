import { createGlobalStyle } from "styled-components";
import MissionGothicRegular from "../assets/fonts/Mission Gothic Regular.otf";
import MissionGothicBold from "../assets/fonts/Mission Gothic Bold.otf";
import MissionGothicBlack from "../assets/fonts/Mission Gothic Black.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Mission Gothic";
    src: url(${MissionGothicRegular});
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Mission Gothic";
    src: url(${MissionGothicBold});
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Mission Gothic";
    src: url(${MissionGothicBlack});
    font-weight: 600;
    font-style: normal;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Mission Gothic', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
