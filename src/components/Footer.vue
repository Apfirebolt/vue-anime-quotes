<template>
  <v-footer class="bg-grey-darken-4 text-grey-lighten-1 py-10">
    <v-container>
      <v-row>
        <!-- Brand & Description -->
        <v-col cols="12" md="4" class="mb-4 mb-md-0">
          <div class="d-flex align-center mb-3">
            <v-icon icon="mdi-format-quote-close" color="primary" class="mr-2" size="28" />
            <span class="text-h6 font-weight-bold text-white tracking-wide">
              Anime Quotes
            </span>
          </div>
          <p class="text-body-2 text-grey mb-4" style="max-width: 320px; line-height: 1.6;">
            Discover, curate, and share inspiring quotes and timeless philosophy from your favorite anime series.
          </p>
          <div class="d-flex ga-2">
            <v-btn
              v-for="social in socials"
              :key="social.icon"
              :icon="social.icon"
              :href="social.link"
              target="_blank"
              variant="tonal"
              density="comfortable"
              color="grey-lighten-2"
              size="small"
              class="rounded-circle"
            />
          </div>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="6" sm="3" md="2">
          <div class="text-subtitle-2 font-weight-bold text-white mb-3 text-uppercase tracking-wider">
            Explore
          </div>
          <ul class="list-unstyled">
            <li v-for="link in exploreLinks" :key="link.label" class="mb-2">
              <a
                :href="link.href"
                class="footer-link text-body-2 text-grey text-decoration-none"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </v-col>

        <!-- Categories / Series -->
        <v-col cols="6" sm="3" md="2">
          <div class="text-subtitle-2 font-weight-bold text-white mb-3 text-uppercase tracking-wider">
            Top Series
          </div>
          <ul class="list-unstyled">
            <li v-for="series in topSeries" :key="series.label" class="mb-2">
              <a
                :href="series.href"
                class="footer-link text-body-2 text-grey text-decoration-none"
              >
                {{ series.label }}
              </a>
            </li>
          </ul>
        </v-col>

        <!-- Newsletter / Engagement -->
        <v-col cols="12" sm="6" md="4">
          <div class="text-subtitle-2 font-weight-bold text-white mb-3 text-uppercase tracking-wider">
            Daily Inspiration
          </div>
          <p class="text-body-2 text-grey mb-3">
            Get the best quote of the day delivered straight to your inbox.
          </p>
          <v-form @submit.prevent="handleSubscribe">
            <v-text-field
              v-model="email"
              placeholder="Enter your email"
              variant="outlined"
              density="compact"
              color="primary"
              bg-color="grey-darken-3"
              hide-details
              class="mb-2"
            >
              <template #append-inner>
                <v-btn
                  type="submit"
                  color="primary"
                  variant="flat"
                  size="small"
                  density="comfortable"
                  class="text-none px-3"
                >
                  Join
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-col>
      </v-row>

      <v-divider class="my-6 border-opacity-25" />

      <!-- Bottom Bar: Copyright & Legal -->
      <div class="d-flex flex-column flex-md-row justify-space-between align-center text-caption text-grey">
        <div class="mb-2 mb-md-0">
          &copy; {{ currentYear }} Anime Quotes. All rights reserved.
        </div>
        <div class="d-flex ga-4">
          <a href="#" class="footer-link text-grey text-decoration-none">Privacy Policy</a>
          <span>•</span>
          <a href="#" class="footer-link text-grey text-decoration-none">Terms of Service</a>
          <span>•</span>
          <a href="#" class="footer-link text-grey text-decoration-none">Cookie Settings</a>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentYear = new Date().getFullYear();
const email = ref("");

const socials = [
  { icon: "mdi-github", link: "#" },
  { icon: "mdi-twitter", link: "#" },
  { icon: "mdi-instagram", link: "#" },
  { icon: "mdi-discord", link: "#" }
];

const exploreLinks = [
  { label: "Home", href: "#" },
  { label: "Trending Quotes", href: "#" },
  { label: "Character Index", href: "#" },
  { label: "Random Generator", href: "#" }
];

const topSeries = [
  { label: "Attack on Titan", href: "#" },
  { label: "Fullmetal Alchemist", href: "#" },
  { label: "Naruto Shippuden", href: "#" },
  { label: "Vinland Saga", href: "#" }
];

const handleSubscribe = () => {
  if (email.value) {
    // Subscription logic
    email.value = "";
  }
};
</script>

<style scoped>
.list-unstyled {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  transition: color 0.2s ease-in-out;
}

.footer-link:hover {
  color: #ffffff !important;
}

.tracking-wider {
  letter-spacing: 0.08em;
}

.tracking-wide {
  letter-spacing: 0.03em;
}
</style>