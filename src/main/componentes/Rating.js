/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

export default class Rating extends Component {


  constructor(props){
    super(props);
    this.state={
      faces:[
        {face:"angry",selected:0,image:require('../../../assets/img/faces/angry.png')},
        {face:"bad",selected:0,image:require('../../../assets/img/faces/angry.png')},
        {face:"serious",selected:0,image:require('../../../assets/img/faces/indifferent.png')},
        {face:"smiley",selected:0,image:require('../../../assets/img/faces/good.png')},
        {face:"happy",selected:0,image:require('../../../assets/img/faces/good.png')}]
    }
  }

  _getSelected = (selected) => {
      this.props.getSelected(selected);
  };

  _onSelect(index){
    const { faces } = this.state;
    // let { getSelected } = this.props;

    let updateFaces=faces;
    for(var i=0; i < faces.length;i++ ){
      faces[i].selected=0;
    }
    if(index < faces.length){
      faces[index].selected=1;
      this._getSelected(faces[index]);
    }
    // console.log(updateFaces);

    this.setState({faces:updateFaces});

  }

  render() {
    const { faces } =  this.state;

    // console.log(faces)
    return (
      <View style={ styles.container }>
        {
          faces.map( (item,i) =>
          <TouchableOpacity key={'f'+i} onPress={()=>{this._onSelect(i)}} >
            <View style={item.selected == 1 ? styles.imageSelected:styles.imageUnSelected}>
              <Image key={'fI'+i}
      				style={styles.image}
      				source={item.image}
      				/>
            </View>

          </TouchableOpacity> )
        }

			</View>
    );
  }
}


Rating.propTypes = {
  getSelected: PropTypes.func.isRequired
}

Rating.defaultProps = {
  getSelected: (face) => { console.log(face) }
}


const styles = StyleSheet.create({
 container: {
    // backgroundColor: "#FF00FF",
    flexDirection: 'row',
    justifyContent:'space-evenly'
   },
   image: {
    width: 40,
    height: 40,
    backgroundColor:'white',
    borderRadius:20,
  },
  imageUnSelected:{
    borderWidth:5,
    borderRadius:22,
    backgroundColor:'transparent',
    borderColor:'transparent'
  },
  imageSelected: {
    borderWidth:5,
    borderRadius:22,
    backgroundColor:'gray',
    borderColor:'gray'
  }
});
