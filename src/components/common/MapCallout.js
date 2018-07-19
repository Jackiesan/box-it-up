import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import {CapitalizedText} from './CapitalizedText';

class MapCallout extends Component {

  render() {
    const { street, city, state, zipCode, charityName } = this.props
    return (
      <TouchableOpacity onPress={() => Linking.openURL(`maps://app?daddr=${street}+${city}+${state}+${zipCode}`)}>
      <View>
        <Text style={styles.title}>
          {charityName}
        </Text>
        <Text style={styles.address}>
          {street}
        </Text>

        <Text style={styles.address}>
          {city}, {state}
        </Text>

        <Text style={styles.address}>
          {zipCode}
        </Text>
      </View>
      </TouchableOpacity>

    );
  }
}

const styles = {
  address: {
    fontSize: 14
  },
  title: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold'
  }
};

export {MapCallout}
