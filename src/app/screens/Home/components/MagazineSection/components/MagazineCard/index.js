import React from 'react';
import { string } from 'prop-types';
import styles from '../../styles.module.scss';

function MagazineCard({
  img, articles, title, subtitle, link
}) {
  return (
    <a className={styles.card} href={link}>
      <img src={img} className={styles.imgcard} alt="card" />
      <span className={styles.articlecard}>{articles}</span>
      <span className={styles.articletitle}>{title}</span>
      <span className={styles.articlesubtitle}>{subtitle}</span>
    </a>
  );
}

MagazineCard.propTypes = {
  img: string.isRequired,
  articles: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
  link: string.isRequired
};

export default MagazineCard;
