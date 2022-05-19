import { makeAutoObservable, runInAction } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserNotFoundException, UserExistException } from "../utils/errors";

const AUTH_STORAGE_KEY = "@app_auth";
const AUTH_USER_STORAGE_KEY = "@app_auth_user";

export class AuthStore {
	constructor() {
		this.initState();
		makeAutoObservable(this);
	}

	initState = () => {
		this.isAuth = false;

		this.user = {
			name: "",
			email: "",
		};
	};

	async reset() {
		this.initState();
		await AsyncStorage.removeItem(AUTH_USER_STORAGE_KEY);
	}

	async loadAuth() {
		let authUser = await this.getAuthData(AUTH_USER_STORAGE_KEY);

		if (Array.isArray(authUser) && authUser.length == 0) {
			console.log("[AuthStore]: LoadAuth: No saved user");

			return;
		}

		console.log("[AuthStore]: LoadAuth", authUser);

		runInAction(() => {
			this.user.name = authUser.name;
			this.user.email = authUser.email;
			this.isAuth = true;
		});
	}

	async authentication(login, password) {
		let storage = await this.getAuthData();

		let isExistUser = this.getUser(login, storage);

		console.log("Auth", isExistUser);

		if (!isExistUser) throw new UserNotFoundException("User not found");

		runInAction(() => {
			if (isExistUser.password == password) {
				this.setUser(isExistUser);
				this.isAuth = true;
			} else {
				throw new UserNotFoundException();
			}
		});
	}

	async registration(email, password, name) {
		console.log("[AuthStore]: Registration -", email, password, name);

		try {
			// Получить всех пользователей
			let storage = await this.getAuthData();

			// Поиск существует ли регистрация этого пользователя
			let isExistUser = this.getUser(email, storage);

			if (isExistUser) throw new UserExistException("User already exist");

			let newUser = {
				name: name,
				email: email,
				password: password,
			};

			storage.push(newUser);

			this.setUser(newUser);

			await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(storage));
		} catch (e) {
			throw e;
		}
	}

	increment() {
		this.value++;
	}

	getAuthData = async (key = AUTH_STORAGE_KEY) => {
		const jsonValue = await AsyncStorage.getItem(key);
		return jsonValue != null ? JSON.parse(jsonValue) : [];
	};

	getUser(email, users) {
		console.log("Sign", email, users);
		let currentUser = users.filter((item) => item.email == email);
		return currentUser.length === 0 ? null : currentUser[0];
	}

	async setUser(object) {
		runInAction(() => {
			console.log("setUser", object);
			this.user.name = object.name;
			this.user.email = object.email;
			this.isAuth = true;
		});

		await AsyncStorage.setItem(
			AUTH_USER_STORAGE_KEY,
			JSON.stringify(this.user)
		);
	}
}
