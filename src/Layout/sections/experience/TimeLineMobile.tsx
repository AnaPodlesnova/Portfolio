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

export const TimeLinePointMobile = ({ point }: TimeLinePointProps) => {
    return (
        <TimeLineStyledList>
            <JobsList>
                {point.map((item, index) => {
                    return (
                        <JobItem key={index}>
                            <Dot />
                            <JobWrapper>
                            <Year>{item.year}</Year>
                            <Job>{item.job}</Job>
                            </JobWrapper>
                        </JobItem>
                    )
                })}
            </JobsList>
        </TimeLineStyledList>
    )

}

const Year = styled.p`
${font({weight:600, Fmax: 26, Fmin: 24 })};
margin-bottom: 20px;
`

const Dot = styled.div`
    padding: 20px;
    border-radius: 100%;
    background-color: #fff;;

    z-index: 1;


        
`
const Job = styled.span`
${font({weight:500, Fmax: 18, Fmin: 14 })};
  display: block;
  

`
const TimeLineStyledList = styled.div`
display: none;
    @media ${theme.media.mobile} {
        display:block;
        margin-bottom: 40px;
    }
    
`

const JobsList = styled.ul`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        z-index: 0;
        padding: 40px 0 0;
            &::before {
            content: "";
            position: absolute;
            left: 15px;
            top: 60px;
            height: calc(100% - 60px - 10%);

            width: 10px;
            background: linear-gradient(0deg, #5d6155, #d5ccb3);
            }

`

const JobItem = styled.li`
display: flex;

 position: relative;
  z-index: 1;
text-align: start;

gap: 20px;
  align-items: center;
flex: 2;

    &:not(:last-child){
margin-bottom: 40px;
    }


`

const JobWrapper = styled.div`

`