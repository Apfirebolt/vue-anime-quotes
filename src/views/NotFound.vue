<template>
  <v-container class="fill-height d-flex align-center justify-center text-center">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <!-- Illustration / Image Container -->
        <v-img
          src="@/assets/not-found.png"
          alt="404 Illustration"
          max-width="380"
          class="mx-auto mb-6"
          transition="fade-transition"
        >
          <!-- Fallback icon if image fails to load -->
          <template #error>
            <v-icon
              icon="mdi-compass-off-outline"
              size="120"
              color="grey-lighten-1"
              class="my-6"
            />
          </template>
        </v-img>

        <!-- Status Badge / Tag -->
        <v-chip
          color="error"
          variant="tonal"
          size="small"
          class="font-weight-bold mb-3 tracking-wide"
        >
          ERROR 404
        </v-chip>

        <!-- Main Heading -->
        <h1 class="text-h4 text-sm-h3 font-weight-bold text-high-emphasis mb-3">
          Page Not Found
        </h1>

        <!-- Subtitle -->
        <p class="text-body-1 text-error text-medium-emphasis mb-6 mx-auto" style="max-width: 440px;">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <!-- Action Buttons -->
        <div class="d-flex flex-column flex-sm-row justify-center align-center ga-3">
          <v-btn
            variant="flat"
            size="large"
            prepend-icon="mdi-home"
            to="/"
            class="text-none px-6"
            rounded="pill"
          >
            Back to Home
          </v-btn>

          <v-btn
            variant="outlined"
            size="large"
            prepend-icon="mdi-arrow-left"
            @click="router.back()"
            class="text-none px-6 text-secondary"
            rounded="pill"
          >
            Go Back
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 0.08em;
}
</style>