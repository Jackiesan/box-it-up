import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet } from 'react-native';
import { categoriesFetch } from '../actions';
import ListItem from './ListItem';

class CategoryList extends Component {

  state = {
    mapRegion:
      {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    locationResult: null,
    location:
      {
        coords:
      {
        latitude: 37.78825,
        longitude: -122.4324
      }
    }
  };

  componentWillMount() {
    this.props.categoriesFetch();
    this.createDataSource(this.props);
    this._getLocationAsync();
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

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  }

  _getLocationAsync = async () => {
   let { status } = await Permissions.askAsync(Permissions.LOCATION);
   if (status !== 'granted') {
     this.setState({
       locationResult: 'Permission to access location was denied',
       location,
     });
   }

   let location = await Location.getCurrentPositionAsync({});
   this.setState({ locationResult: JSON.stringify(location), location, });
  };


  render() {
    console.log(this.state.location.coords);

    return (
      <ListView
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
