import React from 'react';
import { Item } from '../../models/item';
import './Bars.css';

interface ListItemProps {
    item: Item;
    onClick: any; // TODO: add function def
    index: number;
    selected: boolean;
}

class ListItem extends React.Component<any> {

    state = {
        swiped: false
    }

    listElement: any;

    constructor(props: any) {
        super(props);

        this.onDragStartTouch = this.onDragStartTouch.bind(this);
        this.listElement = {}
    }

    onDragStartMouse() {
        console.log("bla")
    }

    onDragStartTouch() {
        this.setState({ swiped: true });
    }

    render() {
        return (
            <li ref={div => (this.listElement = div)}
                onMouseDown={this.onDragStartMouse}
                onTouchStart={this.onDragStartTouch} onClick={() => this.props.onClick(this.props.item)}>
                <div className={["item-container", this.state.swiped ? 'swiped' : ''].join(' ')}>
                    <span className={this.props.selected ? 'hidden' : ''}>{this.props.index + 1}. </span>
                    <div id="bars" className={this.props.selected ? 'selected' : ''}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    {this.props.item.title}
                    <div className={["delete", this.state.swiped ? 'swiped' : ''].join(' ')}>
                        Delete
                    </div>
                </div>
            </li>
        )
    }
}

export default ListItem;
