import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "./Auth";
import { HomeScreen } from "./Home";
import { MusicScreen } from "./Music";
import { ProfileScreen } from "./Profile";
import { RegistrationScreen } from "./Registration";

const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

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

export const HomeStackScreen = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Main"
				component={HomeScreen}
				options={{ headerShown: false }}
			/>
			<Tab.Screen name="Music" component={MusicScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
};
