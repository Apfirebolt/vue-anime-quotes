<template>
    <v-container class="d-flex justify-center align-center">
        <v-progress-circular
            indeterminate
            size="96"
            color="secondary"
        ></v-progress-circular>
    </v-container>
</template>

<script setup lang="ts">
import { VContainer, VProgressCircular } from 'vuetify/components';
</script>

<style scoped>
.fill-height {
    height: 300px;
    width: 250px;
}
</style>