import React from "react";
import ListItem from './ListItem';
import { AppState, LoadingState } from "../redux";
import { connect } from "react-redux";
import { Item } from "../models/item";
import { actionFetchItems } from "../redux/item/actions";
import { ItemsState } from "../redux/item/reducers";
import { actionPlay } from "../redux/player/actions";

class List extends React.Component<any, ItemsState> {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any, state: ItemsState) {
        super(props, state);
    }

    componentDidMount() {
        //if (this.props.state === 'INIT') {
        this.props.loadData();
        //}
    }

    onClick = (item: Item) => {
        this.props.play(item);
        //ItemsService.add({ title: "SURF AND ROCK.FM", url: "http://70.38.73.27:8049/live" })
    }

    isPlaying(url: string): boolean {
        return this.props.currentPlayingUrl === url;
    }

    render() {
        if (this.props.searchState.searchActivated) {
            switch (this.props.searchState.state) {
                case LoadingState.LOADING:
                    return <div id="items-loading"><i className="fas fa-spinner"></i></div>
                case LoadingState.LOADED:
                    return <ul>
                        {this.props.itemsState.items.map((item: Item, i: number) => (
                            <ListItem item={item} key={i} index={i} selected={this.isPlaying(item.url)} onClick={this.onClick} />
                        ))}
                    </ul>
                default:
                    return null;
            }
        } else {
            switch (this.props.itemsState.state) {
                case LoadingState.LOADING:
                    return <div id="items-loading"><i className="fas fa-spinner"></i></div>
                case LoadingState.LOADED:
                    return <ul>
                        {this.props.itemsState.items.map((item: Item, i: number) => (
                            <ListItem item={item} key={i} index={i} selected={this.isPlaying(item.url)} onClick={this.onClick} />
                        ))}
                    </ul>
                default:
                    return null;
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(List);