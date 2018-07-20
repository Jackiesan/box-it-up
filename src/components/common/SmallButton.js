import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TabIcon from '../TabIcon';

const SmallButton = ({onPress, children}) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View>
      <Text style={textStyle}>
        {children}
      </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40
  },
  buttonStyle: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
}

export { SmallButton };
