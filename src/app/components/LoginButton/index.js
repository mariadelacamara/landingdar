import React, { Component, Fragment } from 'react';
import LoginModal from './components/LoginModal';
import { LOG_IN } from './strings';
import styles from './styles.module.scss';

class LoginButton extends Component {
    state={ showModal: false };

    handleOpenModal =() => this.setState({ showModal: true });

    handleCloseModal = () => this.setState({ showModal: false });

    render() {
      const { showModal } = this.state;
      return (
        <Fragment>
          <button className={styles.container} type="button" onClick={this.handleOpenModal}>
            {LOG_IN}
          </button>
          <LoginModal isOpen={showModal} closeModal={this.handleCloseModal} />
        </Fragment>
      );
    }
}

export default LoginButton;
