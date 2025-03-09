<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">نوار پیشرفت</h1>

    <!-- Basic Progress -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <div class="space-y-4">
          <div class="w-full h-2 bg-zinc-800 rounded-full">
            <div class="h-2 bg-blue-500 rounded-full" style="width: 45%"></div>
          </div>

          <div class="w-full h-2 bg-zinc-800 rounded-full">
            <div class="h-2 bg-green-500 rounded-full" style="width: 75%"></div>
          </div>
        </div>
      </div>

      <Code v-else :code='basicProgress' />
    </div>

    <!-- With Label -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabLabel" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabLabel === 'نمایش'" class="space-y-4">
        <div class="space-y-2">
          <div class="flex justify-between text-sm">
            <span>پیشرفت</span>
            <span>۶۵٪</span>
          </div>
          <div class="w-full h-2 bg-zinc-800 rounded-full">
            <div class="h-2 bg-blue-500 rounded-full" style="width: 65%"></div>
          </div>
        </div>
      </div>

      <Code v-else :code='labelProgress' />
    </div>

    <!-- Animated Progress -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabAnimated" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabAnimated === 'نمایش'" class="space-y-4">
        <div class="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div class="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-progress" style="width: 100%"></div>
        </div>
      </div>

      <Code v-else :code='animatedProgress' />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTabBasic = ref('نمایش')
const activeTabLabel = ref('نمایش')
const activeTabAnimated = ref('نمایش')

const basicProgress = `<div class="w-full h-2 bg-zinc-800 rounded-full">
  <div class="h-2 bg-blue-500 rounded-full" style="width: 45%"></div>
</div>`

const labelProgress = `<div class="space-y-2">
  <div class="flex justify-between text-sm">
    <span>پیشرفت</span>
    <span>۶۵٪</span>
  </div>
  <div class="w-full h-2 bg-zinc-800 rounded-full">
    <div class="h-2 bg-blue-500 rounded-full" style="width: 65%"></div>
  </div>
</div>`

const animatedProgress = `<div class="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
  <div class="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-progress" style="width: 100%"></div>
</div>

<!-- Add this to your tailwind.config.js -->
module.exports = {
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        progress: 'progress 1.5s infinite linear'
      }
    }
  }
}`
</script>

<style>
@keyframes progress {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

.animate-progress {
  animation: progress 1.5s infinite linear;
}
</style>
