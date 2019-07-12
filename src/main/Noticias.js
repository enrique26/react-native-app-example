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
  Text as TextN,
  Icon,
  Body,
  Left,
  Right
} from 'native-base';
import { DefaultTheme, TextInput, FAB } from 'react-native-paper';

var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

import Tarjeta from './componentes/Tarjeta';
import TopHeader from './componentes/TopHeader';

export default class Noticias extends Component {
  constructor(props){
    super(props);

    this.state={
      noticias:[{id:1,title:"titulo lorem ipsum multilinea paseo nota a otro titulo nota 1,titulo lorem ipsum multilinea paseo nota a otro titulo nota 1",count:2,time:"30 minutos"},{id:2,title:"titulo nota 2",count:2,time:"2 horas",grupo:"hash note"},{id:3,title:"titulo nota 3",count:2,time:"12:30"}]
    }
  }
  /*{
    noticias.map( (nota,i) => <Tarjeta key={"T"+i} title={nota.title} counter={nota.count} time={nota.time}></Tarjeta>)
  }*/
  render() {
    const { noticias } = this.state;
    return (
      <View style={styles.container}>
        <TopHeader {...this.props} title="Comunicados"></TopHeader>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'column',
            alignItems:'center',
            backgroundColor:'gray'
          }}
          data={this.state.noticias}
          keyExtractor={(item,index) => item.id.toString()}
          renderItem={
            ({item}) => (
              <TouchableOpacity activeOpacity={0.8} onPress={()=>{this.props.navigation.navigate('postview')}}>
                <Tarjeta title={item.title} counter={item.count} time={item.time} gruponame={item.grupo != undefined ? item.grupo:""}></Tarjeta>
              </TouchableOpacity>
            )
          }
          ></FlatList>
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
