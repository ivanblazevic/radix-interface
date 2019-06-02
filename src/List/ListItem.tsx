import React from 'react';
import { Item } from '../models/item';

interface ListItemProps {
    item: Item;
    onClick: any; // TODO: add function def
    index: number;
}

const ListItem = (props: ListItemProps) => (
    <li onClick={() => props.onClick(props.item)}>    
        { props.index === 5 ? <span><i className="fas fa-play"></i> </span> : <span>{ props.index + 1 }. </span> }
        { props.item.title }
    </li>
)

export default ListItem;
