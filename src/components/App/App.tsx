import React, { Component } from "react";
import styled from "styled-components";
// import "./App.css";
import { GlobalStyle } from "../../styles/globalStyles";

const Root = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-bottom: 5px solid
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 3.5em;
`;

class App extends Component {
  render() {
    return (
      <Root>
        <GlobalStyle />
        <Header>
          <Logo>My Poly Rights</Logo>
        </Header>
        <main />
      </Root>
    );
  }
}

export default App;
