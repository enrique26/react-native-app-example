/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  Dimensions,
  BackHandler,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  DrawerItems,
  createBottomTabNavigator } from 'react-navigation';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import {
  Container,
  Header,
  Content,
  Form,
  Input,
  Label,
  Button as ButtonN,
  Text as Textn,
  Icon,
  Body,
  Left,
  Right,
  Card,
  CardItem
} from 'native-base';
import { DefaultTheme, TextInput, FAB } from 'react-native-paper';

var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

import Tarjetaenc from './componentes/Tarjetaenc';
import TopHeader from './componentes/TopHeader';

export default class Solicitudes extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TopHeader {...this.props} title="Solicitudes"></TopHeader>
        <View style={{flex:1}}>
          <View style={{flexDirection:'row',width:wp('95%')}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('')}}>
            <Card style={{marginLeft:10,width:wp('45%'),height:200,alignSelf:'flex-start'}}>
              <CardItem style={{flex:1}}>
                <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Image source={require('../../assets/img/disabled.png')} style={{height:50,width:50,resizeMode:'contain'}}></Image>
                  <Text style={{fontWeight:'bold',color:'black'}}>Nomina</Text>
                </Body>
              </CardItem>
            </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('prestamoview')}}>
            <Card style={{marginLeft:10,width:wp('45%'),height:200,alignSelf:'flex-end'}}>
              <CardItem style={{flex:1}}>
                <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Image source={require('../../assets/img/disabled.png')} style={{height:50,width:50,resizeMode:'contain'}}></Image>
                  <Text style={{fontWeight:'bold',color:'black'}}>Préstamo</Text>
                </Body>
              </CardItem>
            </Card>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',width:wp('95%')}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('vacacionesview')}}>
            <Card style={{marginLeft:10,width:wp('45%'),height:200,alignSelf:'flex-start'}}>
              <CardItem style={{flex:1}}>
                <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Image source={require('../../assets/img/disabled.png')} style={{height:50,width:50,resizeMode:'contain'}}></Image>
                  <Text style={{fontWeight:'bold',color:'black'}}>Vacaciones</Text>
                </Body>
              </CardItem>
            </Card>
            </TouchableOpacity>
          </View>
        </View>
          <FAB
            icon={() => (
              <Icon name="comment" style={{fontSize:22,color:'white',alignSelf:'center'}} type="FontAwesome"></Icon>
            )}
            color="white" style={styles.fabButton}
            onPress={() => {this.props.navigation.navigate('chat')}}
        ></FAB>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex:0
  },
  header:{
    backgroundColor:'#0d47a1',
  },
  headerTextStyle:{
    color:"white",
    fontSize:hp('2.2%'),
    fontWeight:'bold'
  },
  fabButton:{
    position: 'absolute',
    margin: 15,
    right: 10,
    bottom: 10,
    backgroundColor:'#001064'
  }
});
