/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//React Components
import React, {Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, 
  Platform, Text, 
  View, Image, Alert, 
  TouchableHighlight, TouchableOpacity,
  Dimensions, TextInput, Button} from 'react-native';

//FireBase/Login
import firebase from 'react-native-firebase';
import {AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk';
const FBSDK = require('react-native-fbsdk');
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;
import Facebook_Login from './src/components/facebook_login'

//Custom Components
import Header from './src/components/header';
import Spinner from 'react-native-loading-spinner-overlay';
import Bio_Input from './src/components/bio_input';



export default class App extends Component{


  state = {
    isAuthenticated:false,
    typedEmail:'',
    typedPassword: '',
    user: null,
    loading: false,
    picture:'',
    bio: ''
  }

  // componentWillMount(){
  //   firebase.auth().onAuthStateChanged((user)=>{
  //     this.setState({user: user
  //     })
  //   })
  //   console.log('this.state.user componentWillMount',this.state.user)
  //   this.unsubscriber = firebase.auth().onAuthStateChanged((changeUser)=>{
  //     console.log(`changed user : ${JSON.stringify(changedUser.toJSON())}`)
    
  
  componentDidMount(){
    console.log('this.state.user compononetDidMount',this.state.user)
    try {
      const currentAccessToken = AccessToken.getCurrentAccessToken()
    
      const graphRequest = new GraphRequest('/me', {
        accessToken: currentAccessToken.accessToken,
        parameters: {
          fields: {
            string: 'picture.type(large)',
          },
        },
      }, (error, result) => {
        if (error) {
          console.log(error)
        } else {
          console.log('HERE IS THE RESULT',result)
          this.setState({
            picture: result.picture.data.url,
          })
          console.log('state !!!!!!!!!!!!!!!',this.state)
        }
      })
    
      new GraphRequestManager().addRequest(graphRequest).start()
    } catch (error) {
      console.error(error)
    }
    
    
    // this.unsubscriber = firebase.auth().onAuthStateChanged((changeUser)=>{
    //   console.log(`changed user : ${JSON.stringify(changedUser.toJSON())}`)
    // }
  }
// componentWillUnmount(){
//   this.unsubscriber = firebase.auth()
// }

onLoginFacebook = () => {
  this.setState({loading:true})
  LoginManager
    .logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => {
      console.log('result ==========', result)
      console.log(`Login Success with permission: ${result.grantedPermissions.toString()}`)
      return AccessToken.getCurrentAccessToken();

    })
    .then(data => {
      console.log('data ==========',data)
      const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
      
      return firebase.auth().signInWithCredential(credential)
    })
    .then((currentUser)=>{
      
      console.log(`Facebook Login with user: ${JSON.stringify(currentUser.toJSON())}`)
      this.setState({user:currentUser})
      console.log('this.state.user ===========',this.state.user)
      this.setState({loading:false})

    })
    .catch((error)=>{
      console.log(`Facebook Login Failed ${error}`)
    })
}

logout = () => {
  this.setState({user: null})
}

  render() {
if(!this.state.loading){
    if(!this.state.user){
      return (
    
 

        <React.Fragment>
        <View style={{flex: 1, marginTop: Platform.OS ==='ios' ? 34 :0,justifyContent:'center',alignItems:'center', alignContent:'center'}}>
        <Image source={require('./two-girls-around-phone.jpg')}/>
        </View>
        <View style={{flex: 1, marginTop: Platform.OS ==='ios' ? 34 :0,justifyContent:'center',alignItems:'center', alignContent:'center'}}>
          <Text style={{color: 'gray', textAlign:'center'}}>By Tapping Login, you agree to our Terms and Privacy Policy</Text>
          <Button title='Facebook Login' containerStyle={{
            padding: 10,
            width:150,
            margin:20,
            borderRadius: 4,
            backgroundColor: 'rgb(73,104,173)'
          }}
          style={{fontSize: 18,color:'white'}}
          onPress={this.onLoginFacebook}/>
          </View>
          </React.Fragment>
      );
    }

    if(this.state.user){
    return (
      (
    
        <React.Fragment>
        <Header/>
        <View style={{alignItems: 'center', justifyContent:'center'}}>
          
          <Text>{this.state.user.displayName}</Text>
          <Image 
          style={{width:200, height:200}}
          source={require('./profile-placeholder.png')}
          defaultSource={this.state.user.picture}/>
          <Text>VPX Sports</Text>
          <Text>Fort Lauderdale, FL</Text>
          <Text>The Next Swiping Time For FaceTime In Your Area is In X Minutes</Text>
          <Text>In The meantime, you can edit your profile, or talk to existing matches.</Text>
          <Bio_Input
          value={this.state.bio}
          onChangeText={bio => this.setState({bio:bio})}/>
          <View>
            <TouchableOpacity onPress={this.logout}><Text>Logout</Text></TouchableOpacity>
          </View>
        </View>
        </React.Fragment>
      )
 
    );
    }
  }
  return (
    <View style={{ flex: 1 }}>
    <Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
  </View>
  )
  }
}

