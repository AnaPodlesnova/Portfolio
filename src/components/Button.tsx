import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";


export const Button = styled.button`

    color: ${theme.colors.font};
    ${font({weight:400, Fmax: 25, Fmin: 17 })};

    letter-spacing: 0.05em;
    text-transform: capitalize;

    padding: 18px 50px;
    border-radius: 10px;
  position: relative;
  overflow: hidden;
  z-index: 0;

  background: ${theme.colors.gradientBtn};

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    background: ${theme.colors.gradientBtnHvr};

    opacity: 0;
    transition: opacity .3s ease;

    z-index: -1;
  }

  &:hover::before {
    opacity: 1;

  }

     @media ${theme.media.tablet}{
        margin-bottom: 50px;
     }
     @media ${theme.media.mobile}{
        padding: 11px 30px;
        border-radius: 7px;
        margin-bottom: 80px;
     }
`