<template>
    <div class="home">
        <h1>Welcome to Anime Quotes</h1>
        <p>Get inspired by random quotes from your favorite anime! {{ showItems }}</p>
        <div class="quotes-container"></div>
        <div v-if="isLoading">
            <Loader />
        </div>
        <div v-else class="quotes-grid">
            <v-text-field
                v-model="searchQuery"
                label="Search Quotes"
                class="mb-4"
                clearable
            ></v-text-field>
            <v-row dense>
                <v-col v-for="(quote) in filteredQuotes.slice(0, showItems)" :key="quote._id" cols="12" md="4">
                    <v-card color="error" dark class="mb-4">
                        <v-card-title style="font-size: 1.5rem;">{{ quote.show }}</v-card-title>
                        <v-card-subtitle style="font-size: 1.2rem;">{{ quote.character }}</v-card-subtitle>
                        <v-card-text>{{ quote.quote }}</v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Loader from "../components/Loader.vue";
import { VRow, VCol, VCard, VCardTitle, VCardSubtitle, VCardText, VTextField } from 'vuetify/components';

interface Quote {
    _id: string;
    show: string;
    character: string;
    quote: string;
}

const quotes = ref<Quote[]>([]);
const isLoading = ref<boolean>(false);
const showItems = ref<number>(40);
const isScrolling = ref<boolean>(false);
const searchQuery = ref<string>('');

const filteredQuotes = computed(() => {
    return quotes.value.filter((quote) => {
        const searchLower = searchQuery.value.toLowerCase();
        return quote.show.toLowerCase().includes(searchLower) || quote.character.toLowerCase().includes(searchLower);
    });
});

const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isScrolling.value) return;
    isScrolling.value = true;
    setTimeout(() => {
        showItems.value += 20;
        isScrolling.value = false;
    }, 1000);
};

const fetchQuote = async () => {
    try {
        isLoading.value = true;
        const response = await fetch("https://yurippe.vercel.app/api/quotes");
        const data: Quote[] = await response.json();
        quotes.value = data;
    } catch (error) {
        console.error("Error fetching quote:", error);
    } finally {
        isLoading.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    fetchQuote();
});
</script>

<style>
.quotes-grid {
    margin: 2rem auto;
}
</style>
