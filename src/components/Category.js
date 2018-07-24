import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text, View } from 'react-native';
import { selectCategory, locationFetch } from '../actions';
import OrganizationItem from './OrganizationItem'
import { Actions } from 'react-native-router-flux';
import { sortBy } from '../helpers/sorted';
import { getDistance } from '../helpers/calculateDistance';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {
        coords: {
          latitude: '',
          longitude: ''
        }
      }
    };
  }

  componentWillMount() {
    this.props.locationFetch();
    this.props.selectCategory(this.props.id);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ organizations }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = ds.cloneWithRows(organizations);
  }

  renderRow(organization) {
    return <OrganizationItem
    organization={organization}
    />;
  }

  render() {
    console.log(this.props.organizations);
    return (
      <View>
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        keyExtractor={(organization) => organization.id}
      />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const setDistance = (x, y, a, b) => {
    const miles = getDistance(x, y, a, b)
    return miles
  }

  const orgs = _.map(state.organizations, (val) => {
    if (state.location) {
    return { ...val, distance: getDistance(val.latitude, val.longitude, state.location.coords.latitude, state.location.coords.longitude) }}
  });

  const organizations = sortBy(orgs,'distance')
  return { organizations, location: state.location }
};

export default connect(mapStateToProps, {selectCategory, locationFetch})(Category);
