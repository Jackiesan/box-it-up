import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Home extends Component {
  render() {
    return (
        <View style={styles.background}>
            <Text>
              Homepage
            </Text>
        </View>
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
