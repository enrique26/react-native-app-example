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

import Perfil from './Perfil';
import PremiosView from './componentes/PremiosView';
//navegacion switch para autenticacion
const PerfilMain=createSwitchNavigator({
  perfil:{screen:Perfil},
  premiosview:{screen:PremiosView}
},{
  initialRouteName: "perfil",
  unmountInactiveRoutes: false
});

export default PerfilMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
