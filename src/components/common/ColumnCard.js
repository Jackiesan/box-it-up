import React from 'react';
import { View } from 'react-native';

const ColumnCard = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    borderColor: '#ddd',
    position: 'relative'
  }
}

export { ColumnCard };
