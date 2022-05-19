import { StyleSheet, Text, View } from "react-native";

export function MusicScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.caption}>Music Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#283334",
		color: "white",
		padding: 16,
	},
	btn: {
		backgroundColor: "white",
		height: 48,
		justifyContent: "center",
		alignItems: "center",
		
		borderRadius: 8
	},	
	caption: {
		color: "white",
		fontSize: 18,
	}
});