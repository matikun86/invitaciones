import React from 'react';
import GoogleMapReact from 'google-map-react';

const SIZE = 30;

export default class Navigation extends React.PureComponent {
  render() {
    return (
      <div className="marker-info">
        <p className="info">
          <span className="mb-2">{this.props.info}</span>
          <a href="https://goo.gl/maps/7u6KedW9Pd12">Cómo llegar <i className="material-icons ml-2">directions</i></a>
        </p>
        <img  width={SIZE} height={SIZE} src={this.props.image} />
      </div>
    );
  }
}