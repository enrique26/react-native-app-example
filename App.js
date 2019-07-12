/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  BackHandler
} from 'react-native';
import {createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator } from 'react-navigation';
import { Root } from 'native-base';
import Login from './src/Login';
import DrawerNavigatorHome from './src/main/Home';
import { isSignedIn } from "./src/auth";

export default class App extends Component<Props> {
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton(){
    return true;
  }
  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#f0f0f0'}}>
        <Root>
          <AppContainer/>
        </Root>
      </SafeAreaView>
    );
  }
}

//navegacion switch para autenticacion
const SwitchNavigatorInit=createSwitchNavigator({
  login:{screen:Login},
  mainscreen:{screen:DrawerNavigatorHome},
},{
  initialRouteName: "login",
  // initialRouteName: "mainscreen",
  unmountInactiveRoutes: false
});

///contenedor raiz
const AppContainer=createAppContainer(SwitchNavigatorInit);
