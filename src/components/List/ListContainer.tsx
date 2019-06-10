import { ItemsState } from "../../redux/item/reducers";
import React from "react";
import { AppState } from "../../redux";
import { actionFetchItems } from "../../redux/item/actions";
import { Item } from "../../models/item";
import { actionPlay } from "../../redux/player/actions";
import { connect } from "react-redux";
import List from "./List";
import { SearchState } from "../../redux/search/reducers";

interface ListContainerStateProps {
    itemsState: ItemsState;
    currentPlayingUrl: string;
    searchState: SearchState;
}

interface ListContainerProps extends ListContainerStateProps {
    loadData: () => {},
    play: (item: Item) => {}
}

class ListContainer extends React.Component<ListContainerProps, ItemsState> {
    
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: ListContainerProps, state: ItemsState) {
        super(props, state);

        this.isPlaying = this.isPlaying.bind(this);
    }

    componentDidMount() {
        this.props.loadData();
    }

    onClick = (item: Item) => {
        this.props.play(item);
    }

    isPlaying(url: string): boolean | undefined {
        if (!this.props) {
            return;
        }
        return this.props.currentPlayingUrl === url;
    }

    render() {
        if (this.props.searchState.searchActivated) {
            return (
                <List
                    state={this.props.searchState.state}
                    items={this.props.searchState.items}
                    isPlaying={this.isPlaying}
                    onClick={this.onClick}
                />
            )
        } else {
            return (
                <List
                    state={this.props.itemsState.state}
                    items={this.props.itemsState.items}
                    isPlaying={this.isPlaying}
                    onClick={this.onClick}
                />
            )
        }
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        itemsState: state.items,
        currentPlayingUrl: state.player.info.url,
        searchState: state.search
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        loadData: () => dispatch(actionFetchItems()),
        play: (item: Item) => dispatch(actionPlay(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);