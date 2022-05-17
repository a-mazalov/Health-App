import React, { useState } from "react";

import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	FlatList,
} from "react-native";
import Logo from "../components/Icons/Logo";
import { useStores } from "../store";

function MoodButton({ item }) {
	return (
		<Pressable style={{ flex: 1 }}>
			<View style={styles.moodBtn}>
				<View style={styles.moodBtnCard}>
					<Text>Icon</Text>
				</View>
				<View style={{ paddingVertical: 12 }}>
					<Text style={{ color: "#BEC1C2", fontSize: 12 }}>{item.title}</Text>
				</View>
			</View>
		</Pressable>
	);
}

function CategoryButton({ item }) {
	return (
		<Pressable style={{ flex: 1, marginBottom: 16 }}>
			<View style={styles.categoryBtnCard}>
				<View style={styles.categoryBtnTitle}>
					<Text style={{ fontSize: 18, fontWeight: 500 }}>{item.title}</Text>
					<Text style={{ opacity: 0.6 }}>{item.subTitle} </Text>
				</View>
				<View style={styles.categoryBtnAction}>
					<Text style={{ color: "#BEC1C2", fontSize: 14 }}>Подробнее</Text>
				</View>
			</View>
		</Pressable>
	);
}

export function HomeScreen() {
	const { authStore } = useStores();

	const Moods = [
		{ title: "Спокойный" },
		{ title: "Расслабленным" },
		{ title: "Расстроенный" },
		{ title: "Агрессивный" },
		{ title: "Бодрым" },
	];

	const Categories = [
		{ title: "Заголовок 1", subTitle: "Краткое описание какой-то шляпы" },
		{ title: "Заголовок 2", subTitle: "Краткое описание какой-то шляпы" },
	];

	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					marginHorizontal: 16,
					marginBottom: 24,
				}}
			>
				<Logo></Logo>
				<Logo></Logo>
				<Logo></Logo>
			</View>
			<View>
				<Text style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
					С Возвращением, {authStore.user?.name}
				</Text>
				<Text style={{ fontSize: 18, fontWeight: 500, color: "#BEC1C2" }}>
					Каким ты себя чувствуешь сегодня?
				</Text>
			</View>
			<View>
				<ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
					<FlatList
						horizontal={true}
						contentContainerStyle={{ justifyContent: "space-around" }}
						data={Moods}
						renderItem={MoodButton}
						keyExtractor={(item) => item.title}
					/>
				</ScrollView>
			</View>
			<View style={{ flex: 1 }}>
				<FlatList
					data={Categories}
					renderItem={CategoryButton}
					keyExtractor={(item) => "category-" + item.title}
				></FlatList>
			</View>
			<Text>Home Screen</Text>
		</View>
	);
}

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
