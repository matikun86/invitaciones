import React from 'react';

import photo1 from '../../images/DSCN6901.jpg';
// import photo2 from '../../images/DSCN7343.jpg';
import photo3 from '../../images/IMG_20160131_194232.jpg';
import photo4 from '../../images/IMG_20160213_181302.jpg';
import photo5 from '../../images/IMG_20161018_114121.jpg';

const photos = [
  photo3,
  photo1,
  // photo2,
  photo5,
  photo4,
];

const Carousel = () => (
  <div className="carousel grow slide d-flex h-100" id="carouselExampleIndicators" data-ride="carousel">
    <ol className="carousel-indicators">
      {_.map(photos, (photo, i) => <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={ i === 0 ? 'active' : ''}></li>)}
    </ol>
    <div className="carousel-inner h-100">
      {_.map(photos, (photo, i) =>
        <div key={i} className={'carousel-item h-100 w-100 ' + (i === 0 ? 'active' : '')} style={{backgroundImage: `url(${photo})`}}></div>
      )}
    </div>
  </div>
);

export default Carousel;
