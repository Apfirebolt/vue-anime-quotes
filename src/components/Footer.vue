<template>
  <v-footer app color="primary" class="text-white">
    <v-row class="py-4">
      <v-col cols="12" md="4" class="text-center text-md-left">
        <h3 class="text-h6 mb-2">Anime Quotes</h3>
        <p class="text-body-2">
          Discover inspiring quotes from your favorite anime series.
        </p>
      </v-col>

      <v-col cols="12" md="4" class="text-center">
        <h3 class="text-h6 mb-2">Quick Links</h3>
        <div class="d-flex flex-column">
          <a href="#" class="text-white text-decoration-none mb-1">Home</a>
          <a href="#" class="text-white text-decoration-none mb-1">About</a>
          <a href="#" class="text-white text-decoration-none mb-1">Contact</a>
        </div>
      </v-col>

      <v-col cols="12" md="4" class="text-center text-md-right">
        <h3 class="text-h6 mb-2">Connect</h3>
        <div class="d-flex justify-center justify-md-end gap-3">
          <a href="#" class="text-white">
            <v-icon>mdi-github</v-icon>
          </a>
          <a href="#" class="text-white">
            <v-icon>mdi-twitter</v-icon>
          </a>
          <a href="#" class="text-white">
            <v-icon>mdi-instagram</v-icon>
          </a>
        </div>
      </v-col>
    </v-row>

    <v-row class="border-t pt-3">
      <v-col class="text-center text-body-2">
        Anime Quotes © {{ currentYear }}. All rights reserved.
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
import { VFooter, VRow, VCol } from "vuetify/components";
const currentYear = new Date().getFullYear();
</script>
