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

const Tarjetaenc = props => {
  const {
    title="Titulo tarjeta",
    descripcion=0,
    puntos=0,
    done=false
  } = props;

  return (
    <Card style={{width:wp('90%'),height:null,marginTop:10}}>
      <CardItem header>
          <View style={{flexDirection:"row"}}>
            <View style={{flex:2,flexDirection:"row",justifyContent:"flex-start"}}>
              <Text style={{alignSelf:'flex-start'}}>{title}</Text>
            </View>
            <View style={{flex:1,flexDirection:"row",justifyContent:"flex-end",alignSelf:'stretch'}}>
              {
                done == false ? <Text style={{color:'gray',fontSize:14}}>+ {puntos} pts</Text>:<Icon name="checkmark-circle" style={{color:'green'}}/>
              }

            </View>
          </View>
      </CardItem>
      <CardItem>
        <Body>
          <Text style={{color:'gray'}}>{descripcion}</Text>
        </Body>
      </CardItem>
      <CardItem footer />
    </Card>
  );

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
  }
});

export default Tarjetaenc
