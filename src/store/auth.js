import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_STORAGE_KEY = "@app_auth";

export class AuthStore {
	email = "";
	isValidEmail = false;
	password = "";
	value = 0;

	constructor(value) {
		makeAutoObservable(this);
	}

	handleEmail(value) {
		this.email = value;

		// Валидация Email
		if (/@/.test(this.email)) {
			this.isValidEmail = true;
		} else {
			this.isValidEmail = false;
		}
	}

	handlePassword(value) {
		this.password = value;
	}

	async registration() {
		if (!this.isValidEmail) return;

		try {
			await AsyncStorage.setItem(
				AUTH_STORAGE_KEY,
				JSON.stringify({
					login: this.email,
					password: this.password,
				})
			);
		} catch (e) {
			// saving error
		}
	}

	increment() {
		this.value++;
	}
}
