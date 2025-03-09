<template>
  <div class="flex gap-2 border-b border-zinc-800 mb-4" dir="rtl">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="$emit('update:modelValue', tab)"
      class="px-4 py-2 -mb-[1px] transition-colors"
      :class="[
        modelValue === tab
          ? 'text-blue-500 border-b-2 border-blue-500'
          : 'text-zinc-400 hover:text-zinc-200'
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  tabs: string[]
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
