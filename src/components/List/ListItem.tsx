import React from 'react';
import { Item } from '../../models/item';

interface ListItemProps {
    item: Item;
    onClick: any; // TODO: add function def
    index: number;
    selected: boolean;
}

const ListItem = (props: ListItemProps) => (
    <li onClick={() => props.onClick(props.item)}>    
        <span className={props.selected ? 'hidden' : ''}>{ props.index + 1 }. </span>
        { props.item.title }
        <div id="bars" className={props.selected ? 'selected' : ''}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    </li>
)

export default ListItem;
