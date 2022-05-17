import { observer } from "mobx-react-lite";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { useStores } from "../store";


export const ProfileScreen = observer(({ navigation }) => {
	const { authStore } = useStores();

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Text>Profile Screen {JSON.stringify(authStore.user)}</Text>

			<View style={{ flex: 1, justifyContent: "flex-end" }}>
				<Pressable onPress={() => authStore.reset() }>
					<Text>Выйти</Text>
				</Pressable>
			</View>
		</View>
	);
});
