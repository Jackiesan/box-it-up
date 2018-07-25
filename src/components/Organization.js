import React, { Component } from 'react';
import { organizationFetch } from '../actions';
import { connect } from 'react-redux';
import { Text, View, Linking, ScrollView } from 'react-native';
import { CardSection, MapViewSection, SmallButton, ColumnCard } from './common';
import MissionStatement from './MissionStatement';
import Details from './Details';

class Organization extends Component {

  componentDidMount() {
    this.props.organizationFetch(this.props.ein)
  }

  checkMissionStatement() {
    if (this.props.organization.missionStatement) {
      return (
        <View>
        <CardSection style={styles.mission}>
          <MissionStatement
            statement={this.props.organization.missionStatement}
          />
        </CardSection>
        </View>
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
    const { charityName, street, ein, amazonWishlist, donationUrl, website, state, city, zipCode } = this.props.organization;
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

        <Details
          website={website}
          street={street}
          city={city}
          zipCode={zipCode}
          state={state}
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
    // backgroundColor: '#A2D3C2'
    backgroundColor: '#f1f9ea',
  },
  mission: {
    backgroundColor: '#f0f8ff',
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
