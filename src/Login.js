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
  TouchableOpacity
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
  removeOrientationListener as rol} from 'react-native-responsive-screen';
import { Container, Header, Content, Form, Item, Input, Label,Button,Text as Textn } from 'native-base';
import { DefaultTheme, TextInput } from 'react-native-paper';

// import { TextField } from 'react-native-material-textfield';


var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      user:'',
      password:''
    }
  }
  async login(){
    console.log('login')
    // console.log(props)
    // simulate login event
    // this.setState({
    //   loadShow:true
    // })
    // let fetchFalse=await this.emulateFetch().then(
    //   e=>{
    //     console.log(e);
    //     if(e===true){
    //       this.setState({
    //         loadShow:false
    //       })
          this.props.navigation.navigate('mainscreen');
    //     }
    //   }
    // );
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.viewStyleTwo}>

          <View style={styles.viewStyleThree}>
            <View style={{flexDirection:'column',width:wp('70%'),backgroundColor:'#f0f0f0',justifyContent:'center',alignSelf:'center',height:null}}>
              <Image style={styles.LogoStyle} source={require('../assets/img/cion_logo_color.png')}/>
              <View style={{flexDirection:'column',width:wp('70%'),backgroundColor:'#f0f0f0',justifyContent:'center',alignSelf:'center',height:null}}>
                <Text style={styles.titleStyle}>Iniciar Sesión</Text>
                <Text style={styles.subtitleStyle}>Puedes inicar sesion con tu Correo electronico empresarial o tu numero celular</Text>
              </View>
              <View style={{marginTop:20}}>
                <TextInput
                  theme={theme}
                  secureTextEntry={false}
                  mode={"outlined"}
                  label='Correo'
                  value={this.state.user}
                  onChangeText={value => this.setState({user:value})}/>
              </View>
              <View style={{marginTop:20}}>
                <TextInput
                  theme={theme}
                  secureTextEntry={true}
                  mode={"outlined"}
                  label='Contraseña'
                  value={this.state.password}
                  onChangeText={value => this.setState({password:value})}/>
              </View>

              <Button style={styles.buttonl} onPress={()=>this.login()}><Textn>Iniciar sesion</Textn></Button>
              <TouchableOpacity style={{ height:40,marginTop:30,alignSelf:'center'}}>
                <Text>¿Olvidaste tu contraseña?</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/*<View style={styles.viewStyleFive}>

          </View>*/}
        </View>
        </KeyboardAvoidingView>
    );
  }
}

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#c3002f'
  }
};

let styles = StyleSheet.create({
  containerScroll: {
    backgroundColor:'green',
    flex:1,
  },
  container: {
    backgroundColor:'#f0f0f0',
    flex:1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'flex-start'
  },
  viewStyleOne: {
    alignSelf:'stretch',
    flex:1,
    justifyContent: 'center',
    alignItems:'flex-start',
    backgroundColor:'#c3002f',
  },
  viewStyleTwo: {
    alignSelf:'stretch',
    flex:1,
    flexDirection:'column',
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    backgroundColor:'#f0f0f0'
  },
  viewStyleThree: {
    flex:2,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    alignSelf:'stretch',
    backgroundColor:'#f0f0f0',
  },
  viewStyleFour: {
    alignSelf:'stretch',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#f0f0f0'
  },
  viewStyleFive: {
    alignSelf:'stretch',
    flex:.5,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#f0f0f0'
    // backgroundColor:'red'
  },
  headerTextStyle:{
    left:20,
    color:"white",
    fontFamily: "GoogleSans-Medium",
    fontSize:hp('1.7%')
  },
  titleStyle:{
    marginTop:hp('5%'),
    color:"#0e0d0d",
    fontFamily: "GoogleSans-Regular",
    fontSize:hp('3.5%')
  },
  subtitleStyle:{
    marginTop:hp('1%'),
    color:"#0e0d0d",
    fontFamily: "GoogleSans-Regular",
    fontSize:hp('2.5%')
  },
  LogoStyle:{
    marginTop:hp('5%'),
    width: wp('35%'),
    height:50,
    resizeMode:"contain",
    alignSelf:'center',
    // backgroundColor:'gray'
  },
  bottomLogoStyle:{
    marginTop:hp('10%'),
    alignSelf:'center',
    height: hp('20%')
  },
  buttonl:{
    marginTop:50,
    backgroundColor:'#534bae',
    borderRadius:10,
    alignSelf:'center',
    width:wp('50%'),
    alignItems:'center',
    justifyContent:'center'
  },
  buttonT:{
    color:"white",
    fontFamily: "GoogleSans-Medium",
    fontSize:hp('1.5%'),
    textAlign:'center',
    alignSelf:'stretch',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'blue'
  }
})
