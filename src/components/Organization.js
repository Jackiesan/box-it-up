import React, { Component } from 'react';
import { organizationFetch } from '../actions';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CapitalizedText, CardSection } from './common'

class Organization extends Component {

  componentWillMount() {
    this.props.organizationFetch(this.props.ein)
  }

  render() {
    const props = this.props.organization
    return (
      <View style={styles.background}>
        <CardSection style={styles.card}>
          <Text style={styles.titleStyle}>
            {props.charityName}
          </Text>
        </CardSection>

        <Text>
          {props.city}
        </Text>

        <Text>
          {props.state}
        </Text>

        <Text>
          {props.website}
        </Text>
        <Text>
          {props.missionStatement}
        </Text>
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },
  background: {
    flex: 1,
  },
  card: {
    justifyContent: 'center'
  }
}


const mapStateToProps = (state, ownProps) => {
  return { organization: state.organization }
}

export default connect(mapStateToProps, {organizationFetch})(Organization);
