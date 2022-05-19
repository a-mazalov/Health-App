import { observer } from "mobx-react-lite";
import React, { useState, useEffect } from "react";

import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	FlatList,
} from "react-native";
import { ActivityIndicator } from "react-native";
import Logo from "../components/Icons/Logo";
import { useStores } from "../store";

export const HoroscopeDetailsScreen = observer(({ route }) => {
	const { authStore, horoscopeStore } = useStores();
	const { item } = route.params;

	useEffect(() => {
		horoscopeStore.fetchHoroscope(item.name);
	}, []);



	if (horoscopeStore.isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", backgroundColor: "#283334" }}>
				<ActivityIndicator size="large" />
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					marginBottom: 24,
				}}
			>
				<Logo></Logo>
			</View>

			<View>
				<Text style={{ fontSize: 24, color: "white", textTransform: "capitalize" }}>{item.name}</Text>
				<Text style={{ fontSize: 16, color: "white" }}>{item.subtitle}</Text>
				<Text style={{ fontSize: 16, color: "white", marginTop: 16 }}>{horoscopeStore.horoscopes?.horoscope}</Text>
			</View>
		</View>
	);
})

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#283334",
		padding: 16,
	},
	scrollView: {
		flex: 1,
		justifyContent: "space-between",
		paddingVertical: 16,
	},
	moodBtn: {
		height: 72,
		width: 72,
		// backgroundColor: "white",
		// justifyContent: "center",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 36,
	},
	moodBtnCard: {
		height: 72,
		width: 72,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 16,
	},
	categoryBtnCard: {
		height: 160,
		backgroundColor: "white",
		borderRadius: 16,
		padding: 24,
		flexDirection: "column",
		justifyContent: "space-between",
	},
	categoryBtnAction: {
		height: 48,
		backgroundColor: "#283334",
		width: "40%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
});
