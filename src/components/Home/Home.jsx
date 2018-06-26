import React from 'react';
import Carousel from '../Carousel/Carousel';

const Home = () => (
  <section className="home h-100">
    <Carousel></Carousel>
    <div className="overlay">
      <h1>Nos casamos y toda la bola</h1>
      <p>El 15 de diciembre <a href="#mapa">en asdasdad</a></p>
    </div>

    <a href="#mapa" className="hint-arrow">
      <i className="material-icons">arrow_downward</i>
    </a>
  </section>
);

export default Home;
