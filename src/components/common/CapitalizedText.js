import React from 'react';
import { View, Text } from 'react-native';

const CapitalizedText = (props) => {
  let text = props.children.toLowerCase().split(' ').map((a) => a.charAt(0).toUpperCase() + a.substr(1)).join(' ');

  return (
      <View>
        <Text {...props}>{text}</Text>
      </View>
  );
};

export { CapitalizedText };
