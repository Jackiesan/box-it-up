import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements'
import FontAwesome, { Icons } from 'react-native-fontawesome';

class TabIcon extends Component {

  render() {
    return (
      <View >
        <Icon
          name={this.props.iconName}
          type={this.props.type}
        />
      </View>
    );
  }
}

export default TabIcon;
