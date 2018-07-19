import React, { Component } from 'react';
import { organizationFetch } from '../actions';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CapitalizedText, CardSection, MapCallout } from './common';
import { MapView } from 'expo';

class Fullmap extends Component {

  componentDidMount() {
    this.props.organizationFetch(this.props.ein)
  }

  render() {
    const props = this.props.organization
    const { charityName, street, ein} = this.props.organization;
    return (
      <MapView

      style={ styles.map }
      initialRegion={{
        latitude: this.props.organization.latitude,
        longitude: this.props.organization.longitude,
        latitudeDelta: 0.0992,
        longitudeDelta: 0.0421
      }}
      region={{
        latitude: this.props.organization.latitude,
        longitude: this.props.organization.longitude,
        latitudeDelta: 0.0992,
        longitudeDelta: 0.0421
      }}
      >

      <MapView.Marker
      coordinate={{
        latitude: this.props.organization.latitude, longitude: this.props.organization.longitude
      }}
      >
        <MapView.Callout>
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
      </MapView>
    );
  }
}

const styles = {
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
  },
  map: {
    flex: 1
  }
}


const mapStateToProps = (state, ownProps) => {
  return { organization: state.organization }
}

export default connect(mapStateToProps, {organizationFetch})(Fullmap);
