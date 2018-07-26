import React, { Component } from 'react';
import { organizationFetch, fetchCategories } from '../actions';
import { connect } from 'react-redux';
import { Text, View, Linking, ScrollView, FlatList, ListItem } from 'react-native';
import { CardSection, MapViewSection, SmallButton, ColumnCard } from './common';
import MissionStatement from './MissionStatement';
import Details from './Details';

class Organization extends Component {
  
  componentDidMount() {
    this.props.organizationFetch(this.props.ein)
    this.props.fetchCategories(this.props.id)
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

  mapCategories() {
    const categories = this.props.categories
    return (
      <FlatList data={categories} renderItem={
            ({item}) => <Text style={styles.category}>{item.name}</Text>
          }
          keyExtractor={(item, index) => index.toString()}

        />);
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

        <Text style={styles.subtitle}>
          ACCEPTING PRODUCTS
        </Text>
        <CardSection>
          {this.mapCategories()}
        </CardSection>
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
  },
  category: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
  }
}


const mapStateToProps = (state, ownProps) => {
  return { organization: state.organization, categories: state.categoriesoforg }
}

export default connect(mapStateToProps, {organizationFetch, fetchCategories})(Organization);
