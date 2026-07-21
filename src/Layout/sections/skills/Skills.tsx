import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionSubTitle"
import { ProgressBar } from "./skill/ProgressBar"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ProgressLine } from "./skill/ProgressLine"
import { Studies } from "./skill/Studies"
import { Container } from "../../../components/Container"
import { theme } from "../../../styles/Theme"

import { useEffect, useRef } from "react"


const skills = [
    { percent: 50, title: "Adobe"},
    { percent: 48, title: "HTML" },
    { percent: 23, title: "CSS" },
    { percent: 9, title: "React" },
    { percent: 10, title: "TypeScript" },
    { percent: 95, title: "Photoshop" },
    { percent: 66, title: "Illustrator" },
]


export const Skills = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const scrollElement = scrollRef.current

        if (!scrollElement) return

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault()
            event.stopPropagation()

            scrollElement.scrollLeft += event.deltaY
        }

        scrollElement.addEventListener("wheel", handleWheel, {
            passive: false,
        })

        return () => {
            scrollElement.removeEventListener("wheel", handleWheel)
        }
    }, [])

    return (
        <StyledSkills id="skills">
            <Container>

                <SectionTitle lineHeight="3px" margin="0 0 50px">My Skills</SectionTitle>
                <ProgressBarScroll ref={scrollRef}>
                    <ProgressBarList>
                        {skills.map((skill, index) => (
                            <ProgressBarItem>
                                <ProgressBar
                                    key={index}
                                    percent={skill.percent}
                                    title={skill.title}
                                    delay={index * 200}
                                />
                            </ProgressBarItem>
                        ))}
                    </ProgressBarList>
                </ProgressBarScroll>
                <LanguageStudiesWrapper>

                    <StudiesColumn>
                        <FlexWrapper direction="column" gap="20px">
                            <SectionTitle margin="0 0 50px" lineHeight="3px">language</SectionTitle>
                            <ProgressLine language="Russian" percent={90} level="native" />
                            <ProgressLine language="English" percent={50} level="midle" />
                            <ProgressLine language="Romanian" percent={80} level="native" />
                        </FlexWrapper>
                    </StudiesColumn>

                    <StudiesColumn>
                        <FlexWrapper direction="column" gap="20px" margin=" 0 0 40px">
                            <SectionTitle margin="0 0 50px" lineHeight="3px">Studies</SectionTitle>
                            <Studies cours="UPSC Art and designg" years="2015-2019" />
                            <Studies cours="mind pro" years="2024-2025" />
                            <Studies cours="iT-incubator" years="2026-" />
                        </FlexWrapper>
                    </StudiesColumn>
                </LanguageStudiesWrapper>
            </Container>

        </StyledSkills>
    )
}

const StyledSkills = styled.section`
background-color: ${theme.colors.primaryBg};
min-height: 100vh;
padding: 80px 0;

  @media ${theme.media.mobile}{
        padding: 0 20px;

  }
`
const ProgressBarScroll = styled.div`

display: flex;
flex-wrap: nowrap;
overflow-x: auto;
overflow-y: hidden;
 scrollbar-width: none;
 margin-right: calc((100% - 97vw) / 2);
 margin-left: calc((100% - 100vw) / 2);
 &::-webkit-scrollbar {
    display: none;}
`
const ProgressBarList = styled.ul`
display: flex;
`

const ProgressBarItem = styled.li`
`

const LanguageStudiesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;
    flex-wrap: wrap;

/* flex-wrap: wrap; */

    
`

const StudiesColumn = styled.div`
flex: 1 1 0;
    min-width: 280px;

`