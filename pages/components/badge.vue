<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">نشان‌ها</h1>

    <!-- Basic Badges -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">نشان‌های پایه</h2>
        <div class="flex flex-wrap gap-4">
          <span class="px-2 py-1 text-sm rounded bg-blue-500 text-white">اولیه</span>
          <span class="px-2 py-1 text-sm rounded bg-green-500 text-white">موفق</span>
          <span class="px-2 py-1 text-sm rounded bg-yellow-500 text-white">هشدار</span>
          <span class="px-2 py-1 text-sm rounded bg-red-500 text-white">خطا</span>
          <span class="px-2 py-1 text-sm rounded bg-purple-500 text-white">ویژه</span>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='badgeBasicCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Outline Badges -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabOutline" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabOutline === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">نشان‌های خطی</h2>
        <div class="flex flex-wrap gap-4">
          <span class="px-2 py-1 text-sm rounded border border-blue-500 text-blue-500">اولیه</span>
          <span class="px-2 py-1 text-sm rounded border border-green-500 text-green-500">موفق</span>
          <span class="px-2 py-1 text-sm rounded border border-yellow-500 text-yellow-500">هشدار</span>
          <span class="px-2 py-1 text-sm rounded border border-red-500 text-red-500">خطا</span>
          <span class="px-2 py-1 text-sm rounded border border-purple-500 text-purple-500">ویژه</span>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='badgeOutlineCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Pill Badges -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabPill" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabPill === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">نشان‌های گرد</h2>
        <div class="flex flex-wrap gap-4">
          <span class="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500">اولیه</span>
          <span class="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-500">موفق</span>
          <span class="px-3 py-1 text-sm rounded-full bg-yellow-500/10 text-yellow-500">هشدار</span>
          <span class="px-3 py-1 text-sm rounded-full bg-red-500/10 text-red-500">خطا</span>
          <span class="px-3 py-1 text-sm rounded-full bg-purple-500/10 text-purple-500">ویژه</span>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='badgePillCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Badges with Icons -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabIcon" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabIcon === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">نشان‌های آیکن‌دار</h2>
        <div class="flex flex-wrap gap-4">
          <span class="inline-flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500">
            <Icon name="uil:check" />
            <span>تایید شده</span>
          </span>
          
          <span class="inline-flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-yellow-500/10 text-yellow-500">
            <Icon name="uil:clock" />
            <span>در انتظار</span>
          </span>
          
          <span class="inline-flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-red-500/10 text-red-500">
            <Icon name="uil:times" />
            <span>رد شده</span>
          </span>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='badgeIconCode'
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
const activeTabOutline = ref('نمایش')
const activeTabPill = ref('نمایش')
const activeTabIcon = ref('نمایش')

const badgeBasicCode = `<span class="px-2 py-1 text-sm rounded bg-blue-500 text-white">اولیه</span>
<span class="px-2 py-1 text-sm rounded bg-green-500 text-white">موفق</span>
<span class="px-2 py-1 text-sm rounded bg-red-500 text-white">خطا</span>`

const badgeOutlineCode = `<span class="px-2 py-1 text-sm rounded border border-blue-500 text-blue-500">اولیه</span>
<span class="px-2 py-1 text-sm rounded border border-green-500 text-green-500">موفق</span>`

const badgePillCode = `<span class="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500">اولیه</span>
<span class="px-3 py-1 text-sm rounded-full bg-green-500/10 text-green-500">موفق</span>`

const badgeIconCode = `<span class="inline-flex items-center gap-1 px-2 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500">
  <Icon name="uil:check" />
  <span>تایید شده</span>
</span>`
</script>

<style scoped>
</style>
