import React from 'react';
import heroLogo from '../../../../../assets/hero_logo.png';
import styles from './styles.module.scss';
import { HERO_TITLE, HERO_SUBTITLE, HERO_LINK } from './strings';

function HeroSection() {
  return (
    <div className={styles.container}>
      <a className={styles.logocontainer} href={HERO_LINK}><img className={styles.logo} src={heroLogo} alt="hero" /></a>
      <div className={styles.textcontainer}>
        <span className={styles.title}>
          {HERO_TITLE}
        </span>
        <span className={styles.subtitle}>
          {HERO_SUBTITLE}
        </span>
      </div>

    </div>
  );
}

export default HeroSection;
