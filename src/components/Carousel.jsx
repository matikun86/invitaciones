import React from 'react';

import photo1 from '../images/913800_10200561341129414_1748448441_o.jpg';
import photo2 from '../images/1119813_415001565283705_304764340_o.jpg';
import photo3 from '../images/13087277_10208160871592926_2929966294085310750_o.jpg';
import photo4 from '../images/15622298_1427197383968424_5085641906629909603_n.jpg';
import photo5 from '../images/IMG-20130502-WA0001.jpg';

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
];

const Carousel = () => (
  <div className="carousel slide mb-2 grow d-flex" id="carouselExampleIndicators" data-ride="carousel">
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
