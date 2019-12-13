import React from 'react';
import styles from './styles.module.scss';
import footerimg from '../../../assets/footer.png';
import { COPYRIGHT } from './strings';

function Footer() {
  return (
    <div className={styles.footerbottom}>
      <img src={footerimg} alt="" className={styles.footerimg} />
      <span className={styles.copyright}>{COPYRIGHT}</span>
    </div>
  );
}

export default Footer;
