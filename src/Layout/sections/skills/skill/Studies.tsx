import styled from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import { Icon } from "../../../../components/icon/Icon"
import { theme } from "../../../../styles/Theme"
import { font } from "../../../../styles/Common"


type StudiesPropsType = {
    cours: string
    years: string
}

export const Studies = (props : StudiesPropsType) => {
    return (
        <FlexWrapper gap="20px" align="center">
            <IconCircle>
            <Icon iconId="bookIcon" width="33" height="33" viewBox="0 0 25.2 28"/>
            </IconCircle>
            <FlexWrapper direction="column" align="start" gap="5px">
                <CoursName>{props.cours}</CoursName>
                <YearOfStudy>{props.years}</YearOfStudy>
            </FlexWrapper>
        </FlexWrapper>
    )
}

const IconCircle = styled.div`

border-radius: 100px;
background: ${theme.colors.gradientBtn};
display:flex;
align-items: center;
justify-content: center;
padding: 30px;
    @media ${theme.media.mobile} {

        padding: 20px;
    }
`

export const CoursName = styled.h3`
${font({weight:600, Fmax: 29, Fmin: 24 })};
letter-spacing: 0.05em;
text-transform: capitalize;

`

const YearOfStudy = styled.span`
font-weight: 300;
font-size: 18px;
letter-spacing: 0.05em;
text-transform: capitalize;
color: ${theme.colors.fontNonActiv};
`