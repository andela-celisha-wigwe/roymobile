import React from 'react'
import {AsyncStorage} from 'react-native'

export default {
	this.key = 'currentUser',

	getItem: (key = this.key) => {
		// get the local storage for the current app;
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				// We have data!!
				console.log(value);
				return value
			}
		} catch (error) {
			// Error retrieving data
			console.log("there was a problem");
			return {}
		}
	},

	setItem: (key = this.key) => {
		// get the local storage for the current app;
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				// We have data!!
				console.log(value);
				return value
			}
		} catch (error) {
			console.log("there was a problem");
			// Error retrieving data
			return {}
		}
	}
}