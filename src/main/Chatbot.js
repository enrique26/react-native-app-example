/* @flow */

import React, { Component,lazy, Suspense } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
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
  Text as Textn,
  Icon,
  Body,
  Left,
  Right
} from 'native-base';
import { GiftedChat,Bubble,Composer,Send,InputToolbar} from "react-native-gifted-chat";
import dismissKeyboard from 'dismissKeyboard';
import { Dialogflow_V2 } from "react-native-dialogflow";
import uuid from 'uuid';
import {widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import estrellaDialog from '../../estrella-dialogflow';
import { NavigationEvents } from 'react-navigation';
export default class Chatbot extends Component {

  constructor(props){
    super(props);
    this.state={
      messages: [],
      user: {
        _id: '2',
        name: 'Chatbot',
        avatar: '../../assets/img/appicon_s.png',
      },
      valorReco:'',
      renderchat:false
    }
  }

  CustomAvatar=()=>{
    return(
      <Image source={require('../../assets/img/appicon_s.png')} style={{
        left:0,
        width: 40,
        height:40
      }} resizeMode="contain"
      onPress={(e)=>console.log(e)}/>
    )
  };


  renderBubble (props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#00A2B9'
          },
          left: {
            backgroundColor: '#742B88',
          }
        }}
        textStyle={{
            right: {
                color: 'white',
                fontFamily: 'DINPro',
            },
            left: {
              color: 'white',
              fontFamily: 'DINPro',
            }
        }}
      />
    )
  }
  renderSend(props) {
    return (
      <Send {...props} >
        <View style={{marginRight: 10, marginBottom: 5}}>
          <Image source={require('../../assets/img/sendbutton.png')} style={{
            height:40,
            width:40
          }} resizeMode="center"/>
        </View>
      </Send>
    );
  }
  handlerFocus(){
    console.log('@focused');
  }
  appendToChat(messages = [],navigate) {
    console.log('@appendToChat')
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }
  renderComposer(props){
    //  console.log('renderComposer props',props);
    return(
      <Composer
        {...props}
        placeholder={"Escribe tu consulta..."}
        textInputProps={{onFocus: this.handlerFocus.bind(this)}}
        />
    )
  }
  CustomInput(props){
    // const { started } = this.state;
    // if( started == ''){
      return(
        <View style={{flexDirection: 'row',borderColor:'black',borderWidth:1,justifyContent:'center',height:50}}>
          {/*//usar un custom composer para usar el mismo input de gifted chat*/}
          {this.renderComposer(props)}
          {/*//usar el render send para usar el custom sender junto el composer anterior para usarse dentro de un custom input*/}
          {this.renderSend(props)}
        </View>
      )
    // }
  }

  onSend(messages = [],navigate) {
    this.appendToChat(messages);
    console.log('@onsend')
    console.log(messages)

    this.sendQuerylib2(messages[0].text,navigate);
    this.setState({
      valorReco:''
    })
  }

  sendQuerylib2(texto,navigate){
      Dialogflow_V2.requestQuery(texto,
        response => {
          console.log('@QUERY-dialogV2');
          console.log(response)
          this.appendToChat([{
            _id: uuid.v4().toString(),
            text: response.queryResult.fulfillmentText === '' ? '¿puedes repetirlo?' : response.queryResult.fulfillmentText,
            createdAt: new Date(),
            user: this.state.user,
          }]);


          if(response.queryResult.fulfillmentMessages && response.queryResult.fulfillmentMessages.length > 0 && response.queryResult.fulfillmentMessages[0].payload!= undefined){
            dismissKeyboard();
            ///ocultar chat
            this.setState({
              chatShow:false
            });
            // alert(response.result.fulfillment.messages[0].payload.mobileAction);
            if(response.queryResult.fulfillmentMessages[0].payload.mobileAction == 'prestamos'){
              var payload=response.queryResult.fulfillmentMessages[0].payload;
              console.log('@payload-')
              console.log(JSON.stringify(payload))

              setTimeout(function (){
                navigate('prestamoview')
              },1000);
            }else if(response.queryResult.fulfillmentMessages[0].payload.mobileAction == 'quejas'){
              var payload=response.queryResult.fulfillmentMessages[0].payload;
              console.log('@payload-')
              console.log(JSON.stringify(payload))

              setTimeout(function (){
                navigate('quejas')
              },1000);
            }else if(response.queryResult.fulfillmentMessages[0].payload.mobileAction == 'vacaciones'){

              var payload=response.queryResult.fulfillmentMessages[0].payload;
              console.log('@payload-')
              console.log(JSON.stringify(payload))

              setTimeout(function (){
                navigate('vacacionesview',{'data':payload})
              },1000);

            }
          }else{
            console.log('@excepcions');
            this.selectContent({content:"",data:{}})
          }
        },
        error=>console.log(error));
  }

  selectContent(reponse){
    console.log('@selectContent');
    console.log(reponse);
    console.log(reponse.content);
    // this.setState({
    //   content:reponse.content,
    //   contentData:reponse.data
    // })
  }

  componentDidMount(){

    Dialogflow_V2.setConfiguration(
        estrellaDialog.client_email,
        estrellaDialog.private_key,
        Dialogflow_V2.LANG_SPANISH,
        estrellaDialog.project_id
    );



    // this.requestAllPermission();
    // console.log(this._giftedChatRef.props)
    this.setState({
      messages: [
        {
          _id: '2',
          text: 'Hola, ¿en qué puedo ayudarte?',
          createdAt: new Date(),
          user: this.state.user
        },
      ],
      renderchat:true
    });
  }

  _renderchat(){
      const { messages,valorReco } = this.state;
      return(
        <GiftedChat
           ref={this.handleRef}
           messages={messages.length > 0 ? messages : []}
           onSend={messages => this.onSend(messages,this.props.navigation.navigate.bind(this))}
           user={{
             _id: '1',
           }}
           renderBubble={this.renderBubble}
           renderAvatar={(props: any) => this.CustomAvatar(props)}
           placeholder={"Escribe tu mensaje"}
           // renderInputToolbar={(props: any) => this.CustomInput(props)}
           textInputProps={{height:45}}
           renderSend={(props: any) => this.renderSend(props)}
           keyboardShouldPersistTaps='never'
           text={valorReco}
           onInputTextChanged={text => this.setState({ valorReco: text })}
         />
      )
  }
  _willfocus(payload){
    console.log('will focus',payload)
    this.setState({
      messages: [
        {
          _id: '2',
          text: 'Hola, ¿en qué puedo ayudarte?',
          createdAt: new Date(),
          user: this.state.user
        },
      ],
      renderchat:true
    });
  }
  render() {
    const { messages,valorReco,renderchat } = this.state;

    return (
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={payload => this._willfocus(payload)}
          onDidFocus={payload => console.log('did focus',payload)}
          onWillBlur={payload => console.log('will blur',payload)}
          onDidBlur={payload => console.log('did blur',payload)}
        />
        <Header style={styles.header}>
          <Left>
          <ButtonN transparent onPress={()=>{this.props.navigation.goBack()}}>
            <Icon name="arrow-back" style={{color:'white'}}></Icon>
          </ButtonN>
        </Left>
          <Body style={{justifyContent:'center',alignSelf:'stretch'}}>
            <Text style={styles.headerTextStyle}>Chatbot</Text>
          </Body>
          <Right style={{flex:.3,height:20}}/>
        </Header>
        <View style={{flex:1}}>
            {
              renderchat ?  this._renderchat():<ActivityIndicator size="large" color="#0000ff" />
            }
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
    fontWeight:'bold',
    alignSelf:'center'
  },
  fabButton:{
    position: 'absolute',
    margin: 15,
    right: 10,
    bottom: 10,
    backgroundColor:'#001064'
  }
});
