import React from 'react';
import styles from './styles.module.scss';
import LoginButton from '../LoginButton';
import MenuButton from '../MenuButton';
import CurrencyButton from '../CurrencyButton';

function Navbar() {
  return (
    <div className={styles.container}>
      <LoginButton />
      <MenuButton />
      <CurrencyButton />
    </div>
  );
}

export default Navbar;
