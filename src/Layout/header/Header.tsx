

import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "../../components/menu/MobileMenu";
import {S} from "./Header_Stylrs"

import React from "react";

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify="space-between" align="center">
                    <Logo />
                    <Menu />
                    <MobileMenu/>
                </FlexWrapper>


            </Container>

        </S.Header>
    );
};

