<template>
    <div ref="mapContainer" id="map"></div>
</template>

<script>
    import { defineComponent, ref, watch, onMounted } from 'vue';
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    export default defineComponent({
        name: 'MapComponent',
        props: {
            coordinates: {
                type: Array,
                required: true
            }
        },
        setup(props) {
            const mapContainer = ref(null);
            let map;
            let marker;

            onMounted(() => {
                map = L.map(mapContainer.value).setView(props.coordinates, 14);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

                marker = L.marker(props.coordinates).addTo(map);
            });

            watch(
                () => props.coordinates,
                (newCoordinates) => {
                    if (map && marker) {
                        map.setView(newCoordinates, 14);
                        marker.setLatLng(newCoordinates);
                    }
                }
            );

            return { mapContainer };
        }
    });
</script>

<style scoped>
    #map {
        height: 100%;
        width: 100%;
    }
</style>