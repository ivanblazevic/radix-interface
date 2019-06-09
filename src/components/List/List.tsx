import React from 'react';
import { Item } from '../../models/item';
import { LoadingState } from '../../redux';
import ListItem from "./ListItem";
import './List.css';
import './Bars.css';

interface ListProps {
    state: LoadingState;
    items: Item[];
    isPlaying: any;
    onClick: any;
}

const List = (props: ListProps) => {
    switch (props.state) {
        case LoadingState.LOADING:
            return <div id="items-loading"><i className="fas fa-spinner"></i></div>
        case LoadingState.LOADED:
            return <ul>
                {props.items.map((item: Item, i: number) => (
                    <ListItem item={item} key={i} index={i} selected={props.isPlaying(item.url)} onClick={props.onClick} />
                ))}
            </ul>
        default:
            return null;
    }
}

export default List;
