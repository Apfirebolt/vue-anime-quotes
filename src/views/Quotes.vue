<template>
  <v-container class="py-8">
    <!-- Header -->
    <header class="text-center mb-8">
      <h1 class="text-h4 font-weight-bold mb-2">Anime Quotes Directory</h1>
      <p class="text-subtitle-1 text-medium-emphasis mx-auto" style="max-width: 520px;">
        Browse through our collection of iconic quotes, search by character or series, and copy your favorites.
      </p>
    </header>

    <!-- Initial Loader -->
    <div v-if="isLoading" class="d-flex justify-center my-12">
      <Loader />
    </div>

    <div v-else>
      <!-- Search & Status Bar -->
      <v-row justify="center" class="mb-4">
        <v-col cols="12" md="8" lg="6">
          <v-text-field
            v-model="searchQuery"
            placeholder="Search by quote, character, or anime..."
            variant="outlined"
            prepend-inner-icon="mdi-magnify"
            clearable
            density="comfortable"
            hide-details
            rounded="pill"
            bg-color="surface"
          />
        </v-col>
      </v-row>

      <!-- Empty State -->
      <v-sheet
        v-if="filteredQuotes.length === 0"
        class="text-center py-12 my-6 bg-transparent"
      >
        <v-icon icon="mdi-book-search-outline" size="64" color="grey-lighten-1" class="mb-3" />
        <h3 class="text-h6 font-weight-bold">No quotes found</h3>
        <p class="text-body-2 text-medium-emphasis mb-4">
          No matches found for "{{ searchQuery }}". Try adjusting your search query.
        </p>
        <v-btn
          variant="tonal"
          color="primary"
          size="small"
          @click="searchQuery = ''"
        >
          Clear Search
        </v-btn>
      </v-sheet>

      <!-- Quotes Grid -->
      <v-row v-else dense>
        <v-col
          v-for="quote in displayedQuotes"
          :key="quote._id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card
            class="d-flex flex-column h-100 rounded-lg pa-2"
            elevation="2"
            hover
          >
            <v-card-item class="pb-1">
              <v-card-title class="text-subtitle-1 font-weight-bold text-truncate">
                {{ quote.show }}
              </v-card-title>
              <v-card-subtitle class="text-caption text-primary font-weight-medium">
                {{ quote.character }}
              </v-card-subtitle>
            </v-card-item>

            <v-card-text class="flex-grow-1 text-body-2 font-italic pt-2 text-medium-emphasis">
              "{{ quote.quote }}"
            </v-card-text>

            <v-divider class="my-1 border-opacity-25" />

            <v-card-actions class="pt-0 justify-end">
              <v-btn
                :icon="copiedId === quote._id ? 'mdi-check' : 'mdi-content-copy'"
                :color="copiedId === quote._id ? 'success' : 'default'"
                variant="text"
                density="comfortable"
                size="small"
                @click="copyQuote(quote)"
              />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Infinite Scroll Loading Indicator -->
      <div v-if="hasMore && !isLoading" class="text-center my-6">
        <v-progress-circular indeterminate color="primary" size="32" />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import Loader from "../components/Loader.vue";

interface Quote {
  _id: string;
  show: string;
  character: string;
  quote: string;
}

const quotes = ref<Quote[]>([]);
const isLoading = ref<boolean>(false);
const showItems = ref<number>(24);
const isScrolling = ref<boolean>(false);
const searchQuery = ref<string>("");
const copiedId = ref<string | null>(null);

const filteredQuotes = computed(() => {
  const search = searchQuery.value.trim().toLowerCase();
  if (!search) return quotes.value;

  return quotes.value.filter(
    (item) =>
      item.show.toLowerCase().includes(search) ||
      item.character.toLowerCase().includes(search) ||
      item.quote.toLowerCase().includes(search)
  );
});

const displayedQuotes = computed(() => {
  return filteredQuotes.value.slice(0, showItems.value);
});

const hasMore = computed(() => {
  return displayedQuotes.value.length < filteredQuotes.value.length;
});

const handleScroll = () => {
  if (isScrolling.value || !hasMore.value) return;

  const scrollBuffer = 200; // Trigger before reaching the absolute edge
  const isNearBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.offsetHeight - scrollBuffer;

  if (isNearBottom) {
    isScrolling.value = true;
    showItems.value += 12;
    setTimeout(() => {
      isScrolling.value = false;
    }, 250);
  }
};

const copyQuote = async (item: Quote) => {
  try {
    await navigator.clipboard.writeText(`"${item.quote}" — ${item.character} (${item.show})`);
    copiedId.value = item._id;
    setTimeout(() => {
      if (copiedId.value === item._id) copiedId.value = null;
    }, 1500);
  } catch (err) {
    console.error("Failed to copy quote:", err);
  }
};

const fetchQuotes = async () => {
  try {
    isLoading.value = true;
    const response = await fetch("https://yurippe.vercel.app/api/quotes");
    const data: Quote[] = await response.json();
    quotes.value = data;
  } catch (error) {
    console.error("Error fetching quotes:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  fetchQuotes();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

