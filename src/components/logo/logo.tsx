

import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";




export const Logo = () => {
    return (
                <a onClick={()=>{scroll.scrollToTop()}}>
        <Icon iconId={`logo`}/>
        </a>
    )
}

