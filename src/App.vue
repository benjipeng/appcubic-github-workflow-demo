<script setup lang="ts">
import NavigationHeader from "./components/NavigationHeader.vue";
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <NavigationHeader />
    <main class="container mx-auto px-4 pt-16">
      <router-view></router-view>
    </main>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>
