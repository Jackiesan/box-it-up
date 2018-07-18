import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { selectCategory } from '../actions';
import OrganizationItem from './OrganizationItem'
import { Actions } from 'react-native-router-flux';

class Category extends Component {

  componentWillMount() {
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
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        keyExtractor={(organization) => organization.id}
      />
    );
  }
}

const mapStateToProps = state => {
  const organizations = _.map(state.organizations, (val) => {
    return { ...val };
  });
  return { organizations }
};

export default connect(mapStateToProps, {selectCategory})(Category);
