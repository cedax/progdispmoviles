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
            <h3>Contenido pagina cuenta</h3>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
    import { APP_TITLE } from '@/core/constants';

    export default {
        components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
        data() {
            return {
                appTitle: APP_TITLE
            };
        }
    };
</script>