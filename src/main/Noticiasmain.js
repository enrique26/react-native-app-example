/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createBottomTabNavigator } from 'react-navigation';

import Noticias from './Noticias';
import Postview from './componentes/Postview';

//navegacion switch para autenticacion
const NoticiasMain=createSwitchNavigator({
  noticias:{screen:Noticias},
  postview:{screen:Postview},
},{
  initialRouteName: "noticias",
  unmountInactiveRoutes: false
});

export default NoticiasMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
