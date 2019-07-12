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
  PermissionsAndroid,
  Alert,
  ActivityIndicator
} from 'react-native';
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
  Right
} from 'native-base';
import Geolocation from '@react-native-community/geolocation';
import MapView,{Marker} from 'react-native-maps';
import { FAB } from 'react-native-paper';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import TopHeader from './componentes/TopHeader';

var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

const GOOGLE_MAPS_APIKEY="YOUR-MAPS-API-KEY"; /*add the key to android manifest.xml too*/
export default class Ubicacion extends Component {
  constructor(props){
    super(props);
    this.state={
      ubicacion:null,
      location:null,
    };
  }

  componentWillMount(){
    console.log('componentWillMount');
    // this.getData()
  }

  componentDidMount(){
    const hasPermission = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    // console.log(hasPermission);
    // console.log('geo will:'+hasPermission);
    if (hasPermission) {
      Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        // this.setState({initialPosition});
        console.log(position);
        this.setState({
          location:position.coords
        });
        this._setLocation();

        // this._setLocation(position.coords);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
    }
  }

  _setLocation = async () => {
    try {
      console.log('storage'+JSON.stringify(this.state.location));
      await AsyncStorage.setItem('location', JSON.stringify(this.state.location));

    } catch (error) {
      // Error saving data
      console.log('Error saving data async storage');
    }
  };

  getData = async () => {
    console.log('get storage');
    try {
      const value = await AsyncStorage.getItem('location')
      if(value !== null) {
        // console.log(JSON.parse(value))
        this.setState({
          location:JSON.parse(value),
          ubicacion:this.props.navigation.getParam('ubicacion',{}),
          domicilio:this.props.navigation.getParam('domicilio',"")
        })
      }
    } catch(e) {
      // error reading value
      console.log('error reading value:'+e);
    }
  }

  toTest(data,nav){
    console.log('opening mapas')
    // nav('Mapas',{'ubicacion':data});
  }

  _renderMap(){
    const { location } = this.state;

    const origin = {latitude: location.latitude, longitude: location.longitude};
    const origin2 = {latitude: location.latitude+.00222, longitude: location.longitude+.00422};
    const origin3 = {latitude: location.latitude+.00422, longitude: location.longitude-.00222};
    const origin4 = {latitude: location.latitude-.00482, longitude: location.longitude-.00422};
    return(
      <MapView style={{flex:1}}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta:.017,
          longitudeDelta: .017
        }}>
        <Marker title="Tu ubicación" coordinate={origin} pinColor="#0000ff"></Marker>
        <Marker title="SF"coordinate={origin2} pinColor="#30baff">
          <View style={{backgroundColor: "red", padding: 10}}>
             <Text>SF</Text>
           </View>
        </Marker>
        <Marker title="NF" coordinate={origin3} pinColor="#c500ff">
          <View style={{backgroundColor: "#c500ff", padding: 10}}>
             <Text>NF</Text>
           </View>
        </Marker>
        <Marker title="CF" coordinate={origin4} pinColor="#00b2ff">
          <View style={{backgroundColor: "#00b2ff", padding: 10}}>
             <Text>CF</Text>
           </View>
        </Marker>
      </MapView>
    )
  }

  render() {
    const { location } = this.state;
    console.log(location)

    return (
      <View style={styles.container}>
        <TopHeader {...this.props} title="Mapa de ubicación"></TopHeader>
          <View style={{flex:1}}>
            <View style={{width:wp('90%'),height:hp('70%'),alignSelf:'center'}}>
              {
                location == null ? <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><ActivityIndicator size="large" color="blue"/></View>:this._renderMap()
              }
            </View>
            <View style={{flex:1,flexDirection:'column',marginTop:10,justifyContent:'space-evenly',alignItems:'center'}}>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',alignSelf:'stretch',alignItems:'center'}}>
                  <ButtonN primary><TextN>op1</TextN></ButtonN>
                  <ButtonN light><TextN>op2</TextN></ButtonN>
                  <ButtonN light><TextN>op3</TextN></ButtonN>
                  <ButtonN light><TextN>op4</TextN></ButtonN>
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
  header:{
    backgroundColor:'#0d47a1',
  },
  headerTextStyle:{
    color:"white",
    fontSize:hp('2.2%'),
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
