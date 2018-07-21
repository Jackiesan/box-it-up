import React, { Component } from 'react';
import { organizationFetch } from '../actions';
import { connect } from 'react-redux';
import { Text, View, Linking, ScrollView } from 'react-native';
import { CardSection, MapViewSection, SmallButton, ColumnCard, Details } from './common';
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

  onButtonPress() {
    return (
      Linking.openURL(this.props.organization.amazonWishlist)
    )
  }

  onMonetaryPress() {
    return (
      Linking.openURL(this.props.organization.donationUrl)
    )
  }

  checkWishlist() {
    if
    (this.props.organization.amazonWishlist) {
      return (
          <SmallButton
            onPress={this.onButtonPress.bind(this)}>
              Amazon Wishlist
          </SmallButton>
      )
    }
  }

  render() {
    const props = this.props.organization
    const { charityName, street, ein, amazonWishlist, donationUrl, website } = this.props.organization;
    return (
      <ScrollView>
      <View style={styles.background}>
        <MapViewSection
          organization={props}
        />

        <CardSection style={styles.title}>

        <Text style={styles.titleStyle}>
        {charityName}
        </Text>
        </CardSection>

        {this.checkMissionStatement()}

        <Text style={styles.subtitle}>
          INFO
        </Text>

        <Details
          website={website}
        />

        <Text style={styles.subtitle}>
          MORE
        </Text>
        <ColumnCard>
          <View style={styles.buttons}>
            <SmallButton onPress={this.onMonetaryPress.bind(this)}>
              Monetary Donation
            </SmallButton>
            {this.checkWishlist()}
          </View>
        </ColumnCard>


      </View>
      </ScrollView>
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
    fontSize: 26,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    color: '#230C0F',
  },
  background: {
    flex: 1,
  },
  title: {
    justifyContent: 'center',
    backgroundColor: '#A2D3C2'
  },
  mission: {
    backgroundColor: '#F2EFC7',
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  buttons: {
    alignItems: 'center',
  },
  subtitle: {
    paddingLeft: 10,
    paddingTop: 25,
    paddingBottom: 5,
    color: 'rgb(117, 117, 117)'
  }
}


const mapStateToProps = (state, ownProps) => {
  return { organization: state.organization }
}

export default connect(mapStateToProps, {organizationFetch})(Organization);
