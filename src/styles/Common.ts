import { theme } from "./Theme"

type FontPropsType = {
    family? : string
    weight? : number
    color? : string
    lineHeight? : number
    Fmin? : number
    Fmax?: number


}

export const font= ({family, weight, color, lineHeight, Fmin, Fmax}:FontPropsType) => `
    font-family: ${family || "Nata Sans"};
    font-weight: ${weight || 100};
    color: ${color || theme.colors.font};
    line-hight: ${lineHeight || 1};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px)
   
`

