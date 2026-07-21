
import  iconsSprite  from "../../assets/images/code-svg.svg";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    className?: string
}


export const Icon = (props: IconPropsType) => {
    return (

            <svg 
            className={props.className}
            width={props.width || "128"}
            height={props.height || "50"}
            viewBox={props.viewBox || "0 0 128 50"}
            fill="none" xmlns="http://www.w3.org/2000/svg"
            >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>

    )
}
