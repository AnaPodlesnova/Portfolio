
import { SectionTitle } from "../../../components/SectionSubTitle"
import { Work } from "./Work"
import Project2 from '../../../assets/images/1-2.webp'
import Project1 from '../../../assets/images/2.webp'
import Project3 from '../../../assets/images/3.webp'
import Project4 from '../../../assets/images/4.webp'
import styled from "styled-components"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

const works = [
    { image: Project1, name: "Project 1", subject: "Prepress", year: 2022, link: "#"},
    { image: Project2, name: "Project 2", subject: "Design", year: 2022, link: "#" },
    { image: Project3, name: "Project 3", subject: "React", year: 2022, link: "#" },
    { image: Project4, name: "Project 4", subject: "JS", year: 2022, link: "#" }
]



export const Portfolio = () => {
    return (
        <StyledWorks id="portfolio">
            <Container>
                <TitleWrapper>
                    <SectionTitle margin="0 0 80px" lineHeight="3px">Portfolio</SectionTitle>
                </TitleWrapper>
                    <WorksList>
                    {works.map((work, index) =>(
                        <WorksItem key={index}>
                            <Work
                                
                                image={work.image}
                                name={work.name}
                                subject={work.subject}
                                year={work.year}
                                linkProject={work.link}
                            />
                        </WorksItem>
                    ))}
                    </WorksList>

            </Container>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
background-color: ${theme.colors.primaryBg};
        @media ${theme.media.mobile}{
            padding: 0 20px;
        }
`
const TitleWrapper = styled.div`


`
const WorksList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding-bottom: 80px;
        @media ${theme.media.mobile}{
            padding: 40px 0;
        }
`
const WorksItem = styled.li`
max-width: 570px;

`
