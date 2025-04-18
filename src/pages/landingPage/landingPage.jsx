import React from 'react';
import Home from '../home';
import Footer from '../../component/footer';
import Navbar from '../../component/navbar';
import About from '../about';
import Product from '../product';
import Contact from '../contact';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about-us">
        <About />
      </section>
      <section id="products">
        <Product />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
