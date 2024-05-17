<style>
    * {
        box-sizing: border-box;
        /* Aplica border-box a todos los elementos */
    }

    .dataWeather {
        margin: 20px auto;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        align-items: baseline;
    }

    .item {
        margin: 10px 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        padding: 15px;

        flex: 1;
        text-align: center;
        min-width: 200px;
    }

    .item p {
        margin: 0;
    }

    .main-item {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 100%;
        padding: 15px;
        border-radius: 10px;
        border: 1px solid #ccc;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
        transition: 0.3s;
        outline: none;
        cursor: pointer;
    }

    .search {
        width: 100%;
        margin: 20px auto;
        padding: 10px 20px;
    }

    ion-header,
    ion-toolbar {
        --background: #0077ffb0;
        --color: #FFFFFF;
        --ion-shadow-none: none;
        box-shadow: none !important;
    }

    .map {
        width: 100%;
        height: 50vh;
    }
</style>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Clima</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <div class="search">
                <input v-model="city" @input="fetchWeather" placeholder="Nombre de la ciudad">
            </div>

            <div v-if="weather">
                <!-- <p class="main-item">{{ weather.weather[0].description }}</p> -->

                <div class="dataWeather">
                    <div class="item">
                        <p>Temperatura: </p>
                        <p>{{ weather.main.temp }}°</p>
                    </div>
                    <div class="item">
                        <p>Humedad: </p>
                        <p>{{ weather.main.humidity }}%</p>
                    </div>
                    <div class="item">
                        <p>Visibilidad: </p>
                        <p>{{ weather.visibility/1000 }} km</p>
                    </div>
                    <div class="item">
                        <p>Velocidad de viento: </p>
                        <p>{{ weather.wind.speed }} km/h</p>
                    </div>
                </div>

                <div class="map">
                    <MapComponent :coordinates="mapCoordinates" />
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent, watch } from 'vue';
    import WeatherPresenter from '@/presenters/WeatherPresenter';
    import MapComponent from '@/components/MapComponent.vue';

    export default defineComponent({
        extends: WeatherPresenter,
        components: {
            MapComponent,
        },
        data() {
            return {
                mapCoordinates: [41.7128, -74.0060],
            };
        },
        watch: {
            weather(newWeather) {
                if (newWeather && newWeather.coord) {
                    this.mapCoordinates = [newWeather.coord.lat, newWeather.coord.lon];
                }
            },
        },
    });
</script>