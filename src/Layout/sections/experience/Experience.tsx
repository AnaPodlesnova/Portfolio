import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionSubTitle"
import { TimeLinePoint } from "./TimeLine"
import { theme } from "../../../styles/Theme"
import { Container } from "../../../components/Container"
import { TimeLinePointMobile } from "./TimeLineMobile"

 const points = [
  { year: "2017", job: "Lorem ipsum dolor sit amet" },
  { year: "2020", job: "Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin" },
  { year: "2023", job: "Lorem  dolor sit amet, consectetur adipiscing elit, sed dempor incididunt ut labore et dolore magna adipiscin" },
  { year: "2026", job: "Lorem ipsum amet, consectetur adipiscing elit,Lorem ipsum amet, consectetur adipiscing elit,Lorem ipsum amet, consectetur adipiscing elit," },
 
]


export const Experience = () => {
    return (
        <ExperienceSection>
            <Container>

        <SectionTitle margin="0 0 90px" lineHeight="3px">Experience</SectionTitle>
        <TimeLinePoint point={points} />
        <TimeLinePointMobile point={points} />
        </Container>
        
        </ExperienceSection>
    )
}

const ExperienceSection = styled.section`
background-color: ${theme.colors.secondaryBg};
padding: 50px 0;


    @media ${theme.media.mobile}{
        padding: 0 20px;
    }

`
