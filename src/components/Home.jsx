import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

import Carousel from './Carousel';

const Home = () => (
  <section>
    <p className="lead fix">Yanina Farulla y Enzo Tranier decidieron casarse y estás invitado a compartir la celebración con ellos.</p>
    <Carousel></Carousel>
  </section>
);

export default Home;
