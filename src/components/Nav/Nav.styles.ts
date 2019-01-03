import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { getTheme } from '../../styles';

const { palette } = getTheme();

export const Root = styled.nav`
  margin: 10px;
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-flex;
  list-style: none;
`;

export const NavLink = styled(Link)`
  padding: 4px 8px;
  color: ${palette.themeLight};
  text-decoration: none;
  background: transparent;
  transition: border .2s ease-in-out;
`;

export const NavText = styled.span`
  border-bottom: 1px solid transparent;
  transition: border .2s ease-in-out;

  ${NavLink}:hover & {
    border-bottom: 1px solid ${palette.themeLight};
  }

  ${NavLink}.active & {
    border-bottom: 2px solid ${palette.themeLight};
  }
`;
