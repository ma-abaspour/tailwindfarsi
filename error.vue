<template>
  <div class="min-h-screen bg-zinc-950 flex flex-col" dir="rtl">

    <!-- Beta announcement banner -->
    <div class="inline-flex w-full flex-col items-center justify-center gap-2 bg-[#0588F0] px-4 py-2 text-xs font-medium leading-normal text-white dark:bg-[#111927] md:text-sm">
      <span>🎉 نسخه بتا تیلویند فارسی منتشر شد!</span>
    </div>

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

        <div class="flex gap-4">
          <!-- Action Button -->
          <NuxtLink to="/"  class="mt-8 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800">
            <Icon name="material-symbols:arrow-back" style="color: white" />
              بازگشت به صفحه اصلی
          </NuxtLink>

          <!-- Updates Button -->
          <NuxtLink to="/updates"  class="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-blue-800">
            مشاهده به‌روزرسانی‌ها
          </NuxtLink>
        </div>

      </div>
    </main>

    <!-- Tech Stack Tags -->
    <div class="pb-12 px-6">
      <div class="flex justify-center gap-2 flex-wrap">
        <span class="inline-flex items-center rounded-md bg-zinc-900 px-2 py-1 text-xs font-medium text-zinc-400">
          Tailwind CSS
        </span>
      </div>
    </div>

  </div>
</template>