<template>
  <div class="w-full min-h-[calc(100vh-4rem)]" dir="rtl">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Header Section -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-4">جستجوی کامپوننت‌ها</h1>
        <p class="text-zinc-400 text-lg">کامپوننت مورد نظر خود را جستجو کنید</p>
      </div>

      <!-- Search Section -->
      <div class="mb-8">
        <div class="flex flex-col gap-4">
          <!-- Main Search -->
          <div class="relative">
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="جستجوی کامپوننت..."
              class="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg pr-4 pl-12 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Icon name="uil:search" class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size="20"/>
          </div>

          <!-- Category Filter -->
          <div>
            <select 
              v-model="selectedCategory"
              class="w-full px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">همه دسته‌بندی‌ها</option>
              <option value="form">فرم‌ها</option>
              <option value="navigation">ناوبری</option>
              <option value="data-display">نمایش داده</option>
              <option value="feedback">بازخورد</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Not Implemented Message -->
      <div class="text-center py-12">
        <div class="mb-4">
          <Icon name="uil:construction" class="text-yellow-500" size="48"/>
        </div>
        <h3 class="text-xl font-medium mb-2">در حال توسعه</h3>
        <p class="text-zinc-400">این بخش در حال پیاده‌سازی است و به زودی تکمیل خواهد شد.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const searchQuery = ref('')
const selectedCategory = ref('')
</script>