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
  FlatList,
  ScrollView,
  Modal
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
  Picker
} from 'native-base';
import { DefaultTheme, TextInput, FAB } from 'react-native-paper';
import TopHeader from './componentes/TopHeader';

var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

import Rating from './componentes/Rating';

export default class Quejas extends Component {
  constructor(props){
    super(props);

    this.state={
      modalVisible: false,
      selected:'0'
    }
  }

  componentWillMount(){
    this.setState({
      modalVisible:false
    })
  }

  _getSelectedRating(selected){
    console.log('selected')
    console.log(selected)
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  /*{
    noticias.map( (nota,i) => <Tarjeta key={"T"+i} title={nota.title} counter={nota.count} time={nota.time}></Tarjeta>)
  }*/
  render() {
    const title = "¿Quiéres contarnos algo?"
    const content = "¿Lorem Ipsum is simply dummy text of the printing and typesetting industry.?"
    const { modalVisible,data } = this.state;
    return (
      <View style={styles.container}>
        <TopHeader {...this.props} title="Quejas y comentarios"></TopHeader>
        <View style={{flex:1,flexDirection:'column'}}>
          <ScrollView style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <View style={{marginTop:20,alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>
            <Picker
                mode="dropdown"
                iosHeader="Elija una opción"
                iosIcon={<Icon name="arrow-down" color="black"/>}
                style={{ width: wp('70%'),alignSelf:'center' }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Sugerencia" value="0" />
                <Picker.Item label="Queja" value="1" />
                <Picker.Item label="Reporte" value="2" />
              </Picker>
              <View style={{marginTop:5,alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>
              <View>
                <Text style={styles.titlesub}>Cuéntanos</Text>
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
              <View style={{flex:1,flexDirection:'row',alignSelf:'stretch',alignItems:'flex-start',justifyContent:'space-between'}} >
                <ButtonN style={styles.buttonFotos}><Icon name='image' /><TextN>Galería</TextN></ButtonN>
                <ButtonN style={styles.buttonFotos}><Icon name='camera' /><TextN>Cámara</TextN></ButtonN>
              </View>
              <Text style={styles.titlesub}>¿Cómo te sientes al respecto?</Text>
              <View style={{marginTop:20}}>
                <Rating getSelected={this._getSelectedRating}></Rating>
              </View>
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
                    <Text style={styles.modaltitle}>Gracias por tus comentarios</Text>
                    <Image style={{resizeMode:'contain',maxHeight:250,maxWidth:250,marginTop:15,borderRadius:5}} source={require('../../assets/img/cloud.png')}></Image>
                    <Text style={{color:'black',fontSize:15,marginTop:5}}>Te responderemos en breve</Text>
                  </View>
                  <View style={{flex:1,alignSelf:'stretch',alignItems:'flex-start',justifyContent:'center'}} >
                    <ButtonN style={styles.buttonAcuerdo} onPress={()=>{this.setModalVisible(false)}}><TextN>De acuerdo</TextN></ButtonN>
                  </View>
                </View>
              </View>
            </Modal>

          </ScrollView>
          <FAB
            icon={() => (
              <Icon name="comment" style={{fontSize:22,color:'white',alignSelf:'center'}} type="FontAwesome"></Icon>
            )}
            color="white" style={styles.fabButton}
            onPress={() => {this.props.navigation.navigate('chat')}}
          ></FAB>
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
  content: {
    flex: 1
  },
  header:{
    backgroundColor:'#0d47a1',
  },
  headerTextStyle:{
    color:"white",
    fontSize:hp('2.2%'),
    fontWeight:'bold'
  },
  title:{
    fontSize:20,
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
    marginLeft:20,
    marginBottom:20,
    width:wp('40%'),
    height:50,
    borderRadius:20,
    backgroundColor:'#b0b0b0',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'flex-start'
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
  buttonFotos:{
    marginTop:15,
    marginBottom:20,
    width:wp('40%'),
    height:50,
    borderRadius:10,
    backgroundColor:'#b0b0b0',
    justifyContent:'center',
    alignItems:'center',
  },
  modaltitle:{
    color:'black',
    fontSize:18,
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
