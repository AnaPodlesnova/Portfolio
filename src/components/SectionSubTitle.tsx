import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

type H2PaddingPropsType = {
    margin?: string
    lineHeight?: string
}




export const SectionTitle = styled.h2<H2PaddingPropsType>`
${font({weight:600, Fmax: 56, Fmin: 40 })};

letter-spacing: 0.05em;
text-transform: capitalize;
color: ${theme.colors.font};
padding: ${props => props.margin || "0"};
position: relative;

    &::before {
        box-sizing: border-box;
        max-width: 100%;
        content: "";
        position: absolute;
        width: 340px;
        height: ${props => props.lineHeight || "0"};
        background-color: ${theme.colors.font};
        z-index: 3;
        top: 85px;
        left: 0;
        right: 0;

        @media ${theme.media.mobile}{
            width: 230px;
            top: 65px;
        }
    }

        @media ${theme.media.mobile}{
    margin: 40px 0 20px;
    padding: 0;
    }
`