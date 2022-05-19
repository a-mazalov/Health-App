import { makeAutoObservable, runInAction, set } from "mobx";

export class HoroscopeStore {
    constructor() {
        this.initState();
        makeAutoObservable(this);
    }

    initState = () => {
        this.isLoading = false;
        this.horoscopes = [];

        this.categories = [
            { name: "aquarius", subtitle: "Horoscope" },
            { name: "pisces", subtitle: "Horoscope" },
            { name: "aries", subtitle: "Horoscope" },
            { name: "taurus", subtitle: "Horoscope" },
            { name: "gemini", subtitle: "Horoscope" },
            { name: "cancer", subtitle: "Horoscope" },
            { name: "leo", subtitle: "Horoscope" },
            { name: "virgo", subtitle: "Horoscope" },
            { name: "libra", subtitle: "Horoscope" },
            { name: "scorpio", subtitle: "Horoscope" },
            { name: "sagittarius", subtitle: "Horoscope" },
            { name: "capricorn", subtitle: "Horoscope" },
        ];
    };

    // get seletedHoroscope(name) {
    //     console.log("Computing...")
    //     return this.price * this.amount
    // }

    async reset() {
        this.initState();
    }

    async fetchHoroscope(name) {
        runInAction(() => {
            this.isLoading = true;
        })


        console.log(name);
        try {
            const response = await fetch(
                `https://ohmanda.com/api/horoscope/${name}/`, {
                mode: 'no-cors', 'Content-Type': 'application/json',
            }
            );
            const json = await response.json();

            runInAction(() => {
                // set(this.horoscopes, { name: ["asda"] } );
                this.horoscopes = json;
                console.log(this.horoscopes);
            })
        } catch (error) {
            console.error(error);
        } finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    };
}