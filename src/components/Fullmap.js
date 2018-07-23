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
  map: {
    flex: 1
  }
}


const mapStateToProps = (state, ownProps) => {
  return { organization: state.organization }
}

export default connect(mapStateToProps, {organizationFetch})(Fullmap);
