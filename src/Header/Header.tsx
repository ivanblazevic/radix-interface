import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                    <i className="fas fa-bars"></i>
                    <span>STATIONS</span>
                </div>
                <i className="fas fa-search"></i>
            </header>
        );
    }
}
