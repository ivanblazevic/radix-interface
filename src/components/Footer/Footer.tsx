import React from "react";
import { connect } from "react-redux";
import { Item } from "../../models/item";
import { AppState, LoadingState } from "../../redux";
import { actionAddToFavorites, actionFetchPlayerInfo, actionPlay } from "../../redux/player/actions";
import './Footer.css';
import FooterOverlay from "./FooterOverlay";
import FooterText from "./FooterText";
import Menu from "./Menu";

class Footer extends React.Component<any> {

    state = {
        isExpanded: false
    }
    
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);

        this.play = this.play.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.expand = this.expand.bind(this);
        this.collapse = this.collapse.bind(this);
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

    expand(): void {
        this.setState({ isExpanded: true });
    }

    collapse() {
        this.setState({ isExpanded: false });
    }

    render() {
        return (
            <FooterOverlay expand={this.expand} collapse={this.collapse} isExpanded={this.state.isExpanded}>
                <div className="header-background-container">
                    <div className="header-background"></div>
                </div>
                <FooterText state={this.props.state} text={this.props.info.title} error={this.props.errorMessage}></FooterText>
                <Menu play={this.play} addToFavorites={this.addToFavorites}></Menu>
            </FooterOverlay>
        );
    }
}

const mapStateToProps = (state: AppState) => state.player;

const mapDispatchToProps = (dispatch: any) => {
    return {
      loadData: () => dispatch(actionFetchPlayerInfo()),
      play: (item: Item) => dispatch(actionPlay(item)),
      addToFavorites: () => dispatch(actionAddToFavorites())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);