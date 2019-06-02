import React from "react";
import PlayerService from "../services/player";

export interface PlayerInfo {
    title: string;
    url: string;
    version: string;
    volume: number;
}

type ClockState = {
    title: string
}

export default class Footer extends React.Component<{}, ClockState> {

    componentDidMount() {
        PlayerService.info().then((r: PlayerInfo) => {
            this.setState({ title: r.title })
        })
    }

    render() {
        return (
            <footer>
                <i className="fas fa-music"></i>
                <span>{this.state && this.state.title }</span>
            </footer>
        );
    }
}
