import styled from "styled-components";
import { getTheme } from '../../styles/theme';

export const Root = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: #222;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-top: 5px solid ${getTheme().palette.blue};
  box-shadow: inset 0 5px ${getTheme().palette.red};
`;

export const Logo = styled.h1`
  font-weight: bolder;
  font-size: 3.5em;
  margin: .5em 0;
`;

export const Body = styled.main`
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
