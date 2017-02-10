import React, { Component } from 'react';

import config from '../config'
import SubforumAPI from "../shared/utils/subforum"
import HomePageView from "./views/HomePageView"
import SubforumView from "./views/SubforumView"
import LoginView from "./views/LoginView"
import NewSubforumView from "./views/NewSubforumView"

import SubforumCard from './cards/SubforumCard'
import ForumBar from './cards/ForumBar'

import UserAction from '../shared/actions/user_action'
import UserStore from '../shared/stores/user_store'

import { guid } from '../utils/helpers'

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
    this.state = {
      authUser: {}
    }
    this.onLogin = this.onLogin.bind(this)
    this.renderView = this.renderView.bind(this)
    this.handleShowLoginView = this.handleShowLoginView.bind(this)
    this.handleShowNewSubforumForm = this.handleShowNewSubforumForm.bind(this)
  }

  renderView (route, navigator) {
    this.navigator = navigator;
    switch (route.id) {
      case "HomePageView" :
        console.log(route.id, "route id")
        return (
          <HomePageView navigator={navigator} uid={guid()} />
        )
      case "NewSubforumView" :
        return (
          <NewSubforumView navigator={navigator} />
        )
      case "LoginView" :
        return (
          <LoginView navigator={navigator} />
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

  componentDidMount() {
    this.unsubscribe = UserStore.listen(this.onLogin)
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onLogin (authUser) {
    this.setState({
      authUser
    })

    this.navigator.replace({
      id: "HomePageView"
    })
  }

  handleShowNewSubforumForm (navigator) {
      navigator.replace({
        id: "NewSubforumView"
      })
  }

  handleShowLoginView (navigator) {
    navigator.replace({
      id: "LoginView"
    })
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
      },
      {
        id: "LoginView"
      }
    ]

    return (
      <Navigator
        initialRoute={routes[0]}
        routeStack={[]}
        renderScene={this.renderView}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                const authStatus = (this.state.authUser.username === undefined)
                  ? (<TouchableHighlight onPress={this.handleShowLoginView.bind(this, navigator)}><Text>Login</Text></TouchableHighlight>)
                  : (<Text>{ this.state.authUser.username }</Text>);
                return authStatus;
              },
              Title: (route, navigator, index, navState) => { return (<Text>Roy</Text>); },
              RightButton: (route, navigator, index, navState) => { return (<TouchableHighlight onPress={this.handleShowNewSubforumForm.bind(this, navigator)}><Text>New Subforum</Text></TouchableHighlight>); }
            }}
            style={{backgroundColor: 'gray'}}
          />}
      />
    );
  }
}
