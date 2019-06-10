import React from 'react';
import { Item } from '../../models/item';
import { LoadingState } from '../../redux';
import ListItem from "./ListItem";
import styles from './List.module.css';

interface ListProps {
    state: LoadingState;
    items: Item[];
    isPlaying: any;
    onClick: any;
}

const List = (props: ListProps) => {
    switch (props.state) {
        case LoadingState.LOADING:
            return <div className={styles.itemsLoading}><i className="fas fa-spinner"></i></div>
        case LoadingState.LOADED:
            return <ul className={styles.itemList}>
                {props.items.map((item: Item, i: number) => (
                    <ListItem item={item} key={i} index={i} selected={props.isPlaying(item.url)} onClick={props.onClick} />
                ))}
            </ul>
        default:
            return null;
    }
}

export default List;
