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
  Right,
  List,
  ListItem
} from 'native-base';

import TopHeader from './componentes/TopHeader';

export default class NotificacionesHist extends Component {
  constructor(props){
    super(props);
    this.state={
      notificaciones:[
        {
          title:"Clima laboral",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:1,
          tiempo:'Hace 5 minutos'
        },
        {
          title:"Laura flores",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:2,
          tiempo:'Hace 10 minutos'
        },
        {
          title:"Importante",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:3,
          tiempo:'Hace 10 minutos'
        },
        {
          title:"Productividad",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:4,
          tiempo:'Hace 10 minutos'
        },
        {
          title:"Clima laboral",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:1,
          tiempo:'Hace 15 minutos'
        },
        {
          title:"Productividad",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:4,
          tiempo:'Hace 10 minutos'
        },
        {
          title:"Importante",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:3,
          tiempo:'Hace 10 minutos'
        },
        {
          title:"Productividad",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:4,
          tiempo:'Hace 10 minutos'
        },
        {
          title:"Clima laboral",
          content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          type:1,
          tiempo:'Hace 15 minutos'
        },

      ]
    }
  }

  componentDidMount(){
    this.nuevaNotificacion();
  }

  requestNot(nueva,title) {
    return new Promise(function(resolve, reject) {
      /*stuff using username, password*/
      if(nueva == true){
        var notifica={
          response:true,
          notificacion:{
            title:title,
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
            type:1,
            tiempo:'Ahora'
          }
        }
        setTimeout(function(){
          resolve(notifica); // ¡Todo salió bien!
        }, 2000);
      }else{
        var notifica={
          response:false
        }
        setTimeout(function(){
          reject('error'); // ¡Todo salió bien!
        }, 250);
      }

    });
  }

  async nuevaNotificacion(){

    await this.requestNot(true,"Clima laboral").then((res)=>{
      console.log(res);
      if(res.response==true){
        this.setState((prevState, props) => (
          {
            notificaciones:[res.notificacion,...prevState.notificaciones]
          })
        );
      }
    });

    await this.requestNot(true,"Productividad").then((res)=>{
      console.log(res);
      if(res.response==true){
        this.setState((prevState, props) => (
          {
            notificaciones:[res.notificacion,...prevState.notificaciones]
          })
        );
      }
    });


  }
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}>
          <Left>
          <ButtonN transparent onPress={()=>{this.props.navigation.goBack()}}>
            <Icon name='arrow-back' style={{color:'white'}}/>
          </ButtonN>
        </Left>
          <Body>
            <Text style={styles.headerTextStyle}>Notificaciones</Text>
          </Body>
          <Right/>
        </Header>
        <View style={{flex:1,backgroundColor:'white'}}>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'column',
              alignItems:'stretch',
              backgroundColor:'white',
            }}
            data={this.state.notificaciones}
            keyExtractor={(item,index) => "n"+index.toString()}
            renderItem={
              ({item}) => (
                <View style={{flexDirection:'column',backgroundColor:'white',alignSelf:'stretch',height:null}}>
                  <View style={{flexDirection:'row',alignSelf:'stretch'}}>
                    <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                      <Icon name="albums"></Icon>
                    </View>
                    <View style={{flex:4,flexDirection:'column'}}>
                        <Text style={styles.titleNot}>{item.title}</Text>
                        <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.contetnNot}>{item.content}</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'column',alignItems:'flex-start'}}>
                      <Text style={{fontSize:10,color:'gray'}}>{item.tiempo}</Text>
                    </View>
                  </View>
                  <View style={{marginTop:5,alignSelf:'stretch',height:1,backgroundColor:'#f0f0f0'}}></View>
                </View>
              )
            }
            ></FlatList>
        </View>
      </View>
    );
  }
}
//
// <ListItem icon style={{alignSelf:'stretch',height:70}}>
//   <Left>
//     <ButtonN style={{ backgroundColor: "#007AFF" }}>
//       <Icon active name="bluetooth" />
//     </ButtonN>
//   </Left>
//   <Body>
//     <View >
//     <Text style={styles.titleNot}>{item.title}</Text>
//     <Text numberOfLines={2} ellipsizeMode={'tail'} style={styles.contetnNot}>{item.content}</Text>
//     </View>
//   </Body>
//   <Right style={{alignItems:'flex-start'}}>
//     <Text style={{fontSize:10,color:'gray'}}>{item.tiempo}</Text>
//   </Right>
// </ListItem>


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
  titleNot:{
    color:'black',
    fontSize:14,
    fontWeight:'bold'
  },
  contetnNot:{
    color:'gray',
    fontSize:12
  }
});
