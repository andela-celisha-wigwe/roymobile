import React, { Component } from 'react'
import { AppRegistry, StyleSheet, TouchableHighlight, Text, View } from 'react-native'

import styles from './styles'

export default class SubforumCard extends Component {

	cutDescription (text, limit = 100) {
		return text.length > limit ? `${text.substr(0, limit)}...` : text
	}

	constructor (props) {
		super(props);
		this.handleShowSubforum = this.handleShowSubforum.bind(this)
	}

	handleShowSubforum (event) {
		console.log("I am here touch", this.props.subforum)
		this.props.navigator.replace({
			id: "SubforumView",
			params: {
				id: this.props.subforum._id["$oid"],
				subforum: this.props.subforum
			}
		})
	}

	render () {
		return (
			<TouchableHighlight onPress={this.handleShowSubforum}>
				<View style={styles.subforumCardView}>
					<View style={styles.subforumCardNameView}>
						<Text style={styles.subforumCardNameText}>
							{ this.props.subforum.name }
						</Text>
					</View>
					<Text  style={styles.subforumCardDescription}>
						{ this.cutDescription(this.props.subforum.description) }
					</Text>
				</View>
			</TouchableHighlight>
		)
	}

}