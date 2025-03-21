<template>
  <div class="home">
    <h1>Welcome to Anime Quotes</h1>
    <p>Get inspired by random quotes from your favorite anime!</p>
    <v-card v-if="quote" class="quote" style="margin-top: 20px;">
      <v-card-title>{{ quote.character }}</v-card-title>
      <v-card-text>{{ quote.quote }}</v-card-text>
      <v-card-subtitle class="text-size">- from : {{ quote.show }}</v-card-subtitle>
    <v-card-actions class="d-flex justify-center" style="margin: 20px 0;">
      <v-btn variant="flat" color="secondary" @click="fetchQuote">Get Another Quote</v-btn>
    </v-card-actions>
    </v-card>
    <Loader v-if="isLoading" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Loader from "../components/Loader.vue";

interface Quote {
  _id: string;
  show: string;
  character: string;
  quote: string;
}

const quote = ref<Quote | null>(null);
const isLoading = ref<boolean>(false);

const fetchQuote = async () => {
  try {
    isLoading.value = true;
    const response = await fetch("https://yurippe.vercel.app/api/quotes");
    const data: Quote[] = await response.json();
    quote.value = data[Math.floor(Math.random() * data.length)];
  } catch (error) {
    console.error("Error fetching quote:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchQuote();
});
</script>

<style>
.text-size {
    font-size: 1.5rem;
}
</style>
