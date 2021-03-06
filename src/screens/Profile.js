import { observer } from "mobx-react-lite";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { useStores } from "../store";


export const ProfileScreen = observer(({ navigation }) => {
	const { authStore } = useStores();

	return (
		<View style={styles.container}>
			<Text style={styles.caption}>Name: {authStore.user.name }</Text>
			<Text style={styles.caption}>Email: {authStore.user.email }</Text>
			<Pressable style={[styles.btn, { marginTop: 16 }]} onPress={() => navigation.navigate("About") }>
				<Text>About the developer </Text>
			</Pressable>


			<View style={{ flex: 1, justifyContent: "flex-end" }}>
				<Pressable style={styles.btn} onPress={() => authStore.reset() }>
					<Text style={{color: "red",}}>Выйти</Text>
				</Pressable>
			</View>
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
