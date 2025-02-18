<template>
  <!-- Beta announcement banner -->
  <div
    class="inline-flex w-full flex-col items-center justify-center gap-2 bg-[#0588F0] px-4 py-2 text-xs font-medium leading-normal text-white dark:bg-[#111927] md:text-sm"
    dir="rtl">
    <span>🎉 نسخه بتا تیلویند فارسی منتشر شد!</span>
  </div>

  <!-- Header navigation -->
  <header
    class="sticky top-0 z-10 flex h-16 items-center justify-center border-b border-zinc-200 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950">
    <div class="mx-auto flex w-full items-center justify-between md:max-w-7xl">
      <div class="flex items-center space-x-6">
        <nav class="flex items-center space-x-2">
          <Icon name="uil:user" style="color: white" />
          <Icon name="uil:moon" style="color: white" />
        </nav>
        <div class="hidden h-8 w-[0.5px] bg-zinc-200 dark:bg-zinc-800 sm:flex" />
        <nav class="hidden items-center space-x-6 sm:flex">
          <NuxtLink v-for="(link, index) in [
            { href: '/blog', text: 'بلاگ' },
            { href: '/templates', text: 'قالب ها' },
            { href: '/components', text: 'قطعات رابط کاربری' }
          ]" :key="index" :href="link.href"
            class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            {{ link.text }}
          </NuxtLink>
        </nav>
      </div>
      <NuxtLink href="/docs" class="relative flex items-center">
        <span class="mb-4 mr-2 select-none rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50">beta</span>
        <div class="text-sm font-medium text-zinc-950 dark:text-white">تیلویند فارسی</div>
        <MPLogo class="h-6 w-auto mr-2" />
      </NuxtLink>
    </div>
  </header>

  <main class="min-h-screen bg-zinc-950" dir="rtl">
    <div class="mx-auto max-w-4xl px-6 py-24">
      <!-- Elegant Header -->
      <div class="text-center">
        <span class="text-xs font-medium tracking-wider text-blue-400 uppercase">پیش‌فروش نسخه بتا</span>
        <h1 class="mt-4 text-2xl font-medium tracking-tight text-white sm:text-3xl">
          کیت رابط کاربری تیلویند فارسی
        </h1>
        <p class="mt-4 text-sm leading-relaxed text-zinc-400 max-w-xl mx-auto">
          مجموعه‌ای کامل از کامپوننت‌های راست‌چین شده با طراحی مینیمال و کاربردی، مناسب برای توسعه‌دهندگان و طراحان وب فارسی‌زبان
        </p>
      </div>

      <!-- Minimal Feature Grid -->
      <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="flex items-center gap-x-3 rounded-lg border border-zinc-800 p-4">
          <svg class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-sm text-zinc-300">طراحی ریسپانسیو</span>
        </div>
        <div class="flex items-center gap-x-3 rounded-lg border border-zinc-800 p-4">
          <svg class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-sm text-zinc-300">راست‌چین شده</span>
        </div>
        <div class="flex items-center gap-x-3 rounded-lg border border-zinc-800 p-4">
          <svg class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-sm text-zinc-300">به‌روزرسانی رایگان</span>
        </div>
        <div class="flex items-center gap-x-3 rounded-lg border border-zinc-800 p-4">
          <svg class="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
          </svg>
          <span class="text-sm text-zinc-300">پشتیبانی ۶ ماهه</span>
        </div>
      </div>

      <!-- Elegant Pricing Card -->
      <div class="mt-16 rounded-xl border border-zinc-800 p-8">
        <div class="flex flex-col items-center text-center">
          <div class="flex items-baseline gap-x-2">
            <span class="text-3xl font-medium tracking-tight text-white">۸۳۰</span>
            <span class="text-sm text-zinc-400">هزار تومان</span>
          </div>
          <span class="mt-1 text-xs text-zinc-500 line-through">۲,۸۹۰,۰۰۰ تومان</span>
          
          <a href="tel:+989921236002" 
             class="mt-8 w-full max-w-sm rounded-lg bg-blue-600/10 px-8 py-3 text-center text-sm font-medium text-blue-400 hover:bg-blue-600/20 transition-colors">
            تماس برای خرید
          </a>
          
          <p class="mt-6 text-xs text-zinc-500">
            * قیمت ویژه تنها برای پیش‌فروش نسخه بتا
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
