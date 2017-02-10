import React from 'react'
import { AsyncStorage } from 'react-native'

export default {
	key: 'currentUser',

	async getHeaders () {
		const headers = await this.getItem(this.key)
		return headers
		? { Authorization: `Token ${JSON.parse(headers).auth_token}` }
		: {}
	},

	async handleLogin (value) {
		await this.setItem(this.key, JSON.stringify(value))
	},

	async handleLogout ()  {
		await this.setItem(this.key, "")
	},

	async checkLogin () {
		return JSON.parse(await this.getItem(this.key)) || false
	},

	async setItem (key, value) {
		try {
			await AsyncStorage.setItem(key, value);
		} catch (error) {
			this.showError(error)
		}
	},

	async getItem (key) {
		try {
			const value = await AsyncStorage.getItem(key);
			return value !== null ? value : "{}"
		} catch (error) {
			return {}
		}
	},

	// getItem (key) {
	// 	console.log(key, "this is the key")
	// 	(async (key) => {
	// 		try {
	// 			const value = await AsyncStorage.getItem(key);
	// 			console.log(value, "this is the value")
	// 			return value !== null ? value : "{}"
	// 		} catch (error) {
	// 			console.log("there was a problem get fail");
	// 			return {}
	// 		}
	// 	})(key)
	// },

	showError (error) {
		console.log("there was a problem error", error)
	}
}