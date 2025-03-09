<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">آواتارها</h1>

    <!-- Basic Avatars -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">آواتارهای پایه</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <img class="w-8 h-8 rounded-full" src="https://avatars.githubusercontent.com/u/1?v=4" alt="Avatar" />
          <img class="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/2?v=4" alt="Avatar" />
          <img class="w-16 h-16 rounded-full" src="https://avatars.githubusercontent.com/u/3?v=4" alt="Avatar" />
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='avatarBasicCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Square Avatars -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSquare" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabSquare === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">آواتارهای مربعی</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <img class="w-8 h-8 rounded-lg" src="https://avatars.githubusercontent.com/u/1?v=4" alt="Avatar" />
          <img class="w-12 h-12 rounded-lg" src="https://avatars.githubusercontent.com/u/2?v=4" alt="Avatar" />
          <img class="w-16 h-16 rounded-lg" src="https://avatars.githubusercontent.com/u/3?v=4" alt="Avatar" />
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='avatarSquareCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Avatar with Status -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabStatus" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabStatus === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">آواتار با وضعیت</h2>
        <div class="flex flex-wrap gap-8 items-center">
          <div class="relative">
            <img class="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/1?v=4" alt="Avatar" />
            <div class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-zinc-900"></div>
          </div>
          
          <div class="relative">
            <img class="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/2?v=4" alt="Avatar" />
            <div class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-red-500 border-2 border-zinc-900"></div>
          </div>
          
          <div class="relative">
            <img class="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/3?v=4" alt="Avatar" />
            <div class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-yellow-500 border-2 border-zinc-900"></div>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='avatarStatusCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Avatar Groups -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabGroup" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabGroup === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">گروه آواتارها</h2>
        <div class="flex flex-wrap gap-8">
          <div class="flex -space-x-4 space-x-reverse">
            <img class="w-10 h-10 rounded-full border-2 border-zinc-900" src="https://avatars.githubusercontent.com/u/1?v=4" alt="Avatar" />
            <img class="w-10 h-10 rounded-full border-2 border-zinc-900" src="https://avatars.githubusercontent.com/u/2?v=4" alt="Avatar" />
            <img class="w-10 h-10 rounded-full border-2 border-zinc-900" src="https://avatars.githubusercontent.com/u/3?v=4" alt="Avatar" />
            <div class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-zinc-700 rounded-full border-2 border-zinc-900">
              +۲
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='avatarGroupCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

definePageMeta({
  layout: 'components'
})

const activeTabBasic = ref('نمایش')
const activeTabSquare = ref('نمایش')
const activeTabStatus = ref('نمایش')
const activeTabGroup = ref('نمایش')

const avatarBasicCode = `<img class="w-8 h-8 rounded-full" src="..." alt="Avatar" />
<img class="w-12 h-12 rounded-full" src="..." alt="Avatar" />
<img class="w-16 h-16 rounded-full" src="..." alt="Avatar" />`

const avatarSquareCode = `<img class="w-8 h-8 rounded-lg" src="..." alt="Avatar" />
<img class="w-12 h-12 rounded-lg" src="..." alt="Avatar" />
<img class="w-16 h-16 rounded-lg" src="..." alt="Avatar" />`

const avatarStatusCode = `<div class="relative">
  <img class="w-12 h-12 rounded-full" src="..." alt="Avatar" />
  <div class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-zinc-900"></div>
</div>`

const avatarGroupCode = `<div class="flex -space-x-4 space-x-reverse">
  <img class="w-10 h-10 rounded-full border-2 border-zinc-900" src="..." alt="Avatar" />
  <img class="w-10 h-10 rounded-full border-2 border-zinc-900" src="..." alt="Avatar" />
  <img class="w-10 h-10 rounded-full border-2 border-zinc-900" src="..." alt="Avatar" />
  <div class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-zinc-700 rounded-full border-2 border-zinc-900">
    +۲
  </div>
</div>`
</script>

<style scoped>
</style>
