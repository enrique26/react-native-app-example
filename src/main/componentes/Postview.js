/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native';
import {
  Icon,
  Button as ButtonN,
  Text as TextN
} from 'native-base';

import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

import Rating from './Rating'
// import { Rating, AirbnbRating } from 'react-native-ratings';

export default class Postview extends Component {
  constructor(props){
    super(props);

  }
  _getSelectedRating(selected){
    console.log('selected')
    console.log(selected)
  }
  render() {
    const title = "titulo lorem ipsum multilinea paseo nota a otro titulo nota 1,titulo lorem ipsum multilinea paseo nota a otro titulo nota 1"
    const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    const counter = 0;
    const time = "hace 2 horas"

    return (
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={{height: null,width:'100%'}}>
            <Image source={require('../../../assets/img/cloud.png')} style={{backgroundColor:'gray',maxHeight: hp('30%'), width: null,height:hp('30%'),resizeMode:'cover'}}></Image>

            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('noticias')}} style={{height:50,width:50,alignItems:'center',justifyContent:'center',position:'absolute',top:10,left:10}}>
              <Icon name="arrow-back" style={{color:'black'}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{height:50,width:50,alignItems:'center',justifyContent:'center',position:'absolute',top:10,right:10}}>
              <Icon name="bookmark" style={{color:'black'}}></Icon>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
              <Text style={{alignSelf:'flex-start'}}>Hace {time}</Text>
              <View style={{flexDirection:"row",alignItems:'center',justifyContent:"flex-end",marginTop:5}}>
                <Text>{counter}</Text>
                <Icon name={"happy"} style={{marginLeft:4,color:'black'}}></Icon>
              </View>
            </View>
            <Text style={styles.textPost}>
              {content}
            </Text>
            <View>
              <Text style={styles.titlesub}>Califica la publicación</Text>
            </View>
            <View style={{marginTop:20}}>
              <Rating getSelected={this._getSelectedRating}></Rating>
            </View>
            <View>
              <Text style={styles.titlesub}>¿Tienes comentarios?</Text>
            </View>
            <TextInput
              multiline = {true}
              editable = {true}
              maxLength = {200}
              numberOfLines = {8}
              placeholder = {"Escribe aquí"}
              placeholderTextColor={"gray"}
              style={{textAlignVertical:'top',marginTop:20,marginBottom:10,borderRadius:5,borderColor:'gray',borderWidth:1}}
            />
          <ButtonN style={styles.buttonEnviar}><TextN>Enviar</TextN></ButtonN>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex:0
  },
  title:{
    fontSize:22,
    color:'black',
    marginTop:10,
    textAlign:'left'
  },
  titlesub:{
    fontSize:16,
    color:'black',
    marginTop:10,
    textAlign:'left'
  },
  content:{
    flex:1,
    // flexDirection:'column',
    width:wp('90%'),
    alignSelf:'center'
  },
  textPost:{
    marginTop:20,
    color:'gray',
    fontSize:15,
    textAlign:'left'
  },
  buttonEnviar:{
    marginTop:15,
    marginBottom:20,
    width:wp('60%'),
    height:50,
    borderRadius:20,
    backgroundColor:'#b0b0b0',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  }
});
