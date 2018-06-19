import React from 'react';

import photo1 from '../images/DSCN6901.jpg';
import photo2 from '../images/DSCN7343.jpg';
import photo3 from '../images/IMG_20160131_194232.jpg';
import photo4 from '../images/IMG_20160213_181302.jpg';
import photo5 from '../images/IMG_20161018_114121.jpg';

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];

const Carousel = () => (
  <div className="carousel slide mb-2 d-flex" id="carouselExampleIndicators" data-ride="carousel">
    <ol className="carousel-indicators">
      {_.map(photos, (photo, i) => <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={ i === 0 ? 'active' : ''}></li>)}
    </ol>
    <div className="carousel-inner">
      {_.map(photos, (photo, i) =>
        <div key={i} className={'carousel-item ' + (i === 0 ? 'active' : '')}>
          <img className="d-block" src={photo} alt={'Slide ' + (i+1)} />
        </div>
      )}
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
