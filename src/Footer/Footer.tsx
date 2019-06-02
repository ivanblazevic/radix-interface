import React from "react";
import PlayerService from "../services/player";

export interface PlayerInfo {
    title: string;
    url: string;
    version: string;
    volume: number;
}

export enum LoadingState {
    LOADING,
    LOADED,
    ERROR
}

type FooterState = {
    state: LoadingState;
    title: string
}

export default class Footer extends React.Component<{}, FooterState> {

    componentDidMount() {
        this.setState({ state: LoadingState.LOADING })
        PlayerService.info().then((r: PlayerInfo) => {
            this.setState({ title: r.title })
            this.setState({ state: LoadingState.LOADED })
        }).catch(e => {
            this.setState({ state: LoadingState.ERROR })
        })
    }

    render() {
        return (
            <footer>
                {(() => {
                    switch(this.state && this.state.state) {
                        case LoadingState.LOADING:
                            return <span>Getting Info</span>;
                        case LoadingState.LOADED:
                            return <span><i className="fas fa-music"></i>{this.state.title}</span>;
                        case LoadingState.ERROR:
                            return <span><i className="fas fa-unlink"></i>Radix is offline</span>;
                        default:
                            return null;
                        }
                })()}
            </footer>
        );
    }
}
