import React, { useState } from 'react';
import Modal from 'react-modal';
import PlayFromUrlModal from './PlayFromUrlModal/PlayFromUrlModal';
import styles from './BottomModal.module.css';
import { modalStyles } from '../../components/shared/ModalStyles';

interface BottomModalProps {
    isOpen: boolean;
    closeMenu: any;
    addToFavorites: any;
    removeFromFavorites: any;
}

const BottomModal = (props: BottomModalProps) => {
    const [isPlayOpen, setIsPlayOpen] = useState(false);
    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                closeTimeoutMS={300}
                onRequestClose={props.closeMenu}
                style={modalStyles}>
                <ul className={styles.bottomModal}>
                    <li onClick={() => {setIsPlayOpen(true);props.closeMenu()}}>
                        <span><i className="fas fa-plus"></i></span> Play From Url
                    </li>
                    <li onClick={props.addToFavorites}>
                        <span><i className="fas fa-star"></i></span> Add To Favorites
                    </li>
                    <li onClick={props.removeFromFavorites}>
                        <span><i className="fas fa-trash-alt"></i></span> Remove To Favorites
                    </li>
                </ul>
            </Modal>
            <PlayFromUrlModal isOpen={isPlayOpen} closeMenu={() => setIsPlayOpen(false)} />
        </div>
    )
}

export default BottomModal;