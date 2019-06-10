import React, { useState } from 'react';
import Modal from 'react-modal';
import PlayFromUrlModal from './PlayFromUrlModal/PlayFromUrlModal';
import styles from './BottomModal.module.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '80%',
        height: '40%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0,0,0,0.7)',
        border: 'none'
    },
    overlay: {
        background: 'rgba(0,0,0,0.0)'
    }
};

interface BottomModalProps {
    isOpen: boolean;
    closeMenu: any;
    addToFavorites: any;
}

const BottomModal = (props: BottomModalProps) => {
    const [isPlayOpen, setIsPlayOpen] = useState(false);
    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                closeTimeoutMS={300}
                onRequestClose={props.closeMenu}
                style={customStyles}>
                <ul className={styles.bottomModal}>
                    <li onClick={() => {setIsPlayOpen(true);props.closeMenu()}}>
                        <span><i className="fas fa-plus"></i></span> Play From Url
                    </li>
                    <li onClick={props.addToFavorites}>
                        <span><i className="fas fa-star"></i></span> Add To Favorites
                    </li>
                </ul>
            </Modal>
            <PlayFromUrlModal isOpen={isPlayOpen} closeMenu={() => setIsPlayOpen(false)} />
        </div>
    )
}

export default BottomModal;