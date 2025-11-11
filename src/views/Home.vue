<template>
  <div class="home">
    <div class="header-section">
      <h1 class="main-title">Anime Quotes</h1>
      <p class="subtitle">
        Discover wisdom and inspiration from beloved anime characters
      </p>
    </div>

    <v-card v-if="quote" class="quote-card" elevation="8">
      <v-card-text class="quote-content">
        <v-icon
          icon="mdi-format-quote-open"
          size="32"
          color="primary"
          class="quote-icon"
        ></v-icon>
        <p class="quote-text">{{ quote.quote }}</p>
        <v-icon
          icon="mdi-format-quote-close"
          size="32"
          color="primary"
          class="quote-icon-close"
        ></v-icon>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="attribution">
        <div class="character-name">{{ quote.character }}</div>
        <div class="show-name">{{ quote.show }}</div>
      </v-card-text>

      <v-card-actions class="card-actions">
        <v-btn
          size="large"
          variant="elevated"
          color="primary"
          @click="fetchQuote"
          prepend-icon="mdi-refresh"
        >
          New Quote
        </v-btn>
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
