import styled from "styled-components"
import { CoursName } from "../skills/skill/Studies"
import { theme } from "../../../styles/Theme"

type WorksPropsType = {
    image: string
    name: string
    subject?: string
    year: number
    linkProject: string
}

export const Work = (props: WorksPropsType) => {
    return (
        <LinkProject href={props.linkProject} target="_blank">
            <ProjectInfo>
                <CoursName>{props.name}</CoursName>
                <Subject>{props.subject}</Subject>
                <ProjectYear>{props.year}</ProjectYear>
            </ProjectInfo>
            <ProjectImage src={props.image} alt={props.name} />
        </LinkProject>
    )
}


const LinkProject = styled.a`
    display: flex;
    position: relative;
    flex: 1 1 calc(50% - 7.5px);

    &:hover {
        cursor: pointer;
                &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.6), transparent 50%;
        z-index: 0;
    }


    }
`

const ProjectImage = styled.img`

        width: 100%;
    display: block;
    transition: filter 0.3s ease;

    ${LinkProject}:hover & {
        filter: brightness(60%) blur(4px);
    }
            @media ${theme.media.mobile}{
            ${LinkProject}:active & {
        filter: brightness(60%) blur(4px);
    }
        }

`
const Subject = styled.span`
    font-weight: 600;
font-size: 14px;
letter-spacing: 0.05em;
text-transform: capitalize;

`

const ProjectYear = styled.span`
font-weight: 600;
font-size: 12px;
letter-spacing: 0.05em;
text-transform: capitalize;
`

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20px;
    bottom: 20px;
    z-index: 1;
    gap: 5px;


    color: ${theme.colors.font};

     opacity: 0;
    transform: translateY(15px);
    transition: opacity .3s ease, transform .3s ease;

    ${LinkProject}:hover & {
        opacity: 1;
        transform: translateY(0);
    }

    @media ${theme.media.mobile} {
        ${LinkProject}:active & {
            opacity: 1;
            transform: translateY(0);
        }
    }
`