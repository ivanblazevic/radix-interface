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
        swiped: false,
        deleted: false
    }

    listElement: any;

    // Drag & Drop
    dragStartX = 0
    left = 0
    dragged = false

    constructor(props: any) {
        super(props);

        this.onDragStartTouch = this.onDragStartTouch.bind(this);
        this.onPlay = this.onPlay.bind(this);
        this.onDelete = this.onDelete.bind(this);


        this.onTouchMove = this.onTouchMove.bind(this);
        this.onDragStartTouch = this.onDragStartTouch.bind(this);
        this.onDragEndTouch = this.onDragEndTouch.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onSwiped= this.onSwiped.bind(this);

        this.listElement = {}
    }

    componentDidMount() {
        window.addEventListener("touchend", this.onDragEndTouch);
    }

    onDragStartTouch(evt: any) {
        const touch = evt.targetTouches[0];
        this.onDragStart(touch.clientX);
        window.addEventListener("touchmove", this.onTouchMove);
    }

    onDragEndTouch(evt: any) {
        window.removeEventListener("touchmove", this.onTouchMove);
        this.onDragEnd();
    }

    onDragStart(clientX: any) {
        this.dragged = true;
        this.dragStartX = clientX;
    }

    onDragEnd() {
        if (this.dragged) {
          this.dragged = false;

          const threshold = this.props.threshold || 0.3;
      
          if (this.left < this.listElement.offsetWidth * threshold * -1) {
            this.left = -this.listElement.offsetWidth * 2;
            this.onSwiped();
          } else {
            this.left = 0;
          }
        }
    }

    onTouchMove(evt: any) {
        const touch = evt.targetTouches[0];
        const left = touch.clientX - this.dragStartX;
        if (left < 0) {
          this.left = left;
        }
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
            <li ref={div => (this.listElement = div)}
                className={this.state.deleted ? 'deleted' : ''}
                onTouchStart={this.onDragStartTouch}
                onClick={this.onPlay}>
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
        )
    }
}

export default ListItem;
