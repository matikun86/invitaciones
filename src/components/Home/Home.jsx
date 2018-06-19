import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Button } from 'reactstrap';
import Carousel from '../Carousel';

const Home = () => (
  <section className="home h-100 w-100">
    <Carousel></Carousel>
    <div className="overlay h-100 w-100"></div>
  </section>
);

export default Home;
