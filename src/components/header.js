import React from 'react';
import {Text, View} from 'react-native'


const Header = () => {
  const {textStyle,viewStyle} = styles
  return(
  <View style={viewStyle}>
  <Text style={textStyle}>Settings</Text>
  <Text style={textStyle}>Profile</Text>
  <Text style={textStyle}>Current Matches</Text>
  </View>
  )
  
}
const styles = {
  viewStyle:{
    backgroundColor: '#F8F8F8',
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .3,
    elevation:2,
    position: 'relative'
  },
  textStyle:{
    fontSize: 20

  }
}

export default Header;
