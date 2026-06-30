<template>
  <div class="page-container">
    <div v-if="title || description" class="page-header">
      <h2 class="page-title">{{ title }}</h2>
      <p v-if="description" class="page-description">{{ description }}</p>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
  description?: string;
}>();
</script>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.page-title {
  margin: 0;
  font-size: 20px;
}

.page-description {
  margin: 8px 0 0;
  color: var(--app-text-secondary);
}
</style>
