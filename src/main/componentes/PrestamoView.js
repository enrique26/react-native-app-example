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

export default class PrestamoView extends Component {
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
    const content = "Tu proximo pago es mañana."
    const { modalVisible,data } = this.state;

    console.log('data')
    console.log(data)
    return (
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'column'}}>
          <View style={{height: null,width:'100%'}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('solicitudes')}} style={{height:50,width:50,alignItems:'center',justifyContent:'center',marginTop:10,alignSelf:'flex-start'}}>
              <Icon name="arrow-back" style={{color:'black'}}></Icon>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.content}>
            <View style={{alignSelf:'stretch',alignItems:'center'}}>
              <Text style={styles.title}>Tienes un préstamo vigente por</Text>
              <Text style={styles.titleMoney}>10,000</Text>
                <Text style={styles.textinst}>
                  {content}
                </Text>
            </View>
            <View style={{marginTop:20,width:wp('90%'),height:null,backgroundColor:'#d0d0d0',borderRadius:5}}>
              <Text style={styles.titlesub}>Te recomendamos pagarlo antes del 14 de marzo de 2019 a las 15:00</Text>
            </View>

          </ScrollView>
          <Text style={{position:'absolute',bottom:hp('10%'),color:'#d0d0d0',fontSize:18,fontWeight:'bold',alignSelf:'center'}}>Detalle del préstamo</Text>
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
  titleMoney:{
    marginTop:20,
    fontSize:30,
    alignSelf:'center',
    color:'black',
    textAlign:'center'
  },
  titlesub:{
    padding:15,
    fontSize:16,
    color:'black',
    textAlign:'left'
  },
  content:{
    flex:1,
    width:wp('90%'),
    alignSelf:'center'
  },
  textinst:{
    marginTop:10,
    fontSize:16,
    color:'black',
    textAlign:'left'
  }
});
