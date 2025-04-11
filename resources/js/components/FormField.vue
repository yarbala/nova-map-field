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
                               type="number"
                               step="0.00001"
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
                               type="number"
                               step="0.00001"
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
        if(this.value) {
            const v = JSON.parse(this.value);
            this.field.lat = v.lat;
            this.field.lng = v.lng;
        }

        console.log('[SimpleMap][Mounted] Map: ' + this.map);

        const element = document.getElementById(this.map);
        if (!element) {
            console.error('[SimpleMap][Mounted] Map (#' + this.map + ') container element not found!');

            return;
        }

        console.log('[SimpleMap][Mounted] Element (#' + this.map + '): ', element);

        const {lat, lng} = this.value ? JSON.parse(this.value) : this.field;
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
            formData.append(this.fieldAttribute, this.value || '')
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
