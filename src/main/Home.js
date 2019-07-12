/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createBottomTabNavigator } from 'react-navigation';

import Encuestas from './Encuestas';
import Menu from '../menu/Menu';

import NoticiasMain from './Noticiasmain';
//// import Noticias from './Noticias';
//// import PostView from './componentes/Postview';
import EncuestasMain from './EncuestasMain';
import SolicitudesMain from './SolicitudesMain'

import Solicitudes from './Solicitudes';
import Quejas from './Quejas';
import Ubicacion from './Ubicacion';
import Chatbot from './Chatbot';
import PerfilMain from './PerfilMain';
import NotificacionesHist from './NotificacionesHist';


///navegacion por menu para las pantallas internas
const DrawerNavigatorHome=createDrawerNavigator({
  //// comunicaciones:{screen:Noticias},
  ////postview:{screen:PostView},
  comunicaciones:{screen:NoticiasMain},
  encuestasmain:{screen:EncuestasMain},
  solicitudesMain:{screen:SolicitudesMain},
  ubicacion:{screen:Ubicacion},
  quejas:{screen:Quejas},
  chat:{screen:Chatbot},
  perfilmain:{screen:PerfilMain},
  notificaciones:{screen:NotificacionesHist}
},{
  initialRouteName: "comunicaciones",
  unmountInactiveRoutes: false,// desmonta vista
  // drawerWidth:200,
  edgeWidth:0,
  contentComponent:Menu
});

export default DrawerNavigatorHome;
