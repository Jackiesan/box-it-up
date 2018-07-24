import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {CardSection} from './common';
import { Icon } from 'react-native-elements';


class Details extends Component {

  checkWebsite() {
    if (this.props.website) {
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
          {this.props.website}
          </Text>
        </View>
        </CardSection>

      )
    }
  }
  render() {
    return (
      <View>
      <Text style={styles.subtitle}>
        ADDRESS
      </Text>
      <CardSection>
        <View>
          <Text>
          {this.props.street}
          </Text>
          <Text>
            {this.props.city}, {this.props.state} {this.props.zipCode}
          </Text>
        </View>
        </CardSection>

        {this.checkWebsite()}
      </View>

    );
  }
}



export default Details;


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
  },
  subtitle: {
    paddingLeft: 10,
    paddingTop: 25,
    paddingBottom: 5,
    color: 'rgb(117, 117, 117)'
  }
}
