import React, { Component, Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AppDefinition } from './AppDefinition';
import { Nav } from '../Nav';

import { GlobalStyle } from "../../styles/globalStyles";
import { Root, Header, Logo, Body, Footer, Outro } from './App.styles';

class App extends Component {
  public render(): JSX.Element {
    return (
      <Router>
        <Root>
          <GlobalStyle />
          <Header>
            <Logo>My Poly Rights</Logo>
            <Nav pages={AppDefinition.pages} />
          </Header>
          <Body>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {AppDefinition.pages.map((page, pageIndex) => {
                  const PageComponent = page.component();
                  return (
                    <Route key={pageIndex} path={page.url} exact={true}>
                      <PageComponent />
                    </Route>
                  )
                })}
              </Switch>
            </Suspense>
          </Body>
          <Footer><Outro>We just want the same rights as everyone else.</Outro></Footer>
        </Root>
      </Router>
    );
  }
}

export default App;
