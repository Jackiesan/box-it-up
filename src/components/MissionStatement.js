import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common';

class MissionStatement extends Component {

  render() {
    return (
      <View style={styles.missionContainer}>
        <Text style={styles.mission}>
          Our Mission
        </Text>
        <Text style={styles.missionStyle}>
          {this.props.statement}
        </Text>
      </View>
    );
  }
}

export default MissionStatement;


const styles = {
  mission: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  missionStyle: {
    fontStyle: 'italic',
    padding: 10,
  },
  missionContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
}
