import React, { Component } from 'react';
import { organizationFetch } from '../actions';
import { connect } from 'react-redux';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CapitalizedText, CardSection } from './common';
import { MapView } from 'expo';
import MissionStatement from './MissionStatement'


class Organization extends Component {

  componentDidMount() {
    this.props.organizationFetch(this.props.ein)
  }

  checkMissionStatement() {
    if (this.props.organization.missionStatement) {
      return (
        <CardSection style={styles.mission}>
        <MissionStatement
          statement={this.props.organization.missionStatement}
        />
        </CardSection>
      )
    }
  }

  render() {
    const props = this.props.organization
    const { charityName} = this.props.organization;
    return (
      <View style={styles.background}>
      <View style={ styles.container }>
      <MapView

      style={ styles.map }
      initialRegion={{
        latitude: this.props.organization.latitude,
        longitude: this.props.organization.longitude,
        latitudeDelta: 0.0992,
        longitudeDelta: 0.0421
      }}
      region={{
        latitude: this.props.organization.latitude,
        longitude: this.props.organization.longitude,
        latitudeDelta: 0.0992,
        longitudeDelta: 0.0421
      }}
      >

      <MapView.Marker
      title={this.props.organization.charityName}
      coordinate={{
        latitude: this.props.organization.latitude, longitude: this.props.organization.longitude
      }}>
      </MapView.Marker>
      </MapView>
      </View>


      <CardSection style={styles.title}>

      <Text style={styles.titleStyle}>
      {charityName}
      </Text>
      </CardSection>



      {this.checkMissionStatement()}

      </View>
    );
  }
}

const styles = {
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    background: 'rgba(0, 122, 255, 0.1)',
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  titleStyle: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    color: '#230C0F'
  },
  background: {
    flex: 1,
  },
  title: {
    justifyContent: 'center',
    backgroundColor: '#A2D3C2'
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 150,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mission: {
    backgroundColor: '#F2EFC7'
  }
}


const mapStateToProps = (state, ownProps) => {
  return { organization: state.organization }
}

export default connect(mapStateToProps, {organizationFetch})(Organization);
