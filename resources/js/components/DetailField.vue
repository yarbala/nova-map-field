<template>
    <PanelItem :index="index" :field="field">
        <template #value>
            <img
                v-if="field.api_key"
                :src="`https://maps.googleapis.com/maps/api/staticmap?center=${field.value.coordinates[1]},${field.value.coordinates[0]}&zoom=16&size=400x400&key=${field.api_key}&markers=color:red|${field.value.coordinates[1]},${field.value.coordinates[0]}`"
                alt="Static Google Map"
            />
            <span style="display: block;">Lat: {{ field.value.coordinates[1] }}</span>
            <span style="display: block;">Lng: {{ field.value.coordinates[0] }}</span>
        </template>
    </PanelItem>
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
}
</script>
