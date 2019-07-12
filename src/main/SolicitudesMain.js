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

import Solicitudes from './Solicitudes';
import PrestamoView from './componentes/PrestamoView';
import VacacionesView from './componentes/VacacionesView';

//navegacion switch para autenticacion
const SolicitudesMain=createSwitchNavigator({
  solicitudes:{screen:Solicitudes},
  prestamoview:{screen:PrestamoView},
  vacacionesview:{screen:VacacionesView}
},{
  initialRouteName: "solicitudes",
  unmountInactiveRoutes: false
});

export default SolicitudesMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
