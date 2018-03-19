import React from 'react';

import photo1 from '../images/20130703_224727.jpg';
import photo2 from '../images/IMG-20130502-WA0001.jpg';
import photo3 from '../images/IMG-20140113-WA0000.jpg';
import photo4 from '../images/yani-enzo.jpg';

const Carousel = () => (
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={photo1} alt="First slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={photo2} alt="Second slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={photo3} alt="Third slide" />
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={photo4} alt="Third slide" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;
