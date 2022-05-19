import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./Auth";
import { HomeScreen } from "./Home";
import { HoroscopeDetailsScreen } from "./HoroscopeDetails";
import { MusicScreen } from "./Music";
import { ProfileScreen } from "./Profile";
import { RegistrationScreen } from "./Registration";

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Icon from 'react-native-vector-icons/Ionicons';
import { AboutScreen } from "./About";

export const AuthStackScreen = () => (
	<AuthStack.Navigator>
		<AuthStack.Screen
			name="SignIn"
			component={AuthScreen}
			options={{ headerShown: false }}
		/>
		<AuthStack.Screen
			name="Registration"
			component={RegistrationScreen}
			options={{ headerShown: false }}
		/>
	</AuthStack.Navigator>
);

export const TabStackScreen = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: { backgroundColor: "#283334", borderTopColor: "#171e1f" },
			}}
		>
			<Tab.Screen
				name="Main"
				component={HomeStackScreen}
				options={{
					headerShown: false,
					tabBarLabel: 'Home',
					headerStyle: { backgroundColor: "#283334", },
					headerTitleStyle: { color: "white" },
					tabBarIcon: ({ color, size }) => (
						<Icon name="home" color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen name="Music" component={MusicScreen}
				options={{
					headerShown: true,
					tabBarLabel: 'Music',
					headerStyle: { backgroundColor: "#283334", },
					headerTitleStyle: { color: "white" },
					tabBarIcon: ({ color, size }) => (
						<Icon name="albums" color={color} size={size} />
					),
				}} />
			<Tab.Screen name="Profile" component={ProfileScreen}
				options={{
					headerShown: true,
					tabBarLabel: 'Profile',
					headerStyle: { backgroundColor: "#283334" },
					headerTitleStyle: { color: "white" },
					tabBarIcon: ({ color, size }) => (
						<Icon name="person-circle" color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

function HomeStackScreen() {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
			<HomeStack.Screen name="Horoscope" component={HoroscopeDetailsScreen} options={{ headerShown: false }} />
			<HomeStack.Screen name="About" component={AboutScreen} options={{
				headerStyle: { backgroundColor: "#283334" },
				headerTitleStyle: { color: "white" },
			}} />
		</HomeStack.Navigator>
	);
}