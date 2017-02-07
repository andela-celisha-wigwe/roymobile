'use strict'

import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Button,
} from 'react-native';

import SubforumStore from './stores/subforum_store'
import SubforumAction from './actions/subforum_action'

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

export default class extends Component {
	constructor (props) {
		super(props)
		this.state = {
			name: "",
			description: ""
		}
		this.handleCreateSubforum = this.handleCreateSubforum.bind(this)
	}

	handleCreateSubforum (event) {
		console.log(this.state, "hihihihihi")
		SubforumAction.createSubforum(this.state)
	}

	render () {
		return (
			<ScrollView style={styles.contentContainer}>
				<View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
					<TextInput
						style={{height: 80, width: 300, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(name) => this.setState({name})}
						value={this.state.name}
					/>
					<TextInput
						style={{height: 80, width: 300, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(description) => this.setState({description})}
						value={this.state.description}
					/>
					<Button
						onPress={this.handleCreateSubforum}
						title="Save"
						color="#841584"
						accessibilityLabel="Save subforum"
					/>
				</View>
			</ScrollView>
		)
	}
}