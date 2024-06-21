import React from 'react';
import Header from "../components/header/header.js";
import Hero from "../components/hero/hero.js";
import Welcome from "../components/welcome/welcome";
import Footer from "../components/footer/footer.js";
import Faq from "../components/FAQ/faq.js";
import Gallery from '../components/gallery/gallery.js';
import Sponsors from '../components/sponsors/sponsors.js';
import Whyca from '../components/Whyca/Whyca.js';
import Caresponsibility from '../components/responsibility/responsibility.js';

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Welcome />
      <Whyca/>
      <Caresponsibility/>
      <Gallery />
      <Faq />
      <Sponsors/>
      <Footer />
    </div>
  );
};

export default Landing;
