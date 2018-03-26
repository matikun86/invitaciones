import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

import Carousel from './Carousel';

const Home = () => (
  <section>
    <Carousel></Carousel>
    <p>Yanina Farulla y Enzo Tranier decidieron casarse y estás invitado a compartir la celebración con ellos</p>
    <NavLink to="/como-llegar">Como llegar?</NavLink>
    <NavLink to="/rsvp">RSVP</NavLink>
  </section>
);

export default Home;
