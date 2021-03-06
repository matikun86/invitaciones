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

export default class Carousel extends React.PureComponent {
  constructor(props) {
      super(props);
      this.state = {
        imagesLoaded: false,
      }

      this.imagesLoaded = 0;
      this.imagesToWaitFor = 2;
      this.onImageLoad = this.onImageLoad.bind(this);

      this.loadImages();
  }

  loadImages() {
    photos.slice(0,this.imagesToWaitFor).forEach(url => $('<img/>').attr('src', url).on('load', this.onImageLoad));
  }

  onImageLoad(img) {
    this.imagesLoaded++;

    if(this.imagesLoaded === this.imagesToWaitFor) {
      this.setState({
        imagesLoaded: true,
      });
    }
  }

  render() {
    return (
      (this.state.imagesLoaded && <div className="carousel grow slide d-flex h-100" id="carouselExampleIndicators" data-ride="carousel" data-pause={false}>
        <ol className="carousel-indicators">
          {_.map(photos, (photo, i) => <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={ i === 0 ? 'active' : ''}></li>)}
        </ol>
        <div className="carousel-inner h-100">
          {_.map(photos, (photo, i) =>
            <div key={i} className={'carousel-item h-100 w-100 ' + (i === 0 ? 'active' : '')} style={{backgroundImage: `url(${photo})`}}></div>
          )}
        </div>
        </div>) || <div className="loading-spinner"><i className="icon material-icons">refresh</i></div>
    )
  }
};
