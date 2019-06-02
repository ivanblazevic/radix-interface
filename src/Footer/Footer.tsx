import React from "react";
import { LoadingState, AppState } from "../redux";
import { connect } from "react-redux";
import { PlayerState } from "../redux/player/reducers";
import { actionFetchPlayerInfo } from "../redux/player/actions";

class Footer extends React.Component<any, PlayerState> {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any, state: PlayerState) {
        super(props, state);
    }

    componentDidMount() {
        if (this.props.state === LoadingState.INIT) {
            this.props.loadData();
        }
    }

    render() {
        return (
            <footer>
                {(() => {
                    switch(this.props.state) {
                        case LoadingState.LOADING:
                            return <span><i className="fas fa-spinner"></i>Getting Info</span>;
                        case LoadingState.LOADED:
                            return <span><i className="fas fa-music"></i>{this.props.info.title}</span>;
                        case LoadingState.ERROR:
                            return <span><i className="fas fa-unlink"></i>{this.props.errorMessage}</span>;
                        default:
                            return null;
                        }
                })()}
            </footer>
        );
    }
}

const mapStateToProps = (state: AppState) => state.player;

const mapDispatchToProps = (dispatch: any) => {
    return {
      loadData: () => dispatch(actionFetchPlayerInfo())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);