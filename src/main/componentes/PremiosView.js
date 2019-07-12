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
  Text as TextN,
  Card,
  CardItem,
  Body
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

export default class PremiosView extends Component {
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
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('perfil')}} style={{height:50,width:50,alignItems:'center',justifyContent:'center',marginTop:10,alignSelf:'flex-start'}}>
              <Icon name="arrow-back" style={{color:'black'}}></Icon>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.content}>
            <View style={{alignSelf:'stretch',alignItems:'center'}}>
              <Text style={styles.title}>Canjear puntos</Text>
              <View style={{marginTop:10,marginBottom:10}}>
                <Text style={styles.textPuntos}>Tienes</Text>
                <Text style={styles.textLabelPuntos}>3,000</Text>
                <Text style={styles.textPuntos}>puntos</Text>
              </View>
            </View>
            <View style={{marginTop:10,alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>
            <View style={{alignSelf:'stretch',alignItems:'center',marginTop:10}}>
              <Text style={styles.textPuntos}>Selecciona una caja</Text>
                <View style={{flexDirection:'row',width:wp('95%'),marginTop:10}}>
                  <TouchableOpacity onPress={()=>{this.setModalVisible(true)}}>
                  <Card style={styles.cardLeft}>
                    <CardItem style={{flex:1}}>
                      <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="help" style={{fontSize:38}}></Icon>
                        <Text style={{fontWeight:'bold',color:'black'}}>100 pts</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.setModalVisible(true)}}>
                  <Card style={styles.cardRight}>
                    <CardItem style={{flex:1}}>
                      <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="help" style={{fontSize:38}}></Icon>
                        <Text style={{fontWeight:'bold',color:'black'}}>1000 pts</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',width:wp('95%'),marginTop:10}}>
                  <TouchableOpacity onPress={()=>{this.setModalVisible(true)}}>
                  <Card style={styles.cardLeft}>
                    <CardItem style={{flex:1}}>
                      <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="help" style={{fontSize:38}}></Icon>
                        <Text style={{fontWeight:'bold',color:'black'}}>100 pts</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>{this.setModalVisible(true)}}>
                  <Card style={styles.cardRight}>
                    <CardItem style={{flex:1}}>
                      <Body style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="help" style={{fontSize:38}}></Icon>
                        <Text style={{fontWeight:'bold',color:'black'}}>1000 pts</Text>
                      </Body>
                    </CardItem>
                  </Card>
                  </TouchableOpacity>
                </View>
            </View>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.log('Modal has been closed.');
            }}>
            <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.4)'}}>
              <View style={{height:hp('80%'),width:wp('90%'),backgroundColor:'white',borderRadius:10}} >
                <View style={{flex:.5,alignSelf:'stretch',alignItems:'flex-end'}} >
                  <TouchableOpacity onPress={()=>{this.setModalVisible(false)}} style={{marginRight:15,marginTop:15}}>
                    <Icon name="close" stye={{color:'black'}}></Icon>
                  </TouchableOpacity>
                </View>
                <View style={{flex:4,alignSelf:'stretch',alignItems:'center',justifyContent:'flex-start'}} >
                  <Text style={styles.modaltitle}>¡Felicidades!</Text>
                  <Text style={styles.modalsubtitle}>Has ganado</Text>
                  <Image style={{resizeMode:'contain',maxHeight:250,maxWidth:250,marginTop:25,borderRadius:5}} source={require('../../../assets/img/cloud.png')}></Image>
                  <Text style={{color:'black',fontSize:15,marginTop:5}}>Chamarra impermeable</Text>
                  <Text style={{color:'black',fontSize:15,marginTop:10,textAlign:'center',maxWidth:200}}>Capital humano se pindra en contacto contigo en breve</Text>
                </View>
                <View style={{flex:1,alignSelf:'stretch',alignItems:'flex-start',justifyContent:'center'}} >
                  <ButtonN style={styles.buttonAcuerdo} onPress={()=>{this.setModalVisible(false)}}><TextN>De acuerdo</TextN></ButtonN>
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
    zIndex:0,
    backgroundColor:'white'
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
  },
  textPuntos:{
    color:'black',
    fontSize:16
  },
  textLabelPuntos:{
    color:'black',
    fontSize:22
  },
  cardLeft:{
    marginLeft:10,
    width:wp('45%'),
    height:200,
    alignSelf:'flex-start',
    backgroundColor:'#f0f0f0'
  },
  cardRight:{
    marginLeft:10,
    width:wp('45%'),
    height:200,
    alignSelf:'flex-end',
    backgroundColor:'#f0f0f0'
  },
  buttonAcuerdo:{
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
  modalsubtitle:{
    color:'black',
    fontSize:18,
    maxWidth:200
  }
});
