import React, { Component } from 'react';

import SubforumCard from './SubforumCard'

import config from '../config'
import SubforumAPI from "../utils/subforum"
import HomePageView from "./HomePageView"
import SubforumView from "./SubforumView"
import NewSubforumView from "./NewSubforumView"

import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TouchableHighlight,
  View,
  ScrollView
} from 'react-native';

export default class Main extends Component {

  constructor (props) {
    super(props);
    this.navBar = this.navBar.bind(this)
    this.renderView = this.renderView.bind(this)
    this.handleShowNewSubforumForm = this.handleShowNewSubforumForm.bind(this)
  }

  renderView (route, navigator) {
    console.log("I am here render")
    
    switch (route.id) {
      case "HomePageView" :
        return (
          <HomePageView navigator={navigator} />
        )
      case "NewSubforumView" :
        return (
          <NewSubforumView navigator={navigator} />
        )
      case "SubforumView" :
        return (
          <SubforumView navigator={navigator} parameters={route.params}/>
        )
      default :
        return (
          <View>
            <Text>
              Wrong Route
            </Text>
          </View>
        )
    }
  }

  handleShowNewSubforumForm (navigator) {
    console.log(navigator)
    navigator.replace({
      id: "NewSubforumView"
    })
  }

  navBar () {
    return {
      LeftButton: (route, navigator, index, navState) => { return (<Text>Cancel</Text>); },
      Title: (route, navigator, index, navState) => { return (<Text>Awesome Nav Bar</Text>); },
      // RightButton: (route, navigator, index, navState) => { return (<Text onPress={this.handleShowNewSubforumForm.bind(this, navigator)}>New Subforum</Text>); }
    }
  }

  render () {
    const routes = [
      {
        id: "HomePageView",
      },
      {
        id: "SubforumView"
      },
      {
        id: "NewSubforumView"
      }
    ]

    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderView}
        navigationBar={
           <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => { return (<Text>Cancel</Text>); },
              Title: (route, navigator, index, navState) => { return (<Text>Awesome Nav Bar</Text>); },
              RightButton: (route, navigator, index, navState) => { return (<TouchableHighlight onPress={this.handleShowNewSubforumForm.bind(this, navigator)}><Text>New Subforum</Text></TouchableHighlight>); }
            }}
            style={{backgroundColor: 'gray'}}
           />
        }
      />
    );
  }
}
