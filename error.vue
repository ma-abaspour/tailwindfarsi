<template>
  <div class="min-h-screen bg-zinc-950 flex flex-col" dir="rtl">
    <!-- Beta announcement banner -->
    <div class="inline-flex w-full flex-col items-center justify-center gap-2 bg-[#0588F0] px-4 py-2 text-xs font-medium leading-normal text-white dark:bg-[#111927] md:text-sm">
      <span>🎉 نسخه بتا تیلویند فارسی منتشر شد!</span>
    </div>

    <!-- Header navigation (reuse from other pages) -->
    <header class="sticky top-0 z-10 flex h-16 items-center justify-center border-b border-zinc-200 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950">
      // ...existing header code...
    </header>

    <!-- Error Content -->
    <main class="flex-grow flex items-center justify-center px-6 py-24">
      <div class="text-center">
        <!-- Animated Development Icon -->
        <div class="relative mx-auto h-24 w-24 animate-pulse">
          <svg class="text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <!-- Error Message -->
        <h1 class="mt-8 text-3xl font-medium tracking-tight text-white">
          در حال توسعه...
        </h1>
        <p class="mt-4 text-base text-zinc-400 max-w-md mx-auto">
          این صفحه در حال توسعه است. به‌زودی با امکانات جدید در دسترس خواهد بود.
        </p>

        <!-- Progress Bar -->
        <div class="mt-8 mx-auto max-w-xs">
          <div class="h-1 w-full overflow-hidden rounded-full bg-zinc-800">
            <div class="h-full w-[2%] rounded-full bg-blue-500 transition-all duration-1000"></div>
          </div>
          <span class="mt-2 text-sm text-zinc-500 block">۲٪ تکمیل شده</span>
        </div>

        <!-- Action Button -->
        <NuxtLink to="/" 
                  class="mt-8 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800">
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          بازگشت به صفحه اصلی
        </NuxtLink>
      </div>
    </main>

    <!-- Tech Stack Tags -->
    <div class="pb-12 px-6">
      <div class="flex justify-center gap-2 flex-wrap">
        <span class="inline-flex items-center rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-400">
          Vue.js
        </span>
        <span class="inline-flex items-center rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-400">
          Nuxt 3
        </span>
        <span class="inline-flex items-center rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-400">
          Tailwind CSS
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
// Handle Nuxt error page
defineProps({
  error: Object
})
</script>
