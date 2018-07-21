import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { coordinatesFetch } from '../actions';
import { MapView } from 'expo';
import { HomeCallout } from './common';


class Home extends Component {

  componentDidMount() {
    this.props.coordinatesFetch();
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
         latitude: 47.608013,
         longitude: -122.335167,
         latitudeDelta: 0.0922,
         longitudeDelta: 0.0421,
        }}
      >
      {this.props.coordinates.map(marker => (
          <MapView.Marker
            key={marker.ein}
            coordinate={{
              latitude: marker.latitude, longitude: marker.longitude
            }}
          >
            <MapView.Callout style={styles.callout}>
              <HomeCallout
                charityName={marker.charityName}
                ein={marker.ein}
              />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    );
  }
}

const styles = {
  background: {
    flex: 1,
    backgroundColor: '#ff9f00',
  },
  callout: {
    width: 170
  }
}

const mapStateToProps = state => {
  const coordinates = _.map(state.coordinates, (val) => {
    return { ...val };
  });
  return { coordinates }
};

export default connect(mapStateToProps, {coordinatesFetch})(Home);
