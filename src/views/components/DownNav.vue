<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home" href="/home">
                    <ion-icon :icon="homeIcon" />
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="account" href="/account">
                    <ion-icon :icon="accountIcon" />
                    <ion-label>Account</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
    import { home, person } from 'ionicons/icons';

    export default {
        components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
        data() {
            return {
                homeIcon: home,
                accountIcon: person
            };
        },
    };
</script>