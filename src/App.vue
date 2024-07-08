<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue";
import { useColorMode } from "./composibles/useColorMode";

const { isColorful, initColorMode } = useColorMode();
initColorMode();
</script>

<template>
  <div
    class="min-h-screen bg-background text-foreground"
    :class="{ 'colorful-mode': isColorful }"
  >
    <NavigationHeader />
    <main class="container mx-auto px-4 pt-16">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
.colorful-mode h1,
.colorful-mode h2 {
  @apply text-purple-800;
}

.colorful-mode p {
  @apply text-slate-500;
}

.colorful-mode .bg-muted {
  @apply bg-white bg-opacity-70;
}
</style>
