import styled from "styled-components";
import { useId } from "react";
import { theme } from "../../../../styles/Theme";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type ProgressBarPropsType = {
    percent: number
    title: string
    delay?: number
}

type ProgressCircleProps = {
    $circumference: number
    $offset: number
}




export const ProgressBar = (props: ProgressBarPropsType) => {
    const size = 280
    
    const strokeWidth = 30
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const offset = circumference - (circumference * props.percent) / 100

    const gradientId = useId().replace(/:/g, "")
    const { ref, inView } = useInView({

    threshold: 0.5,
});
    const [animatedOffset, setAnimatedOffset] = useState(circumference);
useEffect(() => {
    if (inView) {
        const timer = setTimeout(() => {
            setAnimatedOffset(offset);
        }, props.delay ?? 0);

        return () => clearTimeout(timer);
    } else {
        setAnimatedOffset(circumference);
    }
}, [inView, offset, circumference, props.delay]);


    return (
        <Wrapper ref={ref}>
            <Svg viewBox={`0 0 ${size} ${size}`}>
                <defs>
                    <linearGradient
                        id={gradientId}
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="80%"
                    >
                        <stop offset="20%" stopColor="#D8C8A8" />
                        <stop offset="100%" stopColor="#454D40" />
                    </linearGradient>
                </defs>
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#2B2A2A"
                    strokeWidth={strokeWidth}
                    fill="none"
                    />
                <ProgressCircle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#${gradientId})`}
            $circumference={circumference}
            // $offset={offset}
            $offset={animatedOffset}
        />
            <SkillValue
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            >{props.percent}</SkillValue>
            </Svg>
            
            <Title>{props.title}</Title>
        </Wrapper>
    )
}


const Svg = styled.svg`
  width: 280px;
  height: 280px;

  @media ${theme.media.mobile} {
    width: 180px;
    height: 180px;
  }

`

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap:40px;
    padding: 50px 40px;

    @media ${theme.media.mobile} {
    gap:20px;
    padding: 50px 20px 20px;
  }
`

const Title = styled.span`
    font-weight: 600;
font-size: 20px;
letter-spacing: 0.05em;
text-transform: capitalize;

`
const SkillValue = styled.text`
    font-weight: 600;
font-size: 56px;
letter-spacing: 0.05em;
text-transform: capitalize;
color: ${theme.colors.font};
    fill: ${theme.colors.font};
`


const ProgressCircle = styled.circle<ProgressCircleProps>`
    fill: none;

    stroke-width: 30;

    stroke-dasharray: ${({ $circumference }) => $circumference};
    stroke-dashoffset: ${({ $offset }) => $offset};

transition: stroke-dashoffset 1.5s ease;
`
