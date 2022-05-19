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
import { RegistrationScreen } from "./src/screens/Registration";
import { observer, useLocalObservable } from "mobx-react-lite";
import { useStores } from "./src/store";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackScreen, TabStackScreen } from "./src/screens/ScreenStacks";

const RootStack = createStackNavigator();

const RootStackScreen = ({ isAuth }) => (
	<RootStack.Navigator >
		{isAuth ? (
			<RootStack.Screen
				name="Home"
				component={TabStackScreen}
				options={{ headerShown: false }}
			/>
		) : (
			<RootStack.Screen
				name="Auth"
				component={AuthStackScreen}
				options={{
					animationEnabled: false,
					headerShown: false,
				}}
			/>
		)}
	</RootStack.Navigator>
);

export default observer(() => {
	const { authStore } = useStores();

	const [isLoading, setIsLoading] = React.useState(true);

	const init = async () => {
		await authStore.loadAuth();

		return Promise.resolve(true);
	};

	// reaction(
	// 	() => appStore.netWorkStatus,
	// 	(netWorkStatus) => {
	// 		if (netWorkStatus === false) {
	// 			Alert.alert("Подключение к сети отсутствует", "Проверьте подключение");
	// 		}
	// 	}
	// );

	init();

	// Не показывать экраны пока идет загрузка (выборка из кэша и тд)
	if (isLoading) {
		return (
			<AppLoading
				startAsync={init}
				onError={console.warn}
				onFinish={() => setIsLoading(false)}
				autoHideSplash={true}
			/>
		);
	}

	return (
		<NavigationContainer>
			<RootStackScreen isAuth={authStore.isAuth} />
		</NavigationContainer>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#7c9a92",
		backgroundColor: "#283334",
		alignItems: "center",
		justifyContent: "center",
	},
});
