import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { organizationFetch } from '../../actions';


class HomeCallout extends Component {

  render() {
    const { charityName, ein, id } = this.props
    return (
      <TouchableOpacity onPress={() => Actions.organization({ein: ein, id: id})}
      >
      <View style={{flex: 1}}>
        <Text style={styles.title}>
          {charityName}
        </Text>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  title: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: 'bold'
  }
};

export { HomeCallout }
