import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { CardSection, CapitalizedText } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';
import TabIcon from './TabIcon'

class OrganizationItem extends Component {

  render() {
    const { ein, charityName } = this.props.organization;
    return (
      <TouchableWithoutFeedback
        onPress={() => Actions.organization({ein: ein, title: "Organization Profile" })}
      >
        <View>
          <CardSection>
            <CapitalizedText>
              {charityName}
            </CapitalizedText >
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
