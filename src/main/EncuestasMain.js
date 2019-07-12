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

import Encuestas from './Encuestas';
import EncuestaView from './componentes/EncuestaView';

//navegacion switch para autenticacion
const EncuestasMain=createSwitchNavigator({
  encuestas:{screen:Encuestas},
  encuestaview:{screen:EncuestaView},
},{
  initialRouteName: "encuestas",
  unmountInactiveRoutes: false
});

export default EncuestasMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
