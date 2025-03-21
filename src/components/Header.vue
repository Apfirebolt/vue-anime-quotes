<template>
    <v-app-bar app color="primary" dark>
        <v-toolbar-title>Anime Quotes</v-toolbar-title>
        <v-spacer></v-spacer>
        <nav>
            <v-btn to="/" link color="secondary" variant="flat" class="pa-2 mr-3">Home</v-btn>
            <v-btn to="/quotes" color="secondary" variant="flat" link>Quotes</v-btn>
        </nav>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <nav>
                <v-list>
                    <v-list-item v-for="item in menuItems" :key="item.title" :to="item.to" link>
                        <v-icon>{{ item.icon }}</v-icon>
                        {{ item.title }}
                    </v-list-item>
                </v-list>
            </nav>
        </v-menu>
    </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VAppBar, VToolbarTitle, VSpacer, VMenu, VBtn, VIcon, VList, VListItem } from 'vuetify/components';

const menuItems = ref([
    { title: 'Home', icon: 'mdi-home', to: '/' },
    { title: 'Quotes', icon: 'mdi-format-quote-close', to: '/quotes' },
]);
</script>