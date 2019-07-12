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
  Toast
} from 'native-base';

import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
var screenwidth = Dimensions.get('window').width; //full width
var screenheight = Dimensions.get('window').height; //full height

import CalendarPicker from 'react-native-calendar-picker';
var moment = require('moment');
var es_lang=require('moment/locale/es.js');
moment.locale('es',es_lang);
var business = require( 'moment-business');

export default class VacacionesView extends Component {
  constructor(props){
    super(props);

    this.state={
      modalVisible: false,
      showcalendar:false,
      showToast: false,
      selectedStartDate: null,
      selectedEndDate: null,
      dias:0,
      diasOriginal:0,
      rangoFechas:null,
      fechasArr:[]
    }
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentWillMount(){
    this.setState({
      modalVisible:false
    })
  }

  componentDidMount(){
    const preData=this.props.navigation.getParam('data',"");
    if(preData!=""){
      this.setState((prevState, props) => (
        {
          dias:preData.dias,/*/ejemplo dias disponibles/*/
          diasOriginal:preData.dias,
          data:preData
        })
      );
    }else{
      this.setState((prevState, props) => (
        {
          dias:5,/*/ejemplo dias disponibles/*/
          diasOriginal:5,
          data:null
        })
      );
    }


  }

  onDateChange(date, type) {
    var { selectedStartDate } = this.state;
    // console.log(date)
    // console.log(date.format("dddd, MMMM Do YYYY, h:mm:ss a"))

    if (type === 'END_DATE') {
      var a = moment([date.year(), date.month(), date.date()]);
      var b = moment([selectedStartDate.year(), selectedStartDate.month(),selectedStartDate.date()]);

      // console.log(moment().startOf('year'));
      // console.log( 'weekendDays(b, a)' );
      // console.log( business.weekendDays(b, a));
      // console.log( 'weekDays(b, a)' );
      // console.log( business.weekDays(b, a) );


      var diasSelect=parseInt( ((a.diff(b, 'days'))+1) );///+1 para contar el dia inicial,ya que esta funcion solo calcula la diferencia entre fechas

      var datestartcopy=selectedStartDate.clone(); /*hacer una copia de la fecha de inicio usando momentjs*/
      //Evitar los dines de semana
      var finSemana=0;
      var fechasSeparado=[];
      for(c=0;c < diasSelect ;c++){
        // console.log(datestartcopy.format("dddd, MMMM Do YYYY"));
        // console.log(datestartcopy.day());
        var dayNumber=datestartcopy.day() /*5 sabado y 6 domingo */
        if(dayNumber == 5 || dayNumber == 6){
          finSemana += 1
        }else{
          fechasSeparado.push(datestartcopy.format("MMMM D YYYY"));
        }
        datestartcopy.add(1, 'd');
      }
      // console.log(fechasSeparado);
      diasSelect = diasSelect - finSemana;

      this.setState((prevState, props) => {
        if(prevState.dias >= diasSelect){
          return {
            dias:((prevState.dias) - diasSelect),
            selectedEndDate: date,
            rangoFechas: selectedStartDate.format("MMMM D YYYY")+" - "+date.format("MMMM D YYYY"),
            fechasArr:fechasSeparado
          }
        }else{
          Toast.show({
            text: "Exediste tu limite de dias disponibles",
            buttonText: "Ok",
            position:'top',
            duration: 6000
          })
          return  {
              selectedStartDate: null,
              dias:prevState.diasOriginal,
              rangoFechas: null,
              fechasArr:[]
          }
        }
      }
    );


    } else {
      ////on STARDATE
      this.setState((prevState, props) => (
        {
          selectedStartDate: date,
          dias:prevState.diasOriginal,
          selectedEndDate: null,
        }
      ));
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _getSelectedRating(selected){
    console.log('selected')
    // console.log(selected)
  }

  _togglecalendar(){
    this.setState((prevState, props) => (
      {
        showcalendar: !prevState.showcalendar
      }
    ));
  }

  renderCalendar(selectedStartDate,selectedEndDate){
    const minDate = new Date(); // Today
    const maxDate = new Date(2024, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';
    return (
      <CalendarPicker
          startFromMonday={false}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#63a4ff"
          selectedDayColor="#1976d2"
          selectedDayTextColor="#004ba0"
          weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
          months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
          previousTitle="Anterior"
          nextTitle="Próximo"
          onDateChange={this.onDateChange}
        />
    )
  }
  render() {
    const { selectedStartDate, selectedEndDate,dias,rangoFechas,showcalendar,fechasArr } = this.state;
    const icons = ["arrow-dropdown","arrow-dropup"];


    const title = "titulo lorem ipsum multilinea paseo nota a otro titulo nota 1"
    const content = "Tu proximo pago es mañana."
    const { modalVisible,data } = this.state;
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
              <Text style={styles.title}>Tienes <Text style={styles.diaNumber}>{dias}</Text> dias</Text>
              <Text style={styles.titleMoney}>de vacaciones</Text>
            </View>
            <View style={{marginTop:40,alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>

            <View style={{height:40,flexDirection:'row',width:wp('70%'),alignItems:'center',justifyContent:'flex-start',alignSelf:'center'}}>
              <Text style={styles.stylelabels}>Elegir dias</Text>
            </View>
            <View style={{alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>
              <View style={{height:40,flexDirection:'row',width:wp('70%'),alignItems:'center',justifyContent:'space-between',alignSelf:'center'}}>
                <Text style={styles.stylelabels}>{rangoFechas != null ? rangoFechas:"- - -"}</Text>
                <TouchableOpacity style={{marginRight:20}} onPress={()=>{this._togglecalendar()}}>
                  <Icon name={icons[0]} style={{color:'black'}}></Icon>
                </TouchableOpacity>
              </View>
            <View style={{alignSelf:'stretch',height:1,backgroundColor:'#d0d0d0'}}></View>
            <View style={{flex:1,backgroundColor:'#f0f0f0'}}>
              {
                showcalendar == true && this.renderCalendar(selectedStartDate, selectedEndDate)
              }
              {

                selectedEndDate != null &&  <ButtonN onPress={()=>{this.setModalVisible(true)}} style={styles.buttonEnviar}><TextN>Solicitar</TextN></ButtonN>
              }

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
                  <View style={{flex:.6,alignSelf:'stretch',alignItems:'flex-end'}} >
                    <TouchableOpacity onPress={()=>{this.setModalVisible(false)}} style={{height:30,width:30,marginRight:15,marginTop:15}}>
                      <Icon name="close" stye={{color:'black'}}></Icon>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex:4,alignSelf:'stretch',alignItems:'center',justifyContent:'flex-start'}} >
                    <Text style={styles.modaltitle}>Solicitar vacaciones</Text>
                    <Image style={{resizeMode:'contain',maxHeight:250,maxWidth:250,marginTop:15,borderRadius:5}} source={require('../../../assets/img/cloud.png')}></Image>
                    <Text style={{width:250,color:'black',fontSize:15,marginTop:5, alignSelf:'center',textAlign:'left'}}>Dias </Text>
                    <Text style={{color:'black',fontSize:15,marginTop:5}}>{ rangoFechas } </Text>
                    <View style={{height:80,width:220}}>
                      <ScrollView style={{flex:1}}>
                        {
                          fechasArr.map( (item,i)=><Text key={"ftag"+i} style={{color:'black',fontSize:15,marginTop:5}}> { item } </Text>)
                        }
                      </ScrollView>
                    </View>
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
    fontSize:24,
    color:'black',
    marginTop:10,
    textAlign:'left'
  },
  titleMoney:{
    marginTop:2,
    fontSize:18,
    alignSelf:'center',
    color:'black',
    textAlign:'center'
  },
  diaNumber:{
    fontWeight:'bold'
  },
  titlesub:{
    padding:15,
    fontSize:16,
    color:'black',
    textAlign:'left'
  },
  content:{
    flex:1,
    alignSelf:'stretch'
  },
  textinst:{
    marginTop:10,
    fontSize:16,
    color:'black',
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
  stylelabels:{
    color:'black'
  },
  modaltitle:{
    color:'black',
    fontSize:18,
    fontWeight:'bold'
  }
});
