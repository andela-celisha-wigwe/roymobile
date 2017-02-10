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

import SubforumStore from '../../shared/stores/subforum_store'
import SubforumAction from '../../shared/actions/subforum_action'

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
		this.onCreateSubforum = this.onCreateSubforum.bind(this)
	}

	async handleCreateSubforum (event) {
		await SubforumAction.createSubforum(this.state)
		// this.props.navigator.replace({
		// 	id: "HomePageView"
		// })

	}

	componentDidMount() { 
		// using this because the handleCreateSubforum (await) is not finishing on time
		// and the next (function -> to list all subforums) is being called, but without 
		// the newly created subforum.
		this.unsubscribe = SubforumStore.listen(this.onCreateSubforum)
	}

	componentWillUnmount() {
		this.unsubscribe()
	}

	onCreateSubforum () {
		this.props.navigator.replace({
			id: "HomePageView"
		})
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