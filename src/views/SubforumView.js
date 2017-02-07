'use strict'

import React from 'react'
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import SubforumStore from './stores/subforum_store'
import SubforumAction from './actions/subforum_action'
import SubforumCard from './SubforumCard'

// import PostAction from '../actions/post_action'
// import PostStore from '../stores/post_store'
import PostCard from './PostCard'



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

export default class extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			posts: [],
			subforum: this.props.parameters.subforum,
			showForm: true,
			debug: ""
		}
		this.onPosts = this.onPosts.bind(this)
		this.onSubforum = this.onSubforum.bind(this)
	}

	componentDidMount () {
		// this.unsubscribePosts = PostStore.listen(this.onPosts)
		this.unsubscribeSubforum = SubforumStore.listen(this.onSubforum)

		// PostAction.listPosts(this.props.params.id) // how to get the params id.
		// SubforumAction.viewSubforum(this.props.parameters.id)
		this.setState({
			debug: JSON.stringify(Object.keys(this.props))
		})
	}

	componentWillUnmount () {
		// this.unsubscribePosts()
		this.unsubscribeSubforum()
	}

	onSubforum (subforum) {
		this.setState({
			subforum
		})
	}

	onPosts (posts) {
		if (posts.constructor !== Array ) {
			posts = [posts].concat(this.state.posts)
		}
		this.setState({
			posts
		})
	}

	render () {
		const posts = this.state.posts.map((post) =>
			(<PostCard body={post.body} navigator={this.props.navigator} key={post._id["$oid"]} title={post.title} id={post._id["$oid"]} />)
		)
		return (
			<TouchableHighlight>
			<ScrollView style={styles.contentContainer}>
				<View style={styles.container}>
					<Text style={styles.welcome}>
						{this.state.subforum.name}
					</Text>
					<Text style={styles.welcome}>
						{ posts }
					</Text>
				</View>
			</ScrollView>
			</TouchableHighlight>
		)
	}
}