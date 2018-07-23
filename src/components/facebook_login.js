// //React Components
// import React, { Component } from 'react';
// import {AppRegistry, FlatList, StyleSheet, 
//   Platform, Text, 
//   View, Image, Alert, 
//   TouchableHighlight, 
//   Dimensions, TextInput, Button} from 'react-native';

// //Login Components
// import firebase from 'react-native-firebase';
// import {AccessToken, LoginManager, LoginButton} from 'react-native-fbsdk';
// const FBSDK = require('react-native-fbsdk');
// const {
//   GraphRequest,
//   GraphRequestManager,
// } = FBSDK;
// import Facebook_Login from './src/components/facebook_login'

// export default class Facebook_Login extends Component {
//   state = {
//     isAuthenticated:false,
//     typedEmail:'',
//     typedPassword: '',
//     user: null,
//     loading: false,
//     picture:''
//   }

//   componentWillMount(){
//     console.log('this.state.user componentWillMount',this.state.user)
// //     this.unsubscriber = firebase.auth().onAuthStateChanged((changeUser)=>{
// //       console.log(`changed user : ${JSON.stringify(changedUser.toJSON())}`)
//     }
  
//   componentDidMount(){
//     console.log('this.state.user compononetDidMount',this.state.user)
//     try {
//       const currentAccessToken = AccessToken.getCurrentAccessToken()
    
//       const graphRequest = new GraphRequest('/me', {
//         accessToken: currentAccessToken.accessToken,
//         parameters: {
//           fields: {
//             string: 'picture.type(large)',
//           },
//         },
//       }, (error, result) => {
//         if (error) {
//           console.log(error)
//         } else {
//           console.log('HERE IS THE RESULT',result)
//           this.setState({
//             picture: result.picture.data.url,
//           })
//           console.log('state !!!!!!!!!!!!!!!',this.state)
//         }
//       })
    
//       new GraphRequestManager().addRequest(graphRequest).start()
//     } catch (error) {
//       console.error(error)
//     }
    
    
// //     this.unsubscriber = firebase.auth().onAuthStateChanged((changeUser)=>{
// //       console.log(`changed user : ${JSON.stringify(changedUser.toJSON())}`)
//     }
// //   }
// // componentWillUnmount(){
// //   this.unsubscriber = firebase.auth()
// // }

// onLoginFacebook = () => {
//   this.setState({loading:true})
//   LoginManager
//     .logInWithReadPermissions(['public_profile', 'email'])
//     .then((result) => {
//       console.log('result ==========', result)
//       console.log(`Login Success with permission: ${result.grantedPermissions.toString()}`)
//       return AccessToken.getCurrentAccessToken();

//     })
//     .then(data => {
//       console.log('data ==========',data)
//       const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
      
//       return firebase.auth().signInWithCredential(credential)
//     })
//     .then((currentUser)=>{
      
//       console.log(`Facebook Login with user: ${JSON.stringify(currentUser.toJSON())}`)
//       this.setState({user:currentUser})
//       console.log('this.state.user ===========',this.state.user)
//       this.setState({loading:false})

//     })
//     .catch((error)=>{
//       console.log(`Facebook Login Failed ${error}`)
//     })
// }

//   render() {
//     return (
//       <React.Fragment>
//         <View style={{flex: 1, marginTop: Platform.OS ==='ios' ? 34 :0,justifyContent:'center',alignItems:'center', alignContent:'center'}}>
//         <Image source={require('./two-girls-around-phone.jpg')}/>
//         </View>
//         <View style={{flex: 1, marginTop: Platform.OS ==='ios' ? 34 :0,justifyContent:'center',alignItems:'center', alignContent:'center'}}>
//           <Text style={{color: 'gray', textAlign:'center'}}>By Tapping Login, you agree to our Terms and Privacy Policy</Text>
//           <Button title='Facebook Login' containerStyle={{
//             padding: 10,
//             width:150,
//             margin:20,
//             borderRadius: 4,
//             backgroundColor: 'rgb(73,104,173)'
//           }}
//           style={{fontSize: 18,color:'white'}}
//           onPress={this.onLoginFacebook}/>
//           </View>
//           </React.Fragment>
//       );
//     }
//     )
//   }
// };
// export default Facebook_Login
