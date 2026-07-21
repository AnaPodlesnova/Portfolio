import styled from "styled-components"
import { Icon } from "../../components/icon/Icon"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../components/Container"
import { theme } from "../../styles/Theme"
import { font } from "../../styles/Common"


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <FlexWrapper justify="space-around" >
                <FlexWrapper gap="40px" >
                    <ContactMe>Call me:<a href="tel:123-456-789">123-456-789</a></ContactMe>
                <ContactMe>Email:<a href="mailto:xxx@xyz.com">xxx@xyz.com</a></ContactMe>
                </FlexWrapper>
                
            <SocialList>
                <SocialItem>
                    <SocialLink>
                    <Icon iconId={"fb"} width="35px" height="35px" viewBox="0 0 35 35" ></Icon>
                </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                    <Icon iconId={"insta"} width="35px" height="35px" viewBox="0 0 35 35"></Icon>
                </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                    <Icon iconId={"gitHub"}width="35px" height="35px" viewBox="0 0 35 35"></Icon>
                </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                    <Icon iconId={"linkedIn"}width="35px" height="35px" viewBox="0 0 35 35"></Icon>
                </SocialLink>
                </SocialItem>
                <SocialItem>
                    <SocialLink>
                    <Icon iconId={"telega"}width="45px" height="35px" viewBox="0 0 35 35 "></Icon>
                </SocialLink>
                </SocialItem>
            </SocialList>
            </FlexWrapper>
            </Container>
        </StyledFooter>
    
    )

}

const StyledFooter = styled.footer`
box-sizing: border-box;
background-color: transparent;
padding: 20px ;
position: absolute;
bottom:0;
   left: 0;
    right: 0;
z-index: 10;
@media ${theme.media.mobile} {
${FlexWrapper}:only-child{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    gap: 10px
}
${FlexWrapper}{
 flex-direction: column;
gap:5px
}
}

`

const ContactMe = styled.span`
${font({weight:600, Fmax: 22, Fmin: 16 })};
display: flex;
flex-direction: column;
color: ${theme.colors.font};
 a {
    text-decoration: none;
    color: #fafafa;
     transition: color 0.3s;
    &:hover{
        color: ${theme.colors.accent};
    }
 }
@media ${theme.media.mobile} {
    flex-direction: row;
    gap: 10px;
}
`

const SocialList = styled.ul`
display: flex;
gap: 20px;
align-items: center;
 @media ${theme.media.tablet}{
    gap: 10px;
 }


`
const SocialItem = styled.li`
transition: 0.3s;
   &:hover{
    transform:translateY(-5px);
   }
`

const SocialLink = styled.a`

    color: ${theme.colors.font};
    transition: color 0.3s ease;

    &:hover {
        color: ${theme.colors.accent};
    }
`



