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
  FlatList
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
  Right
} from 'native-base';
import PropTypes from 'prop-types';

export default class TopHeader extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header style={styles.header}>
          <Left>
          <ButtonN transparent onPress={()=>{this.props.navigation.openDrawer()}}>
            <Icon name='menu' style={{color:'white'}}/>
          </ButtonN>
        </Left>
          <Body>
            <Text style={styles.headerTextStyle}>{this.props.title}</Text>
          </Body>
          <Right>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('notificaciones')}}>
              <Icon name='notifications' style={{color:'white'}}/>
            </TouchableOpacity>
          </Right>
        </Header>
      </React.Fragment>
    );
  }
}
TopHeader.propTypes = {
  title: PropTypes.string.isRequired
}

TopHeader.defaultProps = {
  title: "titulo head"
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor:'#0d47a1',
  },
  headerTextStyle:{
    color:"white",
    fontSize:hp('2.2%'),
    fontWeight:'bold'
  },
});
