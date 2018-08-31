import React from 'react';
import Carousel from '../Carousel/Carousel';

const Home = () => (
  <section className="home h-100">
    <Carousel></Carousel>
    
    <div className="overlay">
      <h1>Nos casamos! Y decidimos viajar para festejarlo con vos.</h1>
      <p>15 de Diciembre 19:30hs - Ceremonia y Fiesta: <a href="#mapa">Mar Eventos (Mirador 9)</a></p>
      <p>
        <a href="#asistencia" className="d-inline-block d-md-none">Confirmanos tu presencia</a>
        <a href="#mapa" className="d-none d-md-inline-block">Confirmanos tu presencia</a>
        &nbsp;antes del 09 de Noviembre.
      </p>
    </div>

    <a href="#" className="hint-arrow down" onClick={() => $.fn.fullpage.moveSectionDown()}>
      <i className="material-icons">arrow_downward</i>
    </a>
  </section>
);

export default Home;
