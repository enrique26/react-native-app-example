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
  Dimensions,
  Modal
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

export default class EncuestaView extends Component {
  constructor(props){
    super(props);

    this.state={
      modalVisible: false,
    }

  }

  componentWillMount(){
    this.setState({
      modalVisible:false
    })
  }

  componentDidMount(){
    this.setState((prevState, props) => (
      {
        data:this.props.navigation.getParam('data',"")
      })
    );

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _getSelectedRating(selected){
    console.log('selected')
    console.log(selected)
  }
  render() {
    const title = "titulo lorem ipsum multilinea paseo nota a otro titulo nota 1"
    const content = "¿Lorem Ipsum is simply dummy text of the printing and typesetting industry.?"
    const { modalVisible,data } = this.state;

    console.log('data')
    console.log(data)
    return (
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={{height: null,width:'100%'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('encuestas')}} style={{height:50,width:50,alignItems:'center',justifyContent:'center',marginTop:10,alignSelf:'flex-start'}}>
              <Icon name="arrow-back" style={{color:'black'}}></Icon>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.content}>
            <Text style={styles.title}>{data != undefined ? data.title:title}</Text>
            <Text style={styles.textPost}>
              {content}
            </Text>
            <View style={{marginTop:20}}>
              <Rating getSelected={this._getSelectedRating}></Rating>
            </View>
            <View>
              <Text style={styles.titlesub}>¿Explicanos por qué?</Text>
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
          <ButtonN style={styles.buttonEnviar} onPress={()=>{this.setModalVisible(true)}}><TextN>Enviar</TextN></ButtonN>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                console.log('Modal has been closed.');
              }}>
              <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.4)'}}>
                <View style={{height:hp('80%'),width:wp('90%'),backgroundColor:'white',borderRadius:10}} >
                  <View style={{flex:1,alignSelf:'stretch',alignItems:'flex-end'}} >
                    <TouchableOpacity onPress={()=>{this.setModalVisible(false)}} style={{marginRight:15,marginTop:15}}>
                      <Icon name="close" stye={{color:'black'}}></Icon>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:3,alignSelf:'stretch',alignItems:'center',justifyContent:'flex-start'}} >
                    <Text style={styles.modaltitle}>Gracias por tu tiempo</Text>
                    <Image style={{resizeMode:'contain',maxHeight:250,maxWidth:250,marginTop:15,borderRadius:5}} source={require('../../../assets/img/cloud.png')}></Image>
                    <Text style={{color:'black',fontSize:15,marginTop:5}}>¡ Has ganado {data != undefined && data.puntos} puntos !</Text>
                  </View>
                  <View style={{flex:1,alignSelf:'stretch',alignItems:'center',justifyContent:'center'}} >
                    <ButtonN style={styles.buttonEnviar} onPress={()=>{this.setModalVisible(false)}}><TextN>De acuerdo</TextN></ButtonN>
                  </View>
                </View>
              </View>
            </Modal>
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
    color:'black',
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
  },
  modaltitle:{
    color:'black',
    fontSize:18,
    fontWeight:'bold'
  }
});
