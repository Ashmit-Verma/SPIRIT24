import React from 'react';
import Header from "../components/header/header.js";
import Hero from "../components/hero/hero.js";
import Welcome from "../components/welcome/welcome";
import Footer from "../components/footer/footer.js";
import Faq from "../components/FAQ/faq.js";
import Gallery from '../components/gallery/gallery.js';
// import Leaderboard from '../components/Leaderboard/Leaderboard.js';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <Gallery />
      <Faq />
      <Footer />
    </div>
  );
};

export default Landing;
