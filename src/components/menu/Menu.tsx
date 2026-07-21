
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Link } from "react-scroll";

export const Menu = () => {
    return (
        <StyledMenu>
                <ul>
                    <ListItem><MenuLink to="skills" smooth={true} activeClass="active" spy={true}>Skills</MenuLink></ListItem>
                    <ListItem><MenuLink to="portfolio" smooth={true}activeClass="active" spy={true}>Portfolio</MenuLink></ListItem>
                    <ListItem><MenuLink to="contacts" smooth={true}activeClass="active" spy={true}offset={-250}>Contacts</MenuLink></ListItem>
                </ul>
            </StyledMenu>
    )
}

const StyledMenu = styled.nav`

ul {
   
    display: flex;
    gap: 70px;
}

    @media ${theme.media.tablet} {
        display: none;
    }
`

const ListItem = styled.li`

`
const MenuLink = styled(Link)`
font-weight: 400;
font-size: 20px;
color: ${theme.colors.fontNonActiv};
transition: 0.2s;

    &:hover, &.active {
        cursor: pointer;
        color: ${theme.colors.accent};
    }
`