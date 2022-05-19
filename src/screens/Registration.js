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
import { useState } from "react";
import { UserExistException } from "../utils/errors";
import { runInAction } from "mobx";
import { useStores } from "../store";

export const RegistrationScreen = observer(({ navigation }) => {
	const { authStore } = useStores();

	const regObj = useLocalObservable(() => ({
		name: "",
		email: "",
		password: "",
		confirm_password: "",
		isValid: false,
	}));

	const setDemoUser = () => {
		let randomDigits = Math.floor(Math.random() * 100);

		runInAction(() => {
			regObj.name = `Demo ${randomDigits}`;
			regObj.email = `${randomDigits}@gmail.com`;
			regObj.password = "123";
			regObj.confirm_password = "123";
		});
	};

	const updateProperty = (key, value) => {
		runInAction(() => {
			regObj[key] = value;
		});
	};

	const registration = async () => {
		try {
			// Валидация Email
			if (!/@/.test(regObj.email)) {
				throw Error("Некорректный Email, требуется @");
			}

			if (regObj.password !== regObj.confirm_password) {
				throw Error("Пароли не совпадают");
			}

			if (!regObj.name) {
				throw Error("Введите имя");
			}

			await authStore.registration(regObj.email, regObj.password, regObj.name);
		} catch (error) {
			alert(error);
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
					Registration
				</Text>
			</View>
			<View style={{ flex: 1 }}>
				<TextInput
					style={styles.input}
					onChangeText={(value) => updateProperty("name", value)}
					placeholder="Name"
					placeholderTextColor="white"
					value={regObj.name}
				/>
				<TextInput
					style={styles.input}
					onChangeText={(value) => updateProperty("email", value)}
					placeholder="Email"
					placeholderTextColor="white"
					value={regObj.email}
				/>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(value) => updateProperty("password", value)}
					placeholder="Password"
					placeholderTextColor="white"
					value={regObj.password}
				/>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					onChangeText={(value) => updateProperty("confirm_password", value)}
					placeholder="Confirm password"
					placeholderTextColor="white"
					value={regObj.confirm_password}
				/>
			</View>
			<View style={{ flex: 1, justifyContent: "space-between" }}>
				<Pressable style={{ marginVertical: 24 }} onPress={() => setDemoUser()}>
					<Text style={styles.buttonText}>Set demo data</Text>
				</Pressable>
				<Pressable style={styles.button} onPress={() => registration()}>
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
