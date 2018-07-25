import React, { Component } from 'react';
import { organizationFetch, locationFetch } from '../actions';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CapitalizedText, CardSection, MapCallout } from './common';
import { MapView } from 'expo';
import Pulse from 'react-native-pulse';

class Fullmap extends Component {

  componentDidMount() {
    this.props.locationFetch();
    this.props.organizationFetch(this.props.ein)
  }

  render() {
    const props = this.props.organization
    const { charityName, street, ein} = this.props.organization;
    const latitude = parseFloat(this.props.organization.latitude)
    const longitude = parseFloat(this.props.organization.longitude)

    return (
      <MapView

      style={ styles.map }
      initialRegion={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0992,
        longitudeDelta: 0.0421
      }}
      region={{
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.0992,
        longitudeDelta: 0.0421
      }}
      >

      <MapView.Marker
      coordinate={{
        latitude: latitude, longitude: longitude
      }}
      >
        <MapView.Callout style={styles.callout}>
          <MapCallout
            street={street}
            city={props.city}
            state={props.state}
            zipCode={props.zipCode}
            latitude={props.latitude}
            longitude={props.longitude}
            charityName={props.charityName}
          />
        </MapView.Callout>

      </MapView.Marker>

      <MapView.Marker

        coordinate={this.props.location.coords}
      >
        <View style={styles.radius}>
        <Pulse color='rgb(84, 161, 232)' numPulses={1} diameter={500} speed={20} duration={1} />

          <View style={styles.marker} />
        </View>
      </MapView.Marker>

      </MapView>
    );
  }
}

const styles = {
  map: {
    flex: 1
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
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
  },
  callout: {
    width: 250
  },
}


const mapStateToProps = (state, ownProps) => {
  const location = state.location
  return { organization: state.organization, location }
}

export default connect(mapStateToProps, {organizationFetch, locationFetch})(Fullmap);
