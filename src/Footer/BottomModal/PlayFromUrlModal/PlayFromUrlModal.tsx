import React from 'react';
import Modal from 'react-modal';
import { Item } from '../../../models/item';
import { connect } from 'react-redux';
import { actionPlay } from '../../../redux/player/actions';
import { AppState } from '../../../redux';
import { modalStyles } from '../../../components/shared/ModalStyles';

interface PlayFromUrlModalProps {
    isOpen: boolean;
    closeMenu: any;
    play: any;
}

class PlayFromUrlModal extends React.Component<PlayFromUrlModalProps> {

    state = {
        title: "",
        url: ""
    }

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props);

        this.play = this.play.bind(this);
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
        this.props.closeMenu();
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.closeMenu}
                style={modalStyles}>
                <div>
                    <input className="full-width" placeholder="Title" type="text" onChange={this.onTitleChange} value={this.state.title} />
                </div>
                <br />
                <div>
                    <input className="full-width" placeholder="Url" type="text" onChange={this.onUrlChange} value={this.state.url} />
                </div>
                <br />
                <div>
                    <button disabled={!this.state.title || !this.state.url} onClick={this.play} className="full-width">Play</button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state: AppState) => state.player;

const mapDispatchToProps = (dispatch: any) => {
    return {
      play: (item: Item) => dispatch(actionPlay(item)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayFromUrlModal);