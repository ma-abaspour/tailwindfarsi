
<template>
  <div class="p-4">
    <div class="p-4 bg-gray-100 dark:bg-gray-900">
      <slot name="preview" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const tab = ref('preview');
</script>
