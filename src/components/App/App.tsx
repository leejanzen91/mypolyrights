import React, { Component } from "react";
import { RightsList } from '../RightsList/index';

import { GlobalStyle } from "../../styles/globalStyles";
import { Root, Header, Logo, Body, Banner, Footer, Outro } from './App.styles';

class App extends Component {
  public render(): JSX.Element {
    return (
      <Root>
        <GlobalStyle />
        <Header>
          <Logo>My Poly Rights</Logo>
        </Header>
        <Body>
          <Banner>
            <h3>Polyamory</h3>
            <pre>poly·​am·​ory | \ˌpä-lē-ˈa-mə-rē</pre>
            <p>the state or practice of having more than one open romantic relationship at a time</p>
          </Banner>

          <h2>What rights do we want?</h2>
          <RightsList />
        </Body>
        <Footer><Outro>We just want the same rights as everyone else.</Outro></Footer>
      </Root>
    );
  }
}

export default App;
