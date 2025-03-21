<template>
    <v-footer app color="primary" dark>
        <v-row>
            <v-col>
                Anime Quotes is a web application that displays random quotes from popular anime series. All rights reserved @ {{ currentYear }}
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center">
                Anime Quotes © {{ currentYear }}
            </v-col>
        </v-row>
    </v-footer>
</template>

<script setup lang="ts">
import { VFooter, VRow, VCol } from 'vuetify/components';
const currentYear = new Date().getFullYear();
</script>