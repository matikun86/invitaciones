import React from 'react';
import GoogleMapReact from 'google-map-react';

import marker from './../../images/marker.svg'; 
import MarkerInfo from './MarkerInfo/MarkerInfo';
import ConfirmarAsistencia from './../ConfirmarAsistencia/ConfirmarAsistencia';

export default class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.getMapOptions = this.getMapOptions.bind(this);
    this.section = React.createRef();
  }

  static defaultProps = {
    center: {
      lat: -38.036900,
      lng: -57.585318
    },
    zoom: 15
  };

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll() {
    this.section.current.addEventListener('touchstart', function (e) {
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
      // mapTypeId: maps.MapTypeId.SATELLITE,
    }
  }

  render() {
    return (
      <section className="como-llegar h-100 d-flex flex-row position-relative" ref={this.section}>

        <div className="map-container col p-0">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAHT7kceiwbHp-uOSGG61V1X3w1dVorbQk' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={this.getMapOptions}
          >
            <MarkerInfo
              lat={this.props.center.lat}
              lng={this.props.center.lng}
              image={marker}
              info="El salon esta al lado de un asdasdasd"
            />
          </GoogleMapReact>
        </div>

        <ConfirmarAsistencia></ConfirmarAsistencia>
      </section>
    );
  }
}