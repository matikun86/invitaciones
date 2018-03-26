import React from 'react';
import GoogleMapReact from 'google-map-react';

const SIZE = 30;

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isInfoVisible: true,
    }

    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggleInfo() {
    this.setState({ isInfoVisible: !this.state.isInfoVisible });
  }

  render() {
    return (
      <div className="marker-info">
        {this.state.isInfoVisible && <p className="info">{this.props.info}</p>}
        <img onClick={this.toggleInfo} width={SIZE} height={SIZE} src={this.props.image} />
      </div>
    );
  }
}