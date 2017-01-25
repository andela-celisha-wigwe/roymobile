import { AppRegistry, PixelRatio, StyleSheet, Text, View } from 'react-native'

const em = function (px, fontSize = 16){
    return px/fontSize;
}

export default StyleSheet.create({
	subforumCardView: {
	    paddingVertical: em(3),
	    paddingHorizontal: 0,
	    width: PixelRatio.getPixelSizeForLayoutSize(150),
	    margin: 0,
	    flexDirection: "column",
	    alignItems: "center",
	    height: PixelRatio.getPixelSizeForLayoutSize(50)
	},

	subforumCardNameView: {
		backgroundColor: "#009099"
	},

	subforumCardNameText: {
		fontWeight: "bold",
		color: "#ffffff"
	},

	subforumCardDescription: {
		// textAlign: "justify"
	}
})