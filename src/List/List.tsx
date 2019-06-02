import React from "react";
import ListItem from './ListItem';
import { AppState } from "../redux";
import { actionFetchItems } from "../redux/item/actions";
import { connect } from "react-redux";
import { ItemsState } from "../redux/item/reducers";
import { Item } from "../models/item";
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
    }

    isPlaying(url: string): boolean {
        return this.props.currentPlayingUrl === url;
    }

    render() {
        return (
            // {  }
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