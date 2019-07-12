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
  Modal,
  FlatList
} from 'react-native';
import {
  Icon,
  Button as ButtonN,
  Text as TextN
} from 'native-base';
import { Avatar } from 'react-native-paper';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Tarjeta from './componentes/Tarjeta';
var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

export default class Perfil extends Component {
  constructor(props){
    super(props);

    this.state={
      noticias:[{id:1,title:"titulo 1",count:2,time:"30 minutos"},{id:2,title:"titulo nota 2",count:2,time:"2 horas",grupo:"Grupo Operadores"},{id:3,title:"titulo nota 3",count:2,time:"12:30"}]
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
    const user = "User name"
    const content = "¿Lorem Ipsum is simply dummy text of the printing and typesetting industry.?"
    const { modalVisible,data } = this.state;

    console.log('data')
    console.log(data)
    return (
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={{height: null,width:'100%'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('comunicaciones')}} style={{height:50,width:50,alignItems:'center',justifyContent:'center',marginTop:10,alignSelf:'flex-start'}}>
              <Icon name="arrow-back" style={{color:'black'}}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style={{height:50,width:50,alignItems:'center',justifyContent:'center',position:'absolute',top:10,right:10}}>
              <Icon name="create" style={{color:'black'}}></Icon>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <View style={{alignSelf:'center',alignItems:'center'}}>
              <Avatar.Image size={84} source={require('../../assets/img/user.png')} />
              <Text style={styles.title}>{user}</Text>
              <Text style={styles.cargoUser}>puesto</Text>
            </View>
            <View style={{marginTop:10,alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>
            <View style={{marginTop:10,alignSelf:'center',alignItems:'center'}}>
              <Text style={styles.textPuntos}>Tienes</Text>
              <Text style={styles.textLabelPuntos}>3,000</Text>
              <Text style={styles.textPuntos}>puntos</Text>
              <ButtonN style={styles.buttonEnviar} onPress={()=>{this.props.navigation.navigate('premiosview')}}><TextN>Canjear puntos</TextN></ButtonN>
            </View>

            <View style={{marginTop:5,alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>
            <View style={{marginTop:5,flexDirection:'row',alignSelf:'center',alignItems:'center'}}>
              <Icon name="bookmark"></Icon><Text style={{marginLeft:10,color:'black'}}>Post guardados</Text>
            </View>
            <View style={{flex:1,alignSelf:'stretch',alignItems:'center'}}>
              <FlatList
                contentContainerStyle={{
                  flexDirection: 'column',
                  alignItems:'center',
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
            </View>
          </View>

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
    alignSelf:'stretch'
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
  },
  cargoUser:{
    color:'gray',
    fontSize:hp('2.2%')
  },
  textPuntos:{
    color:'black',
    fontSize:16
  },
  textLabelPuntos:{
    color:'black',
    fontSize:22
  }
});
