import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CardSection, CapitalizedText } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';
import TabIcon from './TabIcon';
import _ from 'lodash';

class OrganizationItem extends Component {

  render() {
    const { ein, charityName, distance, id } = this.props.organization;
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.organization({ein: ein, title: "Organization Profile", id: id })}
      >
        <View>
          <CardSection style={styles.section}>
            <View>
            <CapitalizedText style={styles.name}>
              {charityName}
            </CapitalizedText>
            <Text style={styles.mile}>
              {_.round(distance, 1)} mi
            </Text>
            </View>

            <View style={styles.icon}>
              <TabIcon
                iconName='angle-right'
                type='font-awesome'
              />
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  section: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 10
  },
  mile: {
    color: 'rgb(79, 79, 79)',

  },
  name: {
    fontSize: 17,
    fontWeight: '500',
    paddingBottom: 4
  },
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15,
  },
  icon: {
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectOrganizationId: state.id }
};

export default connect(mapStateToProps, actions)(OrganizationItem);
