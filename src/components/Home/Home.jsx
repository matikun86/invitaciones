import React from 'react';
import Carousel from '../Carousel/Carousel';

const Home = () => (
  <section className="home h-100">
    <Carousel></Carousel>
    <div className="overlay">
      <p>Nos casamos y toda la bola</p>
    </div>

    <div className="hint-arrow">
      <i className="material-icons">arrow_downward</i>
    </div>
  </section>
);

export default Home;
