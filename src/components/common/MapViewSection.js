import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {  View, TouchableWithoutFeedback } from 'react-native';
import { MapView } from 'expo';

class MapViewSection extends Component {

  checkLatitude() {
    const {charityName, street, ein} = this.props.organization;
    const latitude = parseFloat(this.props.organization.latitude)
    const longitude = parseFloat(this.props.organization.longitude)


    if (this.props.organization.latitude) {
      return (
        <TouchableWithoutFeedback
        onPress={() => Actions.fullmap({ein: ein, title: charityName })}
        >
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
        />
        </MapView>
        </TouchableWithoutFeedback>
      )
    }
  }

  render() {

    const {charityName, street, ein, latitude, longitude} = this.props.organization;
    return (
      <View style={ styles.container }>
        {this.checkLatitude()}
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
}

export { MapViewSection }
