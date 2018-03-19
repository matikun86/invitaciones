import React from 'react';
import Carousel from './Carousel';
import { Button } from 'reactstrap';

const Home = () => (
  <section>
    <Carousel></Carousel>
    <p>Yanina Farulla y Enzo Tranier decidieron casarse y estás invitado a compartir la celebración con ellos</p>
    <Button color="secondary">RSVP</Button>{' '}
  </section>
);

export default Home;
