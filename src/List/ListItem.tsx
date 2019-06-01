import React from 'react';
import { Item } from '../models/item';

export default ({ item, onClick }: { item: Item, onClick: any }) => (
    <li onClick={() => onClick(item)}>
        { item.title }
    </li>
)
