<template>
  <v-container
    :class="[
      'd-flex flex-column justify-center align-center',
      fullscreen ? 'fill-height' : 'py-12'
    ]"
  >
    <v-progress-circular
      :size="size"
      :width="width"
      :color="color"
      indeterminate
    />

    <p
      v-if="message"
      class="text-body-2 text-medium-emphasis font-weight-medium mt-4 text-center tracking-wide"
    >
      {{ message }}
    </p>
  </v-container>
</template>

<script setup lang="ts">
interface Props {
  size?: number | string;
  width?: number | string;
  color?: string;
  message?: string;
  fullscreen?: boolean;
}

withDefaults(defineProps<Props>(), {
  size: 64,
  width: 5,
  color: "primary",
  message: "Loading quotes...",
  fullscreen: false,
});
</script>

<style scoped>
.tracking-wide {
  letter-spacing: 0.05em;
}
</style>