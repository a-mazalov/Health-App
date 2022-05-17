import React from "react";

import { AuthStore } from "./auth.js"


class RootStore {
	constructor() {
		this.rootStore = this;
		this.authStore = new AuthStore(this);
	}

	resetAllStores() {
		this.authStore.reset();
	}
}

export const StoresContext = React.createContext(new RootStore());

export const useStores = () => React.useContext(StoresContext);