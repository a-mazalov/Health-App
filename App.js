import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/Home";
import { ProfileScreen } from "./src/screens/Profile";
import { AuthScreen } from "./src/screens/Auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MusicScreen } from "./src/screens/Music";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigation() {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Главная"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen name="Музыка" component={MusicScreen} />
			<Tab.Screen name="Профиль" component={ProfileScreen} />
		</Tab.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Auth">
				<Stack.Screen
					name="Auth"
					component={AuthScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeNavigation}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#7c9a92",
		alignItems: "center",
		justifyContent: "center",
	},
});
