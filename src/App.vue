<template>
  <v-app>
    <v-main>
      <Header />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>
