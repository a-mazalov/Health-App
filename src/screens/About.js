import { observer } from "mobx-react-lite";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { useStores } from "../store";


export const AboutScreen = observer(({ navigation }) => {
	const { authStore } = useStores();

	return (
		<View style={styles.container}>
			<Text style={styles.caption}>ФИО: </Text>
			<Text style={styles.caption}>Группа: </Text>
		</View>
	);
});

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
