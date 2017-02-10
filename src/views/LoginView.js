'use strick'

import React, { Component } from 'react'

import {
	AppRegistry,
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableHighlight,
	ScrollView,
	Button
} from 'react-native'

import styles from '../styles/styles'

import UserStore from '../../shared/stores/user_store'
import UserAction from '../../shared/actions/user_action'

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "forumadmin",
			password: "forumadmin"
		}

		this.setUsername = this.setUsername.bind(this)
		this.setPassword = this.setPassword.bind(this)
		this.handleLogin = this.handleLogin.bind(this)
	}

	setUsername (username) {
		this.setState({
			username
		})
	}

	setPassword (password) {
		this.setState({
			password
		})
	}

	handleLogin () {
		const { username, password } = this.state
		UserAction.userLogin({username, password})
	}

	render() {
		return (
			<ScrollView>
				<Text>
					Login
				</Text>

				<TextInput
					style={styles.TextInput}
					onChangeText={this.setUsername}
					value={this.state.username}
				/>

				<TextInput
					style={styles.TextInput}
					onChangeText={this.setPassword}
					value={this.state.password}
				/>

				<Button
					onPress={this.handleLogin}
					title="Login"
					color="#841584"
					accessibilityLabel="Login to application"
				/>
			</ScrollView>
		)
	}
}