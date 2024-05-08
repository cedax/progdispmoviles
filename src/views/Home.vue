<style scoped>
    .ion-padding {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 30px;
    }
</style>

<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ appTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <input v-model="city" @input="fetchWeather" placeholder="Ingrese el nombre de la ciudad">

            <div v-if="weather">
                <h3>{{ weather.coord.lon }}</h3>
                <h3>{{ weather.coord.lat }}</h3>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import WeatherPresenter from '@/presenters/WeatherPresenter.ts';
    export default WeatherPresenter;
</script>