import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CategorySection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';
import images from './images'

class ListItem extends Component {


  render() {
    const { id, name, image_url } = this.props.category;
    return (
      <TouchableWithoutFeedback
      onPress={() => Actions.category({id: id, title: name})}
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
  return { selectCategoryId: state.id }

};

export default connect(mapStateToProps, actions)(ListItem);
