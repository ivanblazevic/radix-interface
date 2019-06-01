/*@typescript-eslint/no-useless-constructor: "off"*/
import React from "react";
import ListItem from './ListItem';
import { AppState } from "../redux";
import { actionFetchItems } from "../redux/item/actions";
import { connect } from "react-redux";
import { ItemsState } from "../redux/item/reducers";
import { Item } from "../models/item";
import PlayerService from "../services/player";

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

    onClick(item: Item) {
        PlayerService.play(item);
        console.log("click", item)
    }

    render() {
        return (
            <ul>
                {this.props.items.map((todo: any, i: number) => (
                    <ListItem item={todo} key={i} onClick={this.onClick} />
                ))}
            </ul>
        );
    }
}

const mapStateToProps = (state: AppState) => state.items;
  
const mapDispatchToProps = (dispatch: any) => {
    return {
      loadData: () => dispatch(actionFetchItems())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);