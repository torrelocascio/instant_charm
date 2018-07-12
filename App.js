/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Platform, Text, 
  View, Image, Alert, 
  TouchableHighlight, 
  Dimensions, TextInput} from 'react-native';
import firebase from 'react-native-firebase';
import {AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk';
import {Button} from 'react-native'


export default class App extends Component{
  constructor(props){
    super(props);
    this.unsubscriber = null
    this.state = {
      isAuthenticated: false,
      typedEmail: '',
      typedPassword: '',
      user:null
    }
  }
//   componentDidMount(){
//     this.unsubscriber = firebase.auth().onAuthStateChanged((changeUser)=>{
//       console.log(`changed user : ${JSON.stringify(changedUser.toJSON())}`)
//     })
//   }
// componentWillUnmount(){
//   this.unsubscriber = firebase.auth()
// }

onLoginFacebook = () => {
  LoginManager
    .logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      // console.log(`Login Success with permission: ${result.grantedPermissions.toString()}`)
      return AccessToken.getCurrentAccessToken();

    })
    .then(data => {
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
      return firebase.auth().signInWithCredential(credential)
    })
    .then((currentUser)=>{
      // console.log(`Facebook Login with user: ${JSON.stringify(currentUser.toJSON())}`)
    })
    .catch((error)=>{
      // console.log(`Facebook Login Failed ${error}`)
    })
}

  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS ==='ios' ? 34 :0}}>
        <Text style={{color: 'red'}}>Test React Native FireBase</Text>
        <Button title='Wow' containerStyle={{
          padding: 10,
          width:150,
          margin:20,
          borderRadius: 4,
          backgroundColor: 'rgb(73,104,173)'
        }}
        style={{fontSize: 18,color:'white'}}
        onPress={this.onLoginFacebook}>Login Facebook</Button>
        </View>
    );
  }
}
