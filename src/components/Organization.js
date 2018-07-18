import React, { Component } from 'react';
import { organizationFetch } from '../actions';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CapitalizedText, CardSection } from './common';
import { MapView } from 'expo';

const Marker = MapView.Marker;


class Organization extends Component {

  componentWillMount() {
    this.props.organizationFetch(this.props.ein)
  }

  render() {
    const props = this.props.organization
    return (
      <View style={styles.background}>
        <MapView
         style={ styles.container }
         initialRegion={{
           latitude: props.latitude,
           longitude: props.longitude,
           latitudeDelta: 0.0922,
           longitudeDelta: 0.0421
         }}
        >

        <Marker
          title={this.props.organization.charityName}
          coordinate={{latitude: this.props.organization.latitude, longitude: this.props.organization.longitude}}
        />
        </MapView>

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
  },
  container: {
    width: '100%',
    height: 150,
  }
}


const mapStateToProps = (state, ownProps) => {
  return { organization: state.organization }
}

export default connect(mapStateToProps, {organizationFetch})(Organization);
