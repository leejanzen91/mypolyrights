import React, { Component } from "react";
import { RightsList } from '../RightsList/index';

import { GlobalStyle } from "../../styles/globalStyles";
import { Root, Header, Logo, Body } from './App.styles';

class App extends Component {
  public render(): JSX.Element {
    return (
      <Root>
        <GlobalStyle />
        <Header>
          <Logo>My Poly Rights</Logo>
        </Header>
        <Body>
          <h3>Polyamory</h3>
          <span>poly·​am·​ory | \ˌpä-lē-ˈa-mə-rē</span>
          <p>the state or practice of having more than one open romantic relationship at a time</p>

          <h2>What rights do we want?</h2>
          <RightsList />
        </Body>
        <footer><p>Really, we just want the same rights as everyone else.</p></footer>
      </Root>
    );
  }
}

export default App;
