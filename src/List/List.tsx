import React from "react";
import { connect } from "react-redux";
import { Item } from "../models/item";
import { AppState } from "../redux";
import { actionFetchItems } from "../redux/item/actions";
import { ItemsState } from "../redux/item/reducers";
import { actionPlay } from "../redux/player/actions";
import ListItem from './ListItem';

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
        return (
            <ul>
                {this.props.itemsState.items.map((item: Item, i: number) => (
                    <ListItem item={item} key={i} index={i} selected={this.isPlaying(item.url)} onClick={this.onClick} />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        itemsState: state.items,
        currentPlayingUrl: state.player.info.url
    }
};
  
const mapDispatchToProps = (dispatch: any) => {
    return {
      loadData: () => dispatch(actionFetchItems()),
      play: (item: Item) => dispatch(actionPlay(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);