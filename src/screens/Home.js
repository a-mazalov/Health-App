import React, { useState } from "react";

import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	FlatList,
	StatusBar,
	Alert 
} from "react-native";
import Logo from "../components/Icons/Logo";
import Menu from "../components/Icons/Menu";
import { useStores } from "../store";
import Icon from 'react-native-vector-icons/Ionicons';




function MoodButton({ item }) {
	const createAlert = (info) =>
	Alert.alert(
	  "",
	  info,
	  [
		{ text: "Accept", }
	  ]
	);
	

	return (
		<Pressable style={{ flex: 1 }} onPress={() => {
			// alert(item.info);
			createAlert(item.info);
		}}>
			<View style={styles.moodBtn}>
				<View style={styles.moodBtnCard}>
					<Icon name={item.icon} size={32} />
				</View>
				<View style={{ marginTop: 12 }}>
					<Text style={{ color: "#BEC1C2", fontSize: 12 }} numberOfLines={1}>{item.title}</Text>
				</View>
			</View>
		</Pressable>
	);
}

function CategoryButton({ item, navigation }) {
	return (
		<Pressable style={{ flex: 1, marginBottom: 16 }} onPress={() => navigation.navigate('Horoscope', {
			item: item,
		})}>
			<View style={styles.categoryBtnCard}>
				<View style={styles.categoryBtnTitle}>
					<Text style={{ fontSize: 18, fontWeight: "500", textTransform: "capitalize" }}>{item.name}</Text>
					<Text style={{ opacity: 0.6 }}>{item.subtitle} </Text>
				</View>
				<View style={styles.categoryBtnAction}>
					<Text style={{ color: "#BEC1C2", fontSize: 14 }}>Details</Text>
				</View>
			</View>
		</Pressable>
	);
}

export const Header = ({ username, navigation }) => {
	return (
		<View
			style={{
				// borderWidth: 2,
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				// marginHorizontal: 16,
				// marginBottom: 4,
			}}
		>
			<View style={{marginLeft: -16}}>
				<Logo></Logo>
			</View>
			<View>
				<Pressable onPress={() => navigation.navigate("Profile")}>
					<View style={{ height: 48, width: 48, backgroundColor: "gray", borderRadius: 999, justifyContent: "center", alignItems: "center" }}>
						<Text style={{ color: "white" }}>{username.charAt(0)}</Text>
					</View>
				</Pressable>
			</View>
		</View>
	)
}

export function HomeScreen({ navigation }) {
	const { authStore, horoscopeStore } = useStores();

	const Moods = [
		{ title: "Calm", icon: "leaf-sharp", info: "Do a warm up" },
		{ title: "Focused", icon: "locate", info: "Take a deep breath" },
		{ title: "Aggressive", icon: "flame-sharp", info: "Да не бомбит у меня!" },
		{ title: "Relaxed", icon: "pint-sharp", info: "Continue chill ^_^" },
		{ title: "Cheerful", icon: "flash-sharp", info: "DO IT!" },
	];

	return (
		<View style={styles.container}>
			<StatusBar
				barStyle="light-content" />

			<Header username={authStore.user?.name} navigation={navigation}></Header>
			<View style={{ marginBottom: 16 }}>
				<Text style={{ fontSize: 20, fontWeight: "600", color: "white" }}>
					С Возвращением, {authStore.user?.name}
				</Text>
				<Text style={{ fontSize: 18, fontWeight: "500", color: "#BEC1C2" }}>
					Каким ты себя чувствуешь сегодня?
				</Text>
			</View>
			<View style={{ height: 120, }}>
				<FlatList
					horizontal={true}
					contentContainerStyle={{ justifyContent: "space-around" }}
					data={Moods}
					renderItem={MoodButton}
					keyExtractor={(item) => item.title}
				/>
			</View>
			<View style={{ flex: 1, marginTop: 16 }}>
				<FlatList
					data={horoscopeStore.categories}
					renderItem={({ item }) => (
						<CategoryButton item={item} navigation={navigation}></CategoryButton>
					)}
					extraData={navigation}
					keyExtractor={(item) => "category-" + item.name}
				></FlatList>
			</View>
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
