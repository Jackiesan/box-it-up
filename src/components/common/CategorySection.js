import React from 'react';
import { View } from 'react-native';

const CategorySection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    padding: 10,
    width: 120,
  }
}

export {CategorySection};
