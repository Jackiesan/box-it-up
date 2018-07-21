import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import CategoryList from './components/CategoryList';
import Category from './components/Category';
import Organization from './components/Organization';
import Fullmap from './components/Fullmap'
import Home from './components/Home';
import { Text } from 'react-native';
import TabIcon from './components/TabIcon';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          <Scene key="all" title="Local Charities" iconName="list" icon={TabIcon} >
            <Scene
              key="home"
              component={Home}
            />

            <Scene
              key="organization"
              component={Organization}
              title="Organization Profile"
            />

          </Scene>

          <Scene key="donate" title="Donate"
          iconName="add" icon={TabIcon}>

            <Scene
              key="categoryList"
              component={CategoryList}
              title="Categories"
            />

            <Scene
              key="category"
              component={Category}
            />

            <Scene
              key="organization"
              component={Organization}
            />

            <Scene
              key="fullmap"
              component={Fullmap}
            />

          </Scene>
        </Scene>

      </Scene>
    </Router>
  );
};


export default RouterComponent;
