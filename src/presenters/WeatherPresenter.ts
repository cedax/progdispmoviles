// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
import { getWeather } from '@/models/WeatherModel';
import Root from '@/core/models/weather-api-response';

export default {
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    data() {
        return {
            city: '',
            weather: null
        };
    },
    methods: {
        async fetchWeather() {
            if (!this.city) return;
            try {
                const response:Root = await getWeather(this.city);
                console.log(response);
                this.weather = response;             
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        }
    }
};
