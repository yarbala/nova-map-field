export default class GoogleMapService {
    currentPosition = null;
    currentMarker = null;

    constructor(context) {
        this.context = context;
    }

    async init(lat, lng, element,) {
        console.log('[SimpleMap][GoogleMapService][init] Initializing Map at ' + lat + ', ' + lng);

        this.currentLatLng = new google.maps.LatLng(lat, lng);
        const map = await this.createMap(element)

        google.maps.event.addListener(map, 'click', (event) => this.onMapClick(map, event.latLng.lat(), event.latLng.lng()));
    }

    async createMap(element) {
        const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

        const options = {
            zoom: this.context.field.zoom || 4,
            center: this.currentLatLng,
            mapId: '' + this.context._.uid,
            streetViewControl: false, // disables Street View
            zoomControl: true,        // enables zoom control
            mapTypeControl: false,    // optional: hides map type (e.g., Satellite)
        };

        console.log('[SimpleMap][GoogleMapService][createMap] Map options', options);

        try {
            const map = new google.maps.Map(element, options);
            console.log('[SimpleMap][GoogleMapService][createMap] Map initialized successfully');

            this.currentMarker = new AdvancedMarkerElement({
                position: this.currentLatLng,
                map: map,
                gmpDraggable: true,
            });

            this.currentMarker.addListener("dragend", (event) => {
                const position = this.currentMarker.position;

                this.updateCurrentMarker(position.lat, position.lng);
            });

            console.log('[SimpleMap][GoogleMapService][createMap] Marker placed at:', this.currentLatLng);

            return map;
        } catch (error) {
            console.error('[SimpleMap][GoogleMapService][createMap] Failed to initialize map:', error);
            return;
        }
    }

    onMapClick(map, lat, lng) {
        console.log('[SimpleMap][GoogleMapService][onMapClick] Map Clicked', {lat: lat, lng: lng});

        this.updateCurrentMarker(lat, lng);
    }

    updateCurrentMarker(lat, lng) {
        this.updateCurrentMarkerLng(lng);
        this.updateCurrentMarkerLat(lat);
    }

    updateCurrentMarkerLng(lng) {
        if (this.currentPosition) {
            this.currentPosition.lng = lng;
        }

        if (this.currentMarker) {
            this.currentMarker.position = new google.maps.LatLng(this.currentMarker.position.lat, lng);
        }

        this.context.value = {...this.context.value, ...{lng: lng}};
        this.context.field.lng = lng;
    }

    updateCurrentMarkerLat(lat) {
        if (this.currentPosition) {
            this.currentPosition.lat = lat;
        }

        if (this.currentMarker) {
            this.currentMarker.position = new google.maps.LatLng(lat, this.currentMarker.position.lng);
        }

        this.context.value = {...this.context.value, ...{lat: lat}};
        this.context.field.lat = lat;
    }
}
