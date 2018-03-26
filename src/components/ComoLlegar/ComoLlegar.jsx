import React from 'react';
import GoogleMapReact from 'google-map-react';

import marker from './../../images/marker.svg'; 
import MarkerInfo from './MarkerInfo/MarkerInfo';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    center: {
      lat: -37.936900,
      lng: -57.585318
    },
    zoom: 13
  };

  render() {
    return (
      <section className="como-llegar">
        <h3>Cómo llegar?</h3>
        {/* // Important! Always set the container height explicitly */}
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAHT7kceiwbHp-uOSGG61V1X3w1dVorbQk' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <MarkerInfo
              lat={this.props.center.lat}
              lng={this.props.center.lng}
              image={marker}
              info="El salon esta al lado de un asdasdasd"
            />
          </GoogleMapReact>
        </div>
      </section>
    );
  }
}