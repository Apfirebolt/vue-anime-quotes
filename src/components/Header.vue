<template>
  <v-app-bar elevation="1" color="surface" class="px-3">
    <!-- Brand / Title -->
    <div class="d-flex align-center cursor-pointer" @click="router.push('/')">
      <v-icon icon="mdi-format-quote-close" color="primary" class="mr-2" size="26" />
      <span class="text-h6 font-weight-bold text-high-emphasis">Anime Quotes</span>
    </div>

    <v-spacer />

    <!-- Desktop Navigation Links -->
    <div class="d-none d-md-flex align-center ga-1">
      <v-btn
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        variant="text"
        color="default"
        class="text-none font-weight-medium rounded-pill px-4"
        exact
      >
        <template #prepend>
          <v-icon :icon="item.icon" size="18" />
        </template>
        {{ item.title }}
      </v-btn>

      <!-- Desktop Action CTA -->
      <v-btn
        to="/random"
        variant="flat"
        class="text-none font-weight-medium rounded-pill ml-2 px-4 text-info"
      >
        Random Quote
      </v-btn>
    </div>

    <!-- Mobile Navigation Menu -->
    <v-menu location="bottom end" transition="scale-transition">
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-dots-vertical"
          variant="text"
          class="d-flex d-md-none ml-1"
          aria-label="Open Navigation Menu"
        />
      </template>

      <v-list density="compact" elevation="4" class="rounded-lg py-2 mt-2" min-width="180">
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title"
          class="rounded-md mx-1"
          exact
        />
        <v-divider class="my-1" />
        <v-list-item
          to="/random"
          prepend-icon="mdi-shuffle-variant"
          title="Random Quote"
          color="primary"
          class="rounded-md mx-1 text-primary"
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navItems = ref([
  { title: "Home", icon: "mdi-home-outline", to: "/" },
  { title: "Quotes", icon: "mdi-format-quote-close-outline", to: "/quotes" },
  { title: "Favorites", icon: "mdi-heart-outline", to: "/favorites" },
]);
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>