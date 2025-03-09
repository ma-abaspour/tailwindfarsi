<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">جستجو</h1>

    <!-- Simple Search Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <input 
            type="text" 
            placeholder="جستجو کنید..." 
            class="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <Code v-else :code="
`<input 
  type='text' 
  placeholder='جستجو کنید...' 
  class='bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
/>`" />
    </div>

    <!-- Search with Icon Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabIcon" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabIcon === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="جستجو با آیکن..." 
              class="bg-zinc-100 dark:bg-zinc-800 pl-4 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Icon 
              name="uil:search" 
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='relative'>
  <input 
    type='text' 
    placeholder='جستجو با آیکن...' 
    class='bg-zinc-100 dark:bg-zinc-800 pl-4 pr-10 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
  />
  <Icon 
    name='uil:search' 
    class='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
  />
</div>`" />
    </div>

    <!-- Outlined Search Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabOutlined" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabOutlined === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <input 
            type="text" 
            placeholder="جستجوی خطی..." 
            class="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <Code v-else :code="
`<input 
  type='text' 
  placeholder='جستجوی خطی...' 
  class='border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
/>`" />
    </div>

    <!-- Rounded Search Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabRounded" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabRounded === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="جستجوی گرد..." 
              class="bg-zinc-100 dark:bg-zinc-800 pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Icon 
              name="uil:search" 
              class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='relative'>
  <input 
    type='text' 
    placeholder='جستجوی گرد...' 
    class='bg-zinc-100 dark:bg-zinc-800 pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500'
  />
  <Icon 
    name='uil:search' 
    class='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
  />
</div>`" />
    </div>

    <!-- Search with Button Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabWithButton" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabWithButton === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <div class="flex">
            <input 
              type="text" 
              placeholder="جستجو با دکمه..." 
              class="bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-l-lg">
              جستجو
            </button>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='flex'>
  <input 
    type='text' 
    placeholder='جستجو با دکمه...' 
    class='bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
  />
  <button class='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-l-lg'>
    جستجو
  </button>
</div>`" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTabSimple = ref('نمایش')
const activeTabIcon = ref('نمایش')
const activeTabOutlined = ref('نمایش')
const activeTabRounded = ref('نمایش')
const activeTabWithButton = ref('نمایش')
</script>
