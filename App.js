/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Header from './header'
import AlbumList from './AlbumList'



export default class App extends Component {

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'Albums'} />
        <AlbumList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  
});
