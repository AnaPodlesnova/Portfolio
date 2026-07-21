import styled from "styled-components"
import photo from '../../../assets/images/IMG_6632.webp'
import { FlexWrapper } from "../../../components/FlexWrapper"

import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import Sun from "../../../assets/images/Sun.svg"
import { font } from "../../../styles/Common"
import cvFile from "../../../assets/Ana_Podlesnova_SV.pdf"

export const Main = () =>  {
    return (
        <StyledMain id="home">
            <Container>
            <FlexWrapper align="center" justify="space-around" wrap="wrap-reverse">
                <TitleWrapper>
                    <SmallText>welcome</SmallText>
                    <Name>I’m Ana Podlesnova</Name>
                    <MainTitle>web developer / prepress designer</MainTitle>
                    <DownloadSV href={cvFile} download="Ana_Podlesnova_CV.pdf">
                        Download CV</DownloadSV>
                    </TitleWrapper>
                <Photo src={photo} alt="" />

            </FlexWrapper>
            </Container>

        </StyledMain>
    )
}

const StyledMain = styled.section`
/* min-height: 100vh; */
background-color: ${theme.colors.primaryBg};
display: flex;
flex-wrap: nowrap;
    background-color: ${theme.colors.primaryBg};
    background-image: url(${Sun});
    background-repeat: no-repeat;
    background-size: 110vw auto;
    background-position-x: -48vw;
    background-position-y: 22vh;

    overflow: hidden;

    @media ${theme.media.tablet} {
        background-size: 150vw auto;
    background-position-x: -66vw;
    background-position-y: 30vh;
    padding: 0 20px;
            flex-wrap: wrap-reverse;
    }
`
const SmallText = styled.span`
${font({weight:300, Fmax: 25, Fmin: 18 })};

letter-spacing: 0.36em;
text-transform: uppercase;
`

const Photo = styled.img`
  width: 100%;
  max-width: clamp(280px, 40vw, 568px);

  height: auto;
  display: block;
  object-fit: cover;
    flex-shrink: 1;
    min-width: 335px;
margin-bottom: 190px;
    @media ${theme.media.tablet}{
        margin-bottom: 50px;
width: 100%;      /* на tablet ширина уже не важна для nowrap-логики — задаём под перенос */
        max-width: 400px;
    }
    @media ${theme.media.mobile}{
        width: 307px;
        margin-bottom: 30px;

    }
`

const MainTitle = styled.h1`
${font({weight:250, Fmax: 19, Fmin: 13 })};
letter-spacing: 0.01em;
text-transform: uppercase;
margin-bottom: 40px;
    @media ${theme.media.mobile} {
        margin-bottom: 25px;
    }

`
const Name = styled.p`
${font({weight:600, Fmax: 65, Fmin: 30 })};
max-width: 400px;
margin-bottom: 25px;
text-align: start;
    @media ${theme.media.tablet} {
        margin: 15px 0 10px; 
        white-space: nowrap;

    }
`
const TitleWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    @media ${theme.media.tablet} {
        align-items: center;
    }
`

const DownloadSV =styled.a`
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