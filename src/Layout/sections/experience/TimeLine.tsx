import styled from "styled-components"
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";


type PointType = {
    year: string;
    job: string;
}

type TimeLinePointProps = {
    point: PointType[];
}

export const TimeLinePoint = ({ point }: TimeLinePointProps) => {
    return (
        <TimeLineStyledList>
            <JobsList>
                {point.map((item, index) => {
                    return (
                        <JobItem key={index}>
                            <Year>{item.year}</Year>
                            <Dot />
                            <Job>{item.job}</Job>
                        </JobItem>
                    )
                })}
            </JobsList>
        </TimeLineStyledList>
    )

}

const Year = styled.p`
${font({weight:600, Fmax: 26, Fmin: 24 })};


`

const Dot = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background-color: #fff;;

    z-index: 1;


        
`
const Job = styled.span`
${font({weight:500, Fmax: 18, Fmin: 14 })};
  display: block;

`
const TimeLineStyledList = styled.div`
margin-bottom: 40px;
        @media ${theme.media.mobile} {
        display: none;
    }
`

const JobsList = styled.ul`
        display: flex;
        justify-content: space-between;
        position: relative;

            &::before {
            content: "";
            position: absolute;

            left: 15px;
            right: 15px;
            top: 86px;
                
            height: 10px;
            background: linear-gradient(90deg, #5d6155, #d5ccb3);

            z-index: 0;

            
    }
            @media ${theme.media.mobile} {
                &::before {
                left: 15px;
            
                top: 60px;
                height: 100%;
                width: 10px;
                background: linear-gradient(0deg, #5d6155, #d5ccb3);
                }
                flex-direction: column;
        justify-content: space-between;

            }

`

const JobItem = styled.li`
display: flex;
flex-direction: column;
 position: relative;
  z-index: 1;
text-align: center;

gap: 40px;
  align-items: center;
flex: 2;
               transition: 0.5s;
                &:first-of-type {
                align-items: flex-start;
                text-align: start;
                flex: 1;
            }
                &:last-child {
                    align-items: flex-end;
                    text-align: end;
                    flex: 1;
                }
                &:nth-child(2) ${Job},
    &:nth-child(3) ${Job} {
    width: 75%;

   }


    &:hover{

flex-grow:2.2;
${Job}{
    scale: 1.2;
}
    }
    @media ${theme.media.mobile}{
        flex-direction: row;
    }
`