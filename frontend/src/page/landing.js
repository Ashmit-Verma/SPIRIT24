import React from 'react';
import Header from "../components/header/header.js";
import Hero from "../components/hero/hero.js";
import Welcome from "../components/welcome/welcome";
import Todaysevents from "../components/todaysevents/Todaysevents";
import Footer from "../components/footer/footer.js";
import Faq from "../components/FAQ/faq.js";
import Gallery from '../components/gallery/gallery.js';

const Landing = () => {
  return (
    <div>
        <Header/>
     <Hero/>
      <Welcome/>
      <Todaysevents/>
      <Gallery/>
      <Faq/>
      <Footer/>
    </div>
  );
};

export default Landing;
