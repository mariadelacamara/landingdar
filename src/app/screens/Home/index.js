import React, { Fragment } from 'react';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import MagazineSection from './components/MagazineSection';

function Home() {
  return (
    <Fragment>
      <HeroSection />
      <SearchSection />
      <MagazineSection />
    </Fragment>
  );
}

export default Home;
