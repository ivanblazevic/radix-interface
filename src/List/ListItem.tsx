import React from 'react';
import { Item } from '../models/item';

interface ListItemProps {
    item: Item;
    onClick: any; // TODO: add function def
    index: number;
    selected: boolean;
}

const ListItem = (props: ListItemProps) => (
    <li onClick={() => props.onClick(props.item)}>    
        { props.selected ? <span><i className="fas fa-play"></i> </span> : <span>{ props.index + 1 }. </span> }
        { props.item.title }
    </li>
)

export default ListItem;
