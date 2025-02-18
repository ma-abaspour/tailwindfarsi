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
      <NuxtLink to="/" class="relative flex items-center">
        <span class="mb-4 mr-2 select-none rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50">beta</span>
        <div class="text-sm font-medium text-zinc-950 dark:text-white">تیلویند فارسی</div>
        <MPLogo class="h-6 w-auto mr-2" />
      </NuxtLink>
    </div>
  </header>

  <div class="bg-zinc-950 min-h-screen" dir="rtl">
    <!-- Hero Card Component -->
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="overflow-hidden rounded-2xl bg-gradient-to-l from-blue-600/10 via-blue-600/5 to-transparent">
        <div class="px-8 py-16">
          <h2 class="text-xl font-medium text-blue-400">نمونه کامپوننت‌ها</h2>
          <p class="mt-2 text-3xl font-light text-white">طراحی شده برای توسعه‌دهندگان ایرانی</p>
        </div>
      </div>
    </div>

    <!-- Component Showcase Grid -->
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="grid gap-8 md:grid-cols-2">
        <!-- Alert Component -->
        <div class="rounded-xl bg-zinc-900 p-6">
          <h3 class="text-sm font-medium text-zinc-400">Alert Component</h3>
          <div class="mt-4">
            <div class="rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3">
              <div class="flex">
                <svg class="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.485 2.495c.873-1.562 3.157-1.562 4.03 0l6.28 11.225c.873 1.562-.217 3.51-2.015 3.51H4.22c-1.798 0-2.888-1.948-2.015-3.51l6.28-11.225zm1.515 12.5a1 1 0 100-2 1 1 0 000 2zm-.5-6.5a.5.5 0 011 0v4a.5.5 0 01-1 0v-4z" clip-rule="evenodd"/>
                </svg>
                <div class="mr-3">
                  <h3 class="text-sm font-medium text-amber-300">هشدار سیستم</h3>
                  <p class="mt-1 text-sm text-amber-200">لطفاً قبل از ادامه، تنظیمات را بررسی کنید.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Button Group Component -->
        <div class="rounded-xl bg-zinc-900 p-6">
          <h3 class="text-sm font-medium text-zinc-400">Button Group</h3>
          <div class="mt-4">
            <div class="inline-flex rounded-lg shadow-sm">
              <button class="relative inline-flex items-center rounded-r-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-700">
                روزانه
              </button>
              <button class="relative -mr-px inline-flex items-center border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-700">
                هفتگی
              </button>
              <button class="relative -mr-px inline-flex items-center rounded-l-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-700">
                ماهانه
              </button>
            </div>
          </div>
        </div>

        <!-- Data Card Component -->
        <div class="rounded-xl bg-zinc-900 p-6">
          <h3 class="text-sm font-medium text-zinc-400">Data Card</h3>
          <div class="mt-4 rounded-lg border border-zinc-800 p-6">
            <div class="flex items-center justify-between">
              <h4 class="truncate text-sm font-medium text-zinc-200">درآمد کل</h4>
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <div class="text-xs text-green-400">+۱۲.۳٪</div>
              </div>
            </div>
            <p class="mt-2 text-2xl font-semibold tracking-tight text-white">۲۴,۳۲۱,۵۰۰</p>
            <div class="mt-4">
              <div class="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
                <div class="h-full w-[67%] rounded-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Search Component -->
        <div class="rounded-xl bg-zinc-900 p-6">
          <h3 class="text-sm font-medium text-zinc-400">Search Input</h3>
          <div class="mt-4">
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-zinc-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"/>
                </svg>
              </div>
              <input type="text" class="block w-full rounded-lg border border-zinc-700 bg-zinc-800 py-2.5 pr-10 text-sm text-white placeholder-zinc-400 focus:border-blue-500 focus:ring-blue-500" placeholder="جستجو...">
            </div>
          </div>
        </div>

        <!-- Badge Component -->
        <div class="rounded-xl bg-zinc-900 p-6">
          <h3 class="text-sm font-medium text-zinc-400">Badges</h3>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/30">
              در حال پردازش
            </span>
            <span class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/30">
              تکمیل شده
            </span>
            <span class="inline-flex items-center rounded-md bg-amber-400/10 px-2 py-1 text-xs font-medium text-amber-400 ring-1 ring-inset ring-amber-400/30">
              در انتظار
            </span>
          </div>
        </div>

        <!-- Toggle Component -->
        <div class="rounded-xl bg-zinc-900 p-6">
          <h3 class="text-sm font-medium text-zinc-400">Toggle Switch</h3>
          <div class="mt-4 flex">
            <label class="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" class="peer sr-only" checked>
              <div class="peer h-6 w-11 rounded-full bg-zinc-700 after:absolute after:right-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:-translate-x-full peer-checked:after:border-white"></div>
            </label>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-16 flex justify-center">
        <NuxtLink to="/buy" class="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 hover:text-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:bg-blue-800">
          <span>خرید کیت رابط کاربری</span>
          <svg class="h-4 w-4 transition group-hover:-translate-x-1 rtl:group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
