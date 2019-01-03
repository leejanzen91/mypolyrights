import React from 'react';
import { IPage } from '../index';

import { Root, NavList, NavItem, NavLink, NavText } from './Nav.styles';

export interface INavProps {
  pages: IPage[]
}

export const Nav = (props: INavProps) => {
  return (
    <Root>
      <NavList>
        {props.pages.map((page, pageIndex) => (
          <NavItem key={pageIndex}>
            <NavLink exact to={page.url} activeClassName='active'>
              <NavText>{page.name}</NavText>
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Root>
  )
};
