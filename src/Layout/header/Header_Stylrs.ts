import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  background: linear-gradient(
    180deg,
    rgba(31, 31, 31, 10) 0%, 
    rgba(31, 31, 31, 0.829) 50%,
    rgba(31, 31, 31, 0.61) 80%,
    rgba(0, 0, 0, 0) 100%
  );   
 position:fixed;
    padding: 20px 0;

overflow: hidden;
      /* position: absolute; */
       top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
        @media ${theme.media.tablet} {
       padding: 20px 20px;
    }
`

export const S = {
    Header
}