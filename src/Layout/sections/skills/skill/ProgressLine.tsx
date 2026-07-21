import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";
import { font } from "../../../../styles/Common";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type ProgressLinePropsType = {
    percent: number
    language: string
    level: string
}

type LineFillPropsType = {
    $percent: number
}

export const ProgressLine = (props: ProgressLinePropsType) => {
   const { ref, inView } = useInView({
    threshold: 0.5,
});

const [animatedPercent, setAnimatedPercent] = useState(0);

useEffect(() => {
    if (inView) {
        setAnimatedPercent(props.percent);
    } else {
        setAnimatedPercent(0);
    }
}, [inView, props.percent]);
   
    return (
        <FlexWrapper ref={ref} direction="column">
            <Language>{props.language}</Language>

            <LineWrapper>
                <LevelOfKnowledge $percent={animatedPercent}>
                    {props.level}
                </LevelOfKnowledge>

                <LineBackground>
                    <LineFill $percent={animatedPercent} />
                </LineBackground>
            </LineWrapper>
        </FlexWrapper>
    )
}

const Language = styled.h3`
${font({weight:600, Fmax: 29, Fmin: 24 })};

    letter-spacing: 0.05em;
    text-transform: capitalize;

`

const LineWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 490px;
    padding-top: 26px; 
`

const LevelOfKnowledge = styled.span<LineFillPropsType>`
    position: absolute;
    top: 0;
    left: ${({ $percent }) => `${$percent}%`};
    transform: translateX(-100%);

    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.05em;
    text-transform: capitalize;
    white-space: nowrap;
`

const LineBackground = styled.div`
    width: 100%;
    height: 20px;
    background: transparent;
    border-radius: 100px;
    overflow: hidden;
`

const LineFill = styled.div<LineFillPropsType>`
    width: ${({ $percent }) => `${$percent}%`};
    height: 100%;
    border-radius: inherit;
    background: ${theme.colors.gradientX};

        transition: width 1.2s ease;
`