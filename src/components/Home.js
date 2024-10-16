// components/Home.js
import React from 'react';
import Layout from './Layout';
import Header from './Header/Header';
import SmallerBanner from './Header/SmallerBanner';
import Homepageicon from './Header/Homepageicon';
import ForeignBooks from './Header/ForeginBooks';
import VPP from './Header/VPP';
import EX from './Header/EX';
import Manga from './Header/Manga';
import Others from './Header/Others';
import BSTNB from './Header/BSTNB';

const Home = () => {
  return (
    <Layout>
      <Header />
      <SmallerBanner />
      <Homepageicon />
      <ForeignBooks />
      <EX />
      <BSTNB/>
      <Manga />
      <VPP />
      <Others />
    </Layout>
  );
};

export default Home;
