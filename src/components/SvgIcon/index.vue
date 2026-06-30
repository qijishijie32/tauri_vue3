<template>
  <span class="inline-flex items-center justify-center" :class="[name, customClass]" :style="styleObject" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    name: string;
    size?: string | number;
    customClass?: string;
  }>(),
  {
    size: '1em',
    customClass: ''
  }
);

const styleObject = computed(() => ({
  fontSize: typeof props.size === 'number' ? `${props.size}px` : props.size
}));
</script>
