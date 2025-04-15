<template>
    <DefaultField
        :field="field"
        :errors="errors"
        :show-help-text="showHelpText"
        :full-width-content="fullWidthContent"
    >
        <template #field>
            <div class="map w-full" :id="map"></div>

            <div class="flex flex-wrap w-full">
                <div class="flex w-1/2 justify-center">
                    <div class="w-1/5 py-3 pl-2">
                        <label class="inline-block text-80 pt-2 leading-tight" :for="latId">Lat</label>
                    </div>
                    <div class="py-3 w-4/5">
                        <input :id="latId"
                               class="w-full form-control form-input form-input-bordered"
                               :class="errorClasses"
                               v-model="field.lat"
                               type="text"
                               disabled
                        />
                    </div>
                </div>
                <div class="flex w-1/2 justify-center">
                    <div class="w-1/5 py-3 pl-2">
                        <label class="inline-block text-80 pt-2 leading-tight" :for="lngId">Lng</label>
                    </div>
                    <div class="py-3 w-4/5">
                        <input :id="lngId"
                               class="w-full form-control form-input form-input-bordered"
                               :class="errorClasses"
                               v-model="field.lng"
                               type="text"
                               disabled
                        />
                    </div>
                </div>
            </div>
        </template>
    </DefaultField>
</template>
<style scoped>
.map {
    width: 720px;
    height: 300px;
    margin: 0 auto;
    background: gray;
    border:solid 1px #ccc;
}
</style>
<script>
import {FormField, HandlesValidationErrors} from 'laravel-nova'
import GoogleMapService from "../services/GoogleMapService";

function getLat(value) {
    if(isPoint(value)) {
        return value.coordinates[1];
    }

    const v = JSON.parse(value);
    return v.lat;
}

function getLng(value) {
    if(isPoint(value)) {
        return value.coordinates[0];
    }

    const v = JSON.parse(value);
    return v.lng;
}

function isPoint(value) {
    return Object.keys(value).indexOf('coordinates') >= 0;
}

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data: function () {
        const data = {
            service: new GoogleMapService(this),
            latId: 'lat-' + this._.uid,
            lngId: 'lng-' + this._.uid,
            map: 'google-' + this._.uid,
        };

        console.log('[SimpleMap][Data] values:', data);

        return data;
    },
    mounted: async function () {
        console.log('[SimpleMap][Mounted] Init Value: ', this.value);

        if(this.value) {
            this.field.lat = getLat(this.value);
            this.field.lng = getLng(this.value);
        }

        console.log('[SimpleMap][Mounted] Map: ' + this.map);

        const element = document.getElementById(this.map);
        if (!element) {
            console.error('[SimpleMap][Mounted] Map (#' + this.map + ') container element not found!');

            return;
        }

        console.log('[SimpleMap][Mounted] Element (#' + this.map + '): ', element);

        const lat = this.value ? getLat(this.value) : this.field.lat;
        const lng = this.value ? getLng(this.value) : this.field.lng;

        console.log('[SimpleMap][Mounted] Initial coordinates:', {lat, lng});

        if(this.map === ('google-' + this._.uid)) {
            await this.service.init(lat, lng, element);
        }
    },

    methods: {
        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            console.log('[SimpleMap][Fill] Field: ', this.value);

            formData.append(this.fieldAttribute, JSON.stringify({
                lat: this.field.lat,
                lng: this.field.lng,
            }))
        },
    },
    watch: {
        'field.lat': function (lat) {
            console.log('[SimpleMap][Watch] Lat changed: ', lat);
            if(this.service) {
                this.service.updateCurrentMarkerLat(lat)
            }
        },
        'field.lng': function (lng) {
            console.log('[SimpleMap][Watch] Lng changed: ', lng);
            if(this.service) {
                this.service.updateCurrentMarkerLng(lng)
            }
        }
    }
}
</script>
