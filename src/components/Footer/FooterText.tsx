import React from 'react';
import { LoadingState } from "../../redux";

const FooterText = (props: any) => {
    switch(props.state) {
        case LoadingState.LOADING:
            return <span><i className="fas fa-spinner"></i>Getting Info</span>;
        case LoadingState.LOADED:
            return <span><i className="fas fa-music"></i>{props.text}</span>;
        case LoadingState.ERROR:
            return <span><i className="fas fa-unlink"></i>{props.error}</span>;
        default:
            return null;
        }
}

export default FooterText;