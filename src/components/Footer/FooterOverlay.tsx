import React from "react";
import { useSwipeable } from 'react-swipeable';

const FooterOverlay = (props: any) => {
    const handlers = useSwipeable({ onSwipedDown: (eventData) => { props.collapse() }, preventDefaultTouchmoveEvent: true,
        trackMouse: true })
    return (
        <footer {...handlers} onClick={() => { !props.isExpanded && props.expand(); }} className={ props.isExpanded ? 'expanded' : '' }>{props.children}</footer>
    )
}

export default FooterOverlay;