<template>
  <div class="py-8">
    <h1 class="text-4xl font-bold mb-4">About Us</h1>
    <p>This is the about page of your application.</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
onMounted(() => {
  console.log("About component mounted");
});
</script>
