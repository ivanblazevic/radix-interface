import React from 'react';
import { Item } from '../../models/item';
import './Bars.css';
import { Swipeable } from 'react-swipeable'

interface ListItemProps {
    item: Item;
    onClick: any; // TODO: add function def
    index: number;
    selected: boolean;
}

class ListItem extends React.Component<any> {

    state = {
        swiped: false,
        deleted: false
    }

    listElement: any;

    constructor(props: any) {
        super(props);

        this.onPlay = this.onPlay.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onSwiped= this.onSwiped.bind(this);
        this.listElement = {}
    }

    onSwiped() {
        this.setState({ swiped: true });
    }

    onPlay() {
        if (this.state.swiped) {
            return;
        }
        this.props.onClick(this.props.item);
    }

    onDelete() {
        this.setState({ swiped: false });
        this.setState({ deleted: true });
        this.props.onDelete(this.props.item);
    }

    render() {
        return (
            <Swipeable onSwipedLeft={this.onSwiped} trackMouse={true}>
                <li ref={div => (this.listElement = div )}
                    className={this.state.deleted ? 'deleted' : ''}
                    onClick={this.onPlay}
                    >
                    <div className={["item-container", this.state.swiped ? 'swiped' : ''].join(' ')}>
                        <span className={this.props.selected ? 'hidden' : ''}>{this.props.index + 1}. </span>
                        <div id="bars" className={this.props.selected ? 'selected' : ''}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                        {this.props.item.title}
                        <div onClick={this.onDelete} className={["delete", this.state.swiped ? 'swiped' : ''].join(' ')}>
                            Delete
                        </div>
                    </div>
                </li>
            </Swipeable>
        )
    }
}

export default ListItem;
