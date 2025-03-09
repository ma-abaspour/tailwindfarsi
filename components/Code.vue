<template>
  <div class="bg-zinc-900 p-4 rounded-lg mt-4 overflow-x-auto">
    <div class="min-w-[500px]">
      <VCodeBlock
        :code="code"
        highlightjs
        lang="html"
        theme="neon-bunny"
        dir="ltr"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

defineProps<{
  code: string
}>()
</script>
