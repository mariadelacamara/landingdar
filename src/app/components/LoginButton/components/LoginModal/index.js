import React from 'react';
import ReactModal from 'react-modal';
import { bool, func } from 'prop-types';
import close from '../../../../../assets/close.svg';
import styles from '../../styles.module.scss';
import { LOG_IN_MODAL } from '../../strings';

function LoginModal({ isOpen, closeModal }) {
  return (
    <ReactModal
      className={styles.modal}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      <div className={styles.modalcontainer}>
        <button className={styles.closebutton} type="button" onClick={closeModal}><img src={close} alt="close" /></button>
        <span>{LOG_IN_MODAL}</span>
      </div>
    </ReactModal>
  );
}

LoginModal.propTypes = {
  isOpen: bool.isRequired,
  closeModal: func.isRequired
};

export default LoginModal;
