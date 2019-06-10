import React from "react";
import { connect } from "react-redux";
import { AppState, LoadingState } from "../../redux";
import { actionFetchPlayerInfo, actionPlay, actionAddToFavorites, actionRemoveFromFavorites } from "../../redux/player/actions";
import { PlayerState } from "../../redux/player/reducers";
import Menu from './Menu';
import { Item } from "../../models/item";
import './Footer.css';

class Footer extends React.Component<any, PlayerState> {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any, state: PlayerState) {
        super(props, state);

        this.play = this.play.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
    }

    componentDidMount() {
        if (this.props.state === LoadingState.INIT) {
            this.props.loadData();
        }
    }

    play(item: Item) {
        this.props.play(item);
    }

    addToFavorites() {
        this.props.addToFavorites();
    }

    removeFromFavorites() {
        this.props.removeFromFavorites();
    }

    render() {
        return (
            <footer>
                <div className="header-background-container">
                    <div className="header-background"></div>
                </div>
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
                <Menu play={this.play} addToFavorites={this.addToFavorites} removeFromFavorites={this.removeFromFavorites}></Menu>
            </footer>
        );
    }
}

const mapStateToProps = (state: AppState) => state.player;

const mapDispatchToProps = (dispatch: any) => {
    return {
      loadData: () => dispatch(actionFetchPlayerInfo()),
      play: (item: Item) => dispatch(actionPlay(item)),
      addToFavorites: () => dispatch(actionAddToFavorites()),
      removeFromFavorites: () => dispatch(actionRemoveFromFavorites())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);