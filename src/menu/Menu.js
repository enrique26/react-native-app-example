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
  FlatList,
  ScrollView
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
  Text as TextN,
  Icon,
  Body,
  Left,
  Right,
  List,
  ListItem,
  Thumbnail
} from 'native-base';
import { Avatar } from 'react-native-paper';

export default class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      puntos:"3,000"
    }
  }
  render() {
    const { puntos } = this.state;
    return (
      <View style={styles.container}>
        <View style={{height:hp('30%'),backgroundColor:'gray'}}>
          <View style={{height:hp('20%'),backgroundColor:'#d0d0d0'}}>
            <Image style={styles.LogoStyle} source={require('../../assets/img/cion_logo_color.png')}/>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('perfilmain')}} style={{flexDirection:'row',marginLeft:15,alignItems:'center'}}>
              <Avatar.Image size={54} source={require('../../assets/img/user.png')} />
              <View style={{flexDirection:'column',marginLeft:15}}>
                <Text style={styles.nombreUser}>User name</Text>
                <Text style={styles.cargoUser}>puesto</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',height:hp('10%'),backgroundColor:'gray',alignItems:'center',justifyContent:'space-evenly'}}>
            <Text style={{color:'black',fontSize:hp('3.8%')}}> { puntos } pts</Text>
            <View>
              <ButtonN dark onPress={()=>{this.props.navigation.navigate('premiosview')}} style={{width:wp('30%'),justifyContent:'center'}}><Text style={{fontSize:hp('1.8%'),color:'white'}}>Canjear puntos</Text></ButtonN>
            </View>
          </View>
        </View>
        <View style={{flex:1,backgroundColor:'#f0f0f0'}}>
          <ScrollView style={{flex:1}}>
            <TouchableOpacity transparent onPress={()=>{this.props.navigation.navigate('comunicaciones')}} style={styles.buttonmenu}>
              <Icon name="remove-circle" style={{color:'black'}}></Icon>
              <Text style={styles.textButtonMenu}>Comunicaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity transparent onPress={()=>{this.props.navigation.navigate('encuestasmain')}} style={styles.buttonmenu}>
              <Icon name="remove-circle" style={{color:'black'}}></Icon>
              <Text style={styles.textButtonMenu}>Encuestas</Text>
            </TouchableOpacity>
            <TouchableOpacity transparent onPress={()=>{this.props.navigation.navigate('solicitudesMain')}} style={styles.buttonmenu}>
              <Icon name="remove-circle" style={{color:'black'}}></Icon>
              <Text style={styles.textButtonMenu}>Solicitudes</Text>
            </TouchableOpacity>
            <TouchableOpacity transparent onPress={()=>{this.props.navigation.navigate('ubicacion')}} style={styles.buttonmenu}>
              <Icon name="remove-circle" style={{color:'black'}}></Icon>
              <Text style={styles.textButtonMenu}>Mapa de ubicación</Text>
            </TouchableOpacity>
            <TouchableOpacity transparent onPress={()=>{this.props.navigation.navigate('quejas')}} style={styles.buttonmenu}>
              <Icon name="remove-circle" style={{color:'black'}}></Icon>
              <Text style={styles.textButtonMenu}>Quejas y comentarios</Text>
            </TouchableOpacity>

            <TouchableOpacity transparent onPress={()=>{this.props.navigation.navigate('')}} style={styles.buttonmenudos}>
              <Text style={styles.textButtonMenu}>FAQs</Text>
            </TouchableOpacity>


            <TouchableOpacity transparent onPress={()=>{this.props.navigation.navigate('login')}} style={styles.buttonmenudos}>
              <Text style={styles.textButtonMenu}>Cerrar sesión</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LogoStyle:{
    marginTop:10,
    width: wp('40%'),
    height:hp('4%'),
    resizeMode:"contain",
    alignSelf:'flex-end',
    marginRight:15,
    // backgroundColor:'gray'
  },
  nombreUser:{
    color:'black',
    fontSize:hp('3.5%')
  },
  cargoUser:{
    color:'gray',
    fontSize:hp('2.2%')
  },
  buttonmenu:{
    marginTop:15,
    alignItems:'center',
    flexDirection:'row',
    width:wp('50%'),
    height:null,
    alignSelf:'center'
  },
  buttonmenudos:{
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    width:wp('50%'),
    height:null,
    alignSelf:'center'
  },
  textButtonMenu:{
    fontSize:14,
    color:'gray',
    padding:10
  }
});
