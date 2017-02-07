'use strict'

import React from 'react'
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
// import FlatButton from 'material-ui/FlatButton'

export default class extends React.Component {

  constructor (props) {
    super(props);
    this.handleShowPost = this.handleShowPost.bind(this)
  }

  handleShowPost () {
    // route to post view.
  }

  render () {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome} onClick={this.handleShowPost}>
            {this.props.title}
          </Text>
        </View>
    );
  }
}