/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import SubforumCard from '../cards/SubforumCard'

import SubforumAction from '../../shared/actions/subforum_action'
import SubforumStore from '../../shared/stores/subforum_store'

import SubforumAPI from "../../shared/utils/subforum"

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subforums: [],
      err: {}
    }
    this.onSubforums = this.onSubforums.bind(this)
  }

  componentDidMount() {
    console.log("component did mount")
    this.unsubscribe = SubforumStore.listen(this.onSubforums)
    SubforumAction.listSubforums()

    // SubforumAPI.all()
    // .then((subforums) => {
    //   this.setState({
    //     subforums
    //   })
    // })
    // .catch((err) => {
    //   this.setState({
    //     err
    //   })
    // })
  }

  // componentWillUpdate(nextProps, nextState) {
  //   // console.log("compoennt wil mount")
  //   // this.unsubscribe = SubforumStore.listen(this.onSubforums)
  //   // SubforumAction.listSubforums()
    
  //   console.log(nextProps.uid, nextState.uid, "here", "compoennt wil update")
  //   if (nextProps.uid !== this.props.uid) { // check whehter the current props's uid is different from theat of the previous props uid.
  //     SubforumAction.listSubforums()
  //   }
  // }

  onSubforums (subforums) {
    console.log("checking the state of the app", subforums.length, "this is the lengt hof the subforums")
    this.setState({
      subforums
    })
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render() {
    const subforums = this.state.subforums.length > 0 ? this.state.subforums.map((subforum) => {
      return <SubforumCard navigator={this.props.navigator} key={subforum._id["$oid"]} subforum={subforum} />
    }) : null;
    return (
      <ScrollView style={styles.contentContainer}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Roy Forums
          </Text>
          { subforums }
        </View>
      </ScrollView>
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
