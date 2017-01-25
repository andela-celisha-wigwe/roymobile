/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import SubforumCard from './src/SubforumCard'

import config from './config'
import SubforumAPI from "./utils/subforum"

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class roymobile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subforums: [],
      err: {}
    }
  }

  componentDidMount() {
    SubforumAPI.all()
    .then((subforums) => {
      this.setState({
        subforums
      })
    })
    .catch((err) => {
      this.setState({
        err
      })
    })
  }

  render() {
    const subforums = this.state.subforums.length > 0 ? this.state.subforums.map((subforum) => {
      return <SubforumCard key={subforum._id["$oid"]} subforum={subforum} />
    }) : null;
    return (
      <StyleSheet contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          { subforums }
        </View>
      </StyleSheet>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('roymobile', () => roymobile);
