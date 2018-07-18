import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { MapView } from 'expo';


class Home extends Component {
  render() {
    return (
      <MapView
     style={{ flex: 1 }}
     initialRegion={{
       latitude: 37.78825,
       longitude: -122.4324,
       latitudeDelta: 0.0922,
       longitudeDelta: 0.0421,
     }}
   />
    );
  }
}

const styles = {
  background: {
    flex: 1,
    backgroundColor: '#ff9f00',
  }
}

export default Home;
