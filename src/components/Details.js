import React, {Component} from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import {CardSection} from './common';
import { Icon } from 'react-native-elements';


class Details extends Component {

  checkWebsite() {
    if (this.props.website) {
      return (
        <TouchableOpacity onPress={() => Linking.openURL(`http://${this.props.website}`)}>
        <View>
        <Text style={styles.subtitle}>
          WEBSITE
        </Text>
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
        </View>
        </TouchableOpacity>
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
        <View style={styles.address}>
          <Text style={styles.add}>
          {this.props.street}
          </Text>
          <Text style={styles.add}>
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
  },
  address: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  add: {
    fontSize: 15
  }
}
