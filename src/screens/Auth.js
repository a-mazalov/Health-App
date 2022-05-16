import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Image,
	TextInput,
} from "react-native";
import Loader from "../components/Icons/Loader";
import Logo from "../components/Icons/Logo";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { AuthStore } from "../store/auth";

export const AuthScreen = observer(({ navigation }) => {
	const [authStore] = useState(() => new AuthStore());

	function onChangeText(value) {
		authStore.email = value;
	}

	return (
		<View style={{ flex: 1, padding: 16, backgroundColor: "#253334" }}>
			<View style={{ flex: 1, justifyContent: "flex-start", marginTop: 32 }}>
				<Logo fill="white" />
				<Text
					style={{
						fontSize: 24,
						fontWeight: 600,
						marginTop: 24,
						color: "white",
					}}
				>
					Sign In {authStore.value}
					email {JSON.stringify(authStore.isValidEmail)}
				</Text>
			</View>
			<View style={{ flex: 1 }}>
				<TextInput
					style={styles.input}
					onChangeText={(value) => authStore.handleEmail(value)}
					placeholder="Email"
				/>
				<TextInput
					style={styles.input}
					onChangeText={(value) => authStore.handlePassword(value)}
					placeholder="Password"
				/>
			</View>
			<View style={{ flex: 1 }}>
				<Pressable style={styles.button} onPress={() => authStore.increment()}>
					<Text style={styles.buttonText}>Sign In</Text>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() => authStore.registration() }
				>
					<Text style={styles.buttonText}>Registration</Text>
				</Pressable>
			</View>
		</View>
	);
});
// navigation.navigate("Home")
const styles = StyleSheet.create({
	input: {
		height: 40,
		color: "white",
		borderColor: "white",
		borderBottomWidth: 1,
		padding: 10,
		marginBottom: 16,
		placeholderTextColor: "white",
	},
	button: {
		textAlign: "center",
		padding: 10,
		marginBottom: 10,
		borderRadius: 4,
		backgroundColor: "#7c9a92",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
	},
});
