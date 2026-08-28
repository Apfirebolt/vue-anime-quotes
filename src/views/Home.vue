<template>
  <v-container class="home-container py-10 d-flex flex-column align-center justify-center">
    <!-- Header Section -->
    <header class="header-section text-center mb-6">
      <h1 class="text-h4 font-weight-bold mb-2">Anime Quotes</h1>
      <p class="text-subtitle-1 text-medium-emphasis">
        Discover wisdom and inspiration from beloved anime characters
      </p>
    </header>

    <!-- Quote Card -->
    <v-card 
      v-if="quote" 
      :loading="isLoading" 
      class="quote-card mx-auto" 
      max-width="600" 
      elevation="4"
    >
      <v-card-text class="pa-6 text-center">
        <v-icon
          icon="mdi-format-quote-open"
          size="28"
          color="primary"
          class="mr-2"
        />
        <span class="text-h6 font-italic font-weight-regular">
          {{ quote.quote }}
        </span>
        <v-icon
          icon="mdi-format-quote-close"
          size="28"
          color="primary"
          class="ml-2"
        />
      </v-card-text>

      <v-divider />

      <v-card-text class="text-right py-3 bg-surface-variant">
        <div class="text-subtitle-1 font-weight-bold">{{ quote.character }}</div>
        <div class="text-caption text-medium-emphasis">{{ quote.show }}</div>
      </v-card-text>

      <v-card-actions class="justify-center pa-4">
        <v-btn
          size="large"
          variant="elevated"
          color="primary"
          :loading="isLoading"
          prepend-icon="mdi-refresh"
          @click="getRandomQuote"
        >
          New Quote
        </v-btn>
      </v-card-actions>
    </v-card>

    <!-- Error Message Alert -->
    <v-alert
      v-if="errorMessage"
      type="error"
      variant="tonal"
      class="mx-auto mt-6"
      max-width="600"
      closable
      @click:close="errorMessage = ''"
    >
      {{ errorMessage }}
    </v-alert>

    <!-- Fallback Loader -->
    <Loader v-if="isLoading && !quote" class="mt-8" />
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Loader from '../components/Loader.vue';

interface Quote {
  _id: string;
  show: string;
  character: string;
  quote: string;
}

const quotesCache = ref<Quote[]>([]);
const quote = ref<Quote | null>(null);
const isLoading = ref<boolean>(false);
const errorMessage = ref<string>('');

const getRandomQuote = async () => {
  // Use memory cache if already fetched to avoid repeated API requests
  if (quotesCache.value.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotesCache.value.length);
    quote.value = quotesCache.value[randomIndex];
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';

  try {
    const response = await fetch('https://yurippe.vercel.app/api/quotes');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: Quote[] = await response.json();
    quotesCache.value = data;
    
    if (data.length > 0) {
      quote.value = data[Math.floor(Math.random() * data.length)];
    }
  } catch (error) {
    console.error('Error fetching quote:', error);
    errorMessage.value = 'Failed to load quotes. Please try again later.';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  getRandomQuote();
});
</script>

<style scoped>
.home-container {
  min-height: 80vh;
}

.quote-card {
  width: 100%;
  border-radius: 12px;
}
</style>