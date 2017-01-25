import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

import styles from './styles'

export default class SubforumCard extends Component {

	cutDescription (text, limit = 100) {
		return text.length > limit ? `${text.substr(0, limit)}...` : text
	}

	render () {
		return (
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
		)
	}

}