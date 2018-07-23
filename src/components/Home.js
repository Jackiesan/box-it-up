import _ from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { coordinatesFetch } from '../actions';
import { MapView, Constants, Location, Permissions } from 'expo';
import { HomeCallout } from './common';


class Home extends Component {

  state = {
    mapRegion:
      {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    locationResult: null,
    location:
      { coords:
        {
          latitude: 37.78825,
          longitude: -122.4324
        }
      },
    };

  componentDidMount() {
    this.props.coordinatesFetch();
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  }

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
  };

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

        region={{
          latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude, latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
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
        )
      )}

      <MapView.Marker
        coordinate={this.state.location.coords}
        title="My Location"
      >
        <View style={styles.radius}>
          <View style={styles.marker} />
        </View>
      </MapView.Marker>

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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    background: 'rgba(0, 122, 255, 0.1)',
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  }
}

const mapStateToProps = state => {
  const coordinates = _.map(state.coordinates, (val) => {
    return { ...val };
  });
  return { coordinates }
};

export default connect(mapStateToProps, {coordinatesFetch})(Home);
