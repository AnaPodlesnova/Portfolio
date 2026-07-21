import styled from "styled-components"
import myPhoto from "../../../assets/images/IMG_6647-1.webp"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import letA from "../../../assets/images/A.svg"
import { font } from "../../../styles/Common"



export const About = () => {
    return (
        <AboutMe>
            <Container>
                <FlexWrapper justify="space-around"  wrap="wrap" >
                    <PhotoWrapper>
                        <MyPhoto src={myPhoto} alt="my photo"/>
                    </PhotoWrapper>
                    
            <Information>
                <AboutTitle>About</AboutTitle>
                <AboutText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin ut augue netus fusce fringilla. Aliquam blandit enim odio cursus id. Pulvinar commodo pellentesque non massa, nunc massa nisi est id. Diam est molestie massa commodo pulvinar aliquam arcu gravida. Dictum pretium senectus dolor vulputate tempor ac vel. Placerat proin sed risus at fusce aliquam. Convallis varius auctor quam fusce diam. Vulputate enim est nibh diam pellentesque. Adipiscing dolor turpis egestas velit sit feugiat ultricies.
Id ac placerat dolor sem neque elit. Ut nisl turpis nisi etiam ac nibh.</AboutText>
            </Information>
                </FlexWrapper>
            </Container>
        </AboutMe>
    )
}

const AboutMe = styled.section`
    background-color: ${theme.colors.secondaryBg};
        @media ${theme.media.mobile} {
       padding: 0 20px;
    }
`

const MyPhoto = styled.img`
margin: 60px 30px;
    @media ${theme.media.mobile} {
        width: 255px;
    }

`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        width: 400px;
        height: 535px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 35px;
        z-index: -1;
   @media ${theme.media.mobile} {
        width: 255px;
        height: 325px;
    }

    }
`

const Information = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    max-width: 520px;
`

const AboutTitle = styled.h2`
${font({weight:600, Fmax: 70, Fmin: 50 })};

letter-spacing: 0.05em;
text-transform: capitalize;
margin-bottom: 25px;
position: relative;
z-index: 3;

    &::before {
    content: "";
    position: absolute;
    top: -25px;
    left: -5px;
    width: 95px;
    height: 100px;
    background-image: url("${letA}");
    background-repeat: no-repeat;
    background-size: contain;
    z-index: -1;

    @media ${theme.media.mobile} {
        width: 65px;
    }


}


`

const AboutText = styled.p`
font-weight: 400;
font-size: 14px;
letter-spacing: 0.05em;
text-transform: capitalize;
margin-bottom: 40px;
    @media ${theme.media.mobile} {
       margin-bottom: 80px;
    }
`