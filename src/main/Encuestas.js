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
  Right
} from 'native-base';
import { DefaultTheme, TextInput, FAB } from 'react-native-paper';

var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

import Tarjetaenc from './componentes/Tarjetaenc';
import TopHeader from './componentes/TopHeader';

export default class Encuestas extends Component {
  constructor(props){
    super(props);

    this.state={
      noticias:[{id:1,title:"titulo encuesta 1",descripcion:"descripcion de la encuesta",puntos:10},{id:2,title:"titulo encuesta 2",descripcion:"descripcion de la encuesta",puntos:15},{id:3,title:"titulo encuesta 3",descripcion:"descripcion de la encuesta",puntos:20}],
      historial:[{id:4,title:"titulo encuesta 4",descripcion:"descripcion de la encuesta",puntos:10,done:true},{id:5,title:"titulo encuesta 5",descripcion:"descripcion de la encuesta",puntos:10,done:true},{id:6,title:"titulo encuesta 6",descripcion:"descripcion de la encuesta",puntos:10,done:true}]
    }
  }
  /*{
    noticias.map( (nota,i) => <Tarjeta key={"T"+i} title={nota.title} counter={nota.count} time={nota.time}></Tarjeta>)
  }*/
  render() {
    const { noticias } = this.state;
    return (
      <View style={styles.container}>
        <TopHeader {...this.props} title="Encuestas"></TopHeader>
        <View style={{height:hp('10%'),alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'black',fontSize:16}}> Pendientes</Text>
        </View>
        <View style={{flex:1}}>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'column',
              alignItems:'center',
              backgroundColor:'#f0f0f0'
            }}
            data={this.state.noticias}
            keyExtractor={(item,index) => item.id.toString()}
            renderItem={
              ({item}) => (
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{this.props.navigation.navigate('encuestaview',{"data":{puntos:item.puntos,title:item.title,}})}}>
                  <Tarjetaenc title={item.title} puntos={item.puntos} descripcion={item.descripcion}></Tarjetaenc>
                </TouchableOpacity>
              )
            }
            ></FlatList>
        </View>
        <View style={{height:hp('10%'),alignItems:'center',justifyContent:'center',borderTopColor:'#d0d0d0',borderTopWidth:1}}>
          <Text style={{color:'black',fontSize:16}}> Historial</Text>
        </View>
        <View style={{flex:1}}>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'column',
              alignItems:'center',
              backgroundColor:'#f0f0f0',
              opacity:.4
            }}
            data={this.state.historial}
            keyExtractor={(item,index) => item.id.toString()}
            renderItem={
              ({item}) => (
                  <Tarjetaenc title={item.title} puntos={item.puntos} done={item.done} descripcion={item.descripcion}></Tarjetaenc>
              )
            }
            ></FlatList>
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
