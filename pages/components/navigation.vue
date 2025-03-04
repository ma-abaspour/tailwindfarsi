<template>
  <div class="w-full min-h-[calc(100vh-4rem)]" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">ناوبری</h1>

    <!-- Basic Navbar -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabBasic = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabBasic === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">نوار ناوبری ساده</h2>
        <div class="w-full bg-zinc-900 px-4 py-3 border border-zinc-800 rounded-xl">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4 space-x-reverse">
              <div class="text-xl font-bold">لوگو</div>
              <nav class="hidden md:flex items-center space-x-4 space-x-reverse">
                <a href="#" class="text-blue-500">خانه</a>
                <a href="#" class="text-zinc-400 hover:text-zinc-200">محصولات</a>
                <a href="#" class="text-zinc-400 hover:text-zinc-200">درباره ما</a>
                <a href="#" class="text-zinc-400 hover:text-zinc-200">تماس</a>
              </nav>
            </div>
            <div class="flex items-center space-x-4 space-x-reverse">
              <button class="md:hidden text-zinc-400">
                <Icon name="uil:bars" />
              </button>
              <button class="hidden md:flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                ورود
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// Basic navbar code...
        </pre>
      </div>
    </div>

    <!-- Breadcrumb -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabBreadcrumb = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabBreadcrumb === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabBreadcrumb === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">مسیر ناوبری</h2>
        <nav class="flex items-center space-x-2 space-x-reverse text-sm">
          <a href="#" class="text-zinc-400 hover:text-zinc-200">خانه</a>
          <Icon name="uil:angle-left" class="text-zinc-600" />
          <a href="#" class="text-zinc-400 hover:text-zinc-200">محصولات</a>
          <Icon name="uil:angle-left" class="text-zinc-600" />
          <span class="text-blue-500">جزئیات محصول</span>
        </nav>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// Breadcrumb code...
        </pre>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabPagination = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabPagination === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabPagination === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">صفحه‌بندی</h2>
        <div class="flex items-center justify-center space-x-2 space-x-reverse">
          <button class="p-2 rounded-lg text-zinc-400 hover:bg-zinc-800">
            <Icon name="uil:angle-right" />
          </button>
          <button class="px-4 py-2 rounded-lg bg-blue-500 text-white">۱</button>
          <button class="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800">۲</button>
          <button class="px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-800">۳</button>
          <button class="p-2 rounded-lg text-zinc-400 hover:bg-zinc-800">
            <Icon name="uil:angle-left" />
          </button>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// Pagination code...
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTabBasic = ref('نمایش')
const activeTabBreadcrumb = ref('نمایش')
const activeTabPagination = ref('نمایش')
</script>
