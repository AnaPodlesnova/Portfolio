
import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";
import { useState } from "react";
import { Link } from "react-scroll";


export const MobileMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}
    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setmenuIsOpen(false)}}>
                <ul>
                    <ListItem><MenuLink to="skills" >Skills</MenuLink></ListItem>
                    <ListItem><MenuLink to="portfolio">Portfolio</MenuLink></ListItem>
                    <ListItem><MenuLink to="contacts">Contacts</MenuLink></ListItem>
                </ul>
                </MobileMenuPopup>
            </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 100px;
    height: 100px;
    top: 0;
    right: 10px;
    z-index: 999;
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.fontNonActiv};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.fontNonActiv};
        position: absolute;
        transform: translateY(-10px);

        ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0);
        `}
        }

        &::after {
        content: "";
        display: block;
        width: 20px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(10px) translateX(16px);

           ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0);
            width: 36px;
        `}
        }
    }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;

    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: blur(15px);
    background-color: ${theme.colors.headerBurgerBG};

    opacity: 0;
    
    transform: translateY(-100%);
    transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out, visibility 0s linear 0.8s;
    pointer-events: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
            transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out, visibility 0s linear 0s;
            pointer-events: auto;
        `}

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 70px;
    }
`
 

const ListItem = styled.li`

`
const MenuLink = styled(Link)`
font-weight: 400;
font-size: 20px;
color: ${theme.colors.fontNonActiv};

    &:hover {
        cursor: pointer;
        color: ${theme.colors.accent}
    }
`