import React from 'react';
import { View, Text } from 'react-native';
import {CardSection} from './CardSection';
import { Icon } from 'react-native-elements';


const Details = (props) => {

  return (
      <CardSection>
        <View style={styles.section}>
          <Icon
           name='external-link'
           type='font-awesome'
           size={20}
           color='rgb(92, 92, 92)'
          />
          <Text style={styles.site}>
            {props.website}
          </Text>
        </View>
      </CardSection>
  );
};

const styles = {
  site: {
    fontSize: 18,
    paddingLeft: 16,
    color: 'rgb(52, 138, 227)'
  },
  section: {
    paddingLeft: 10,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Details };
