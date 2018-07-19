import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {CapitalizedText} from './CapitalizedText'

class MapCallout extends Component {

  render() {
    return (
      <View>
        <Text style={styles.address}>
          {this.props.street}
        </Text>
        <Text style={styles.address}>
          {this.props.city}, {this.props.state}
        </Text>
        <Text style={styles.address}>
          {this.props.zipCode}
        </Text>
      </View>
    );
  }
}

const styles = {
  address: {
    fontSize: 12
  }
};

export {MapCallout}
