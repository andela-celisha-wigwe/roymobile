'use strict'

import React, { Component } from 'react'
import {
	Text,
	TouchableHighlight,
	Navigator
} from 'react-native'

export default class extends Component {

	constructor(props) {
		super(props);
		this.handleShowLoginView = this.handleShowLoginView.bind(this)
		this.handleShowNewSubforumForm = this.handleShowNewSubforumForm.bind(this)
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

	render() {
		return (
			<Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => { return (<TouchableHighlight onPress={this.handleShowLoginView.bind(this, navigator)}><Text>Login</Text></TouchableHighlight>); },
              Title: (route, navigator, index, navState) => { return (<Text>Roy</Text>); },
              RightButton: (route, navigator, index, navState) => { return (<TouchableHighlight onPress={this.handleShowNewSubforumForm.bind(this, navigator)}><Text>New Subforum</Text></TouchableHighlight>); }
            }}
            style={{backgroundColor: 'gray'}}
           />
		)
	}
}