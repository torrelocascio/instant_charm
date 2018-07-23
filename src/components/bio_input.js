import React, { Component } from 'react';
import {View,Text,TextInput} from 'react-native'

const Bio_Input = (props) => {
    return (
      <View>
        <Text>BIO</Text>
      <TextInput 
      placeholder={'Dont be Shy, show some personality!'}
      value={props.value}
      onChangeText={props.onChangeText}
      style={{height:40,width:'100%'}}></TextInput>
      </View>
    )
  }


export default Bio_Input
