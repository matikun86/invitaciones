import React from 'react';
import GoogleMapReact from 'google-map-react';

import marker from './../../images/marker.svg'; 
import MarkerInfo from './MarkerInfo/MarkerInfo';
import ConfirmarAsistencia from './../ConfirmarAsistencia/ConfirmarAsistencia';

export default class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: -38.099514,
        lng: -57.5575859,
      },
      place: {
        lat: -38.1020469,
        lng: -57.5575859,
      },
      zoom: 15
    };

    this.getMapOptions = this.getMapOptions.bind(this);
    this.section = React.createRef();
  }

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll() {
    this.section.current.addEventListener('touchstart', (e) => {
      if (e.touches.length > 1) {
        $.fn.fullpage.setAllowScrolling(false);
      }
    });
    
    this.section.current.addEventListener('touchend', function (e) {
      setImmediate(() => $.fn.fullpage.setAllowScrolling(true));
    });
  }

  getMapOptions(maps) {
    return {
      // gestureHandling:'cooperative',
      mapTypeId: maps.MapTypeId.HYBRID,
      resetBoundsOnResize: true,
    }
  }

  render() {
    return (
      <section className="como-llegar h-100 d-flex flex-row position-relative" ref={this.section}>

        <div className="map-container col p-0">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAHT7kceiwbHp-uOSGG61V1X3w1dVorbQk' }}
            center={this.state.center}
            defaultZoom={this.state.zoom}
            options={this.getMapOptions}
            resetBoundsOnResize={true}
          >
            <MarkerInfo
              lat={this.state.place.lat}
              lng={this.state.place.lng}
              image={marker}
              info="Mar Eventos (Mirador 9), Ruta 11 paraje Alfar"
            />
          </GoogleMapReact>
        </div>

        <ConfirmarAsistencia></ConfirmarAsistencia>
      </section>
    );
  }
}