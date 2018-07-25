import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet } from 'react-native';
import { categoriesFetch } from '../actions';
import ListItem from './ListItem';

class CategoryList extends Component {

  componentWillMount() {
    this.props.categoriesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ categories }) {
  const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  this.dataSource = ds.cloneWithRows(categories);
  }

  renderRow(category) {
    return <ListItem
    category={category}
    />;
  }

  render() {
    return (
      <ListView
        enableEmptySections={true}
        contentContainerStyle={styles.list}
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        keyExtractor={(category) => category.id}
      />
    );
  }
}

let styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 100
    }
});



const mapStateToProps = state => {
  const categories = _.map(state.categories, (val) => {
    return { ...val };
  });
  return { categories }
};

export default connect(mapStateToProps, {categoriesFetch})(CategoryList);
