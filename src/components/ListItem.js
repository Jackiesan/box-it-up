import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CategorySection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';
import { locationFetch } from '../actions';

import images from './images'

class ListItem extends Component {
  componentDidMount() {
    this.props.locationFetch();
  }

  render() {
    const { id, name, image_url } = this.props.category;
    const {location} = this.props.location
    return (
      <TouchableWithoutFeedback
      onPress={() => Actions.category({id: id, title: name, location: location})}
      >
      <View>
      <CategorySection style={styles.sectionStyle}>
      <Image
        style={styles.image}
        source={images[image_url]}
      />
      <Text style={styles.titleStyle}>
        {name}
      </Text>
      </CategorySection>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 12,
  },
  sectionStyle: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  }
}

const mapStateToProps = (state, ownProps) => {
  const location = state.location
  return { selectCategoryId: state.id, location }

};

export default connect(mapStateToProps,  {actions, locationFetch})(ListItem);
