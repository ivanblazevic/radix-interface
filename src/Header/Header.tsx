import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <span>STATIONS</span>
                    <i className="fas fa-search"></i>
                </div>
            </header>
        );
    }
}
