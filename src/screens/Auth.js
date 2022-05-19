import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Image,
	TextInput,
} from "react-native";
import Logo from "../components/Icons/Logo";
import { observer, useLocalObservable } from "mobx-react-lite";
import { UserNotFoundException } from "../utils/errors";
import { useStores } from "../store";
import { runInAction } from "mobx";

export const AuthScreen = observer(({ navigation }) => {
	const { authStore } = useStores();

	const signInObj = useLocalObservable(() => ({
		email: "",
		password: "",
	}));

	const updateProperty = (key, value) => {
		runInAction(() => {
			signInObj[key] = value;
		});
	};

	const signIn = async () => {
		try {
			await authStore.authentication(signInObj.email, signInObj.password);
		} catch (error) {
			if (error instanceof UserNotFoundException) {
				alert("Неверный логин или пароль");
			}
		}
	};

	return (
		<View style={{ flex: 1, padding: 16, backgroundColor: "#253334" }}>
			<View style={{ flex: 1, justifyContent: "flex-start", marginTop: 32 }}>
				<Logo fill="white" style={{ marginLeft: -16 }} />
				<Text
					style={{
						fontSize: 24,
						fontWeight: "600",
						marginTop: 24,
						color: "white",
					}}
				>
					Sign In
				</Text>
			</View>
			<View style={{ flex: 1 }}>
				<TextInput
					style={styles.input}
					onChangeText={(value) => updateProperty("email", value)}
					placeholder="Email"
					placeholderTextColor={"white"}
				/>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(value) => updateProperty("password", value)}
					placeholderTextColor={"white"}
					placeholder="Password"
				/>
			</View>
			<View style={{ flex: 1 }}>
				<Pressable style={styles.button} onPress={() => signIn()}>
					<Text style={styles.buttonText}>Sign In</Text>
				</Pressable>
				<Pressable
					style={styles.button}
					onPress={() => navigation.navigate("Registration")}
				>
					<Text style={styles.buttonText}>Registration</Text>
				</Pressable>
			</View>
		</View>
	);
});

const styles = StyleSheet.create({
	input: {
		height: 40,
		color: "white",
		borderColor: "white",
		borderBottomWidth: 1,
		padding: 10,
		marginBottom: 16,
		// placeholderTextColor: "white",
	},
	button: {
		textAlign: "center",
		height: 48,
		// padding: 10,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
		borderRadius: 4,
		backgroundColor: "#7c9a92",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
	},
});
