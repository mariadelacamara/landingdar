import React from 'react';
import magazineLogo from '../../../../../assets/magazine_logo.png';
import styles from './styles.module.scss';
import { CARD_TITLE, CARD_SUBTITLE, MAGAZINE_CARD } from './strings';
import MagazineCard from './components/MagazineCard';

function MagazineSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{CARD_TITLE}</h2>
      <span className={styles.subtitle}>{CARD_SUBTITLE}</span>
      <img src={magazineLogo} alt="logo" className={styles.logo} />
      <div className={styles.cardscontainer}>
        {MAGAZINE_CARD.map(({
          image, articles, title, subtitle, link
        }) => (
          <MagazineCard
            key={title}
            articles={articles}
            subtitle={subtitle}
            title={title}
            img={image}
            link={link}
          />
        ))}
      </div>
    </div>
  );
}

export default MagazineSection;
