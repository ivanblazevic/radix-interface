import React from "react";
import Modal from 'react-modal';
import { Item } from "../models/item";

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      background            : 'rgba(0,0,0,0.7)',
      border                : 'none'
    },
    overlay : {
        background            : 'rgba(0,0,0,0.0)'
    }
};

class Menu extends React.Component<any>  {
    state = {
        modalIsOpen: false,
        menuIsOpen: false,
        title: "",
        url: ""
    }

    node: any = {};

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);

        this.openModal = this.openModal.bind(this);
        //this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.play = this.play.bind(this);
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
        this.setState({ menuIsOpen: false });
    }

    openMenu = () => {
        this.setState({ menuIsOpen: true });
    }

    onTitleChange = (event: any) => {
        this.setState({ title: event.target.value });
    }

    onUrlChange = (event: any) => {
        this.setState({ url: event.target.value });
    }

    play = () => {
        this.setState({ modalIsOpen: false });
        const item: Item = {
            title: this.state.title,
            url: this.state.url
        }
        this.props.play(item);
    }

    addToFavorites = () => {
        this.props.addToFavorites();
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleClick = (e:any) => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.setState({ menuIsOpen: false });
    }

    render() {
        return (
            <div className="right">
                <i onClick={this.openMenu} className="fas fa-ellipsis-v"></i>

                <div ref={node => this.node = node} className={this.state.menuIsOpen ? "menu display-block" : "menu display-none"}>
                    <a onClick={this.openModal}>Play From Url</a>
                    <a onClick={this.addToFavorites}>Add To Favorites</a>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">
                            <div>
                                <input placeholder="Title" type="text" onChange={this.onTitleChange} value={this.state.title}/>
                            </div>
                            <br/>
                            <div>
                                <input placeholder="Url" type="text" onChange={this.onUrlChange} value={this.state.url}/>
                            </div>
                            <br/>
                            <div>   
                                <button onClick={this.play} className="full-width">Play</button>
                            </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;