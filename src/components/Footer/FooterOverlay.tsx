import React from "react";
import { useSwipeable } from 'react-swipeable';

const FooterOverlay = React.forwardRef((props: any, ref: any) => {
    const handlers = useSwipeable({ onSwipedDown: (eventData) => { props.collapse() }, preventDefaultTouchmoveEvent: true,
        trackMouse: true })
    return (
        <div className={ props.isExpanded ? 'footer-overlay' : '' }>
            <footer {...handlers} ref={ref} onClick={() => { !props.isExpanded && props.expand(); }} className={ props.isExpanded ? 'expanded' : '' }>{props.children}</footer>
        </div>
    )
})

export default FooterOverlay;