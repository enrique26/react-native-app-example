/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Button,
  Icon
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol} from 'react-native-responsive-screen';

const Tarjeta = props => {
  const {
    title="Titulo tarjeta",
    counter=0,
    time="",
    gruponame=""
  } = props;

  return (

    <Card style={{width:wp('90%'),height:null,marginTop:10}}>
      <CardItem cardBody>
        <Image source={require('../../../assets/img/cloud.png')} style={{backgroundColor:'gray',height: 150, width: null, flex: 1,resizeMode:'cover'}}></Image>
        {
          gruponame != "" &&
          <View style={{height:40,width:150,position:'absolute',left:5,top:5,backgroundColor:'black',justifyContent:'center'}}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{padding:2,color:'white'}}>{gruponame}</Text>
          </View>
        }
      </CardItem>
      <CardItem footer style={{height:null}}>
        <View style={{flex:1,flexDirection:'column'}}>
          <Text>{title}</Text>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <Text style={{alignSelf:'flex-start'}}>Hace {time}</Text>
            <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
              <Text>{counter}</Text>
              <Icon name={"happy"} style={{marginLeft:4,color:'black'}}></Icon>
            </View>
          </View>
        </View>
      </CardItem>
    </Card>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Tarjeta
