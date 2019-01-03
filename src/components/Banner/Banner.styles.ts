import styled from 'styled-components';
import { getTheme } from '../../styles';

const { palette } = getTheme();

export const Banner = styled.div`
  background: ${palette.lightyellow};
  border: 2px solid ${palette.yellow};
  border-radius: 5px;
  padding: 1.2em;
  margin-bottom: 30px;
`;
