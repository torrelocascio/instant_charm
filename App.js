/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';
import firebase from 'react-native-firebase'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS ==='ios' ? 34 :0}}>
        <Text style={{color: 'red'}}>Test React Native FireBase</Text>
        </View>
    );
  }
}
