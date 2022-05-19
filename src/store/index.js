import React from "react";

import { AuthStore } from "./auth.js"
import { HoroscopeStore } from "./horoscope.js";

class RootStore {
	constructor() {
		this.rootStore = this;
		this.authStore = new AuthStore(this);
		this.horoscopeStore = new HoroscopeStore(this);
	}

	resetAllStores() {
		this.authStore.reset();
		this.horoscopeStore.reset();
	}
}

export const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);