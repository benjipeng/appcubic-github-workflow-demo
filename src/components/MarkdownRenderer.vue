<script setup lang="ts">
import { ref, watch } from "vue";
import { marked } from "marked";
import DOMPurify from "dompurify";

interface Props {
  content: string;
}

const props = defineProps<Props>();
const renderedContent = ref("");

const renderMarkdown = (markdown: string) => {
  const rawHtml = marked(markdown);
  return DOMPurify.sanitize(rawHtml as string);
};

watch(
  () => props.content,
  (newContent) => {
    renderedContent.value = renderMarkdown(newContent);
  },
  { immediate: true }
);
</script>

<template>
  <div
    class="markdown-content prose dark:prose-invert max-w-none"
    v-html="renderedContent"
  ></div>
  <div>here</div>
</template>

<style scoped>
.markdown-content :deep(h1) {
  @apply text-3xl font-bold mb-4;
}
.markdown-content :deep(h2) {
  @apply text-2xl font-semibold mb-3;
}
.markdown-content :deep(h3) {
  @apply text-xl font-medium mb-2;
}
.markdown-content :deep(p) {
  @apply mb-4;
}
.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  @apply pl-5 mb-4;
}
.markdown-content :deep(li) {
  @apply mb-1;
}
.markdown-content :deep(code) {
  @apply bg-gray-500 dark:bg-gray-800 rounded px-1;
}
.markdown-content :deep(pre) {
  @apply bg-gray-100 dark:bg-gray-800 rounded p-4 mb-4 overflow-x-auto;
}
.markdown-content :deep(blockquote) {
  @apply border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic;
}
.markdown-content :deep(a) {
  @apply text-blue-600 dark:text-blue-400 hover:underline;
}
</style>
