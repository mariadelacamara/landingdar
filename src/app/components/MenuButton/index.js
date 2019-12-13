/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import arrowDown from '../../../assets/ic_arrow_down.svg';
import styles from './styles.module.scss';
import {
  LAST_VISITED, GENERAL_INFO, PAYMENT_METHOD, MENU
} from './strings';


function MenuButton() {
  return (
    <div className={styles.container}>
      <span className={styles.menu}>
        {MENU}
        <img src={arrowDown} alt="arrow" />
      </span>
      <div className={styles.bubble}>
        <a href="" className={styles.links}>{LAST_VISITED}</a>
        <a href="" className={styles.links}>{GENERAL_INFO}</a>
        <a href="" className={styles.links}>{PAYMENT_METHOD}</a>
      </div>
    </div>
  );
}

export default MenuButton;
