<script setup lang="ts">
import { ref, onMounted } from "vue";
import MarkdownRenderer from "../components/MarkdownRenderer.vue";
import { loadMarkdownFile } from "@/utils/markdown";

const markdownContent = ref("");
const error = ref("");

onMounted(async () => {
  try {
    markdownContent.value = await loadMarkdownFile("getting-started");
  } catch (e) {
    error.value = "Failed to load markdown content";
    console.error(e);
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-10">
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <MarkdownRenderer v-else :content="markdownContent" />
  </div>
</template>
