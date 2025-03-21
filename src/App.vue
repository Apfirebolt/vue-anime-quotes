<template>
  <v-app>
    <v-main style="background-color: #3E3F5B; color: white; padding: 40px 20px;">
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
