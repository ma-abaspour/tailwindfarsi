<template>
  <div class="bg-zinc-950 w-full min-h-screen" dir="rtl">

      <!-- Hero section -->
      <section class="flex h-full flex-col items-center justify-center pt-20">
        <div class="flex w-full max-w-2lg flex-col items-center justify-center text-center">
          <h1 class="relative mb-3 text-2xl sm:text-4xl font-medium text-zinc-950 dark:text-zinc-50">
            کیت رابط کاربری تیلویند فارسی
          </h1>
          <p class="text-center text-xs sm:text-base text-zinc-600 dark:text-zinc-200 nowrap">
            راست‌چین. زیبایی و سادگی. کپی-پیست آسان. برای مهندسان و طراحان.
          </p>
        </div>
        <span class="mt-2 text-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          به‌روزرسانی‌های رایگان و اجزای جدید به طور منظم منتشر می‌شوند.
        </span>
        <div class="flex gap-4 mt-6">
          <NuxtLink to="/components" class="px-5 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            قطعات رابط کاربری
          </NuxtLink>
          <NuxtLink to="/contribution" class="px-5 py-2 text-xs sm:text-sm font-medium text-zinc-300 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors">
            مشارکت
          </NuxtLink>
        </div>
      </section>

      <!-- GitHub Section -->
      <section class="py-16">
        <div class="max-w-4xl mx-auto px-6 flex items-center justify-center">
          <div class="flex items-center gap-6 border-b border-zinc-800 pb-2">
            <a href="https://github.com/ma-abaspour/tailwindfarsi" target="_blank" 
               class="text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-2 group">
              <svg class="w-5 h-5 group-hover:text-zinc-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="text-sm">مشاهده پروژه در گیت‌هاب</span>
            </a>
            <div class="h-4 w-px bg-zinc-800"></div>
            <span class="text-sm text-zinc-500">
              این یک پروژه متن‌باز است
            </span>
          </div>
        </div>
      </section>

    <!-- Features Section -->
    <section class="py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          <div class="p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex gap-4 items-start">
            <div class="w-10 h-10 shrink-0 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path></svg>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-2">
                <h3 class="text-base sm:text-lg font-bold text-white">راست‌چین شده</h3>
              </div>
              <p class="text-sm text-zinc-400">تمامی کامپوننت‌ها برای زبان فارسی بهینه‌سازی شده‌اند</p>
            </div>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex gap-4 items-start">
            <div class="w-10 h-10 shrink-0 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-2">
                <h3 class="text-base sm:text-lg font-bold text-white">سریع و سبک</h3>
              </div>
              <p class="text-sm text-zinc-400">بدون وابستگی اضافه، فقط از Tailwind استفاده می‌کند</p>
            </div>
          </div>

          <div class="p-4 sm:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex gap-4 items-start">
            <div class="w-10 h-10 shrink-0 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <div class="flex items-center gap-2 mb-2">
                <h3 class="text-base sm:text-lg font-bold text-white">کد تمیز</h3>
              </div>
              <p class="text-sm text-zinc-400">کدهای ساده و قابل فهم با پشتیبانی از TypeScript</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-24">
      <div class="max-w-7xl mx-auto px-6">
        <div class="relative">
          <!-- Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl"></div>
          
          <!-- Stats Grid -->
          <div class="relative grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/20 rounded-2xl overflow-hidden">
            <div class="bg-zinc-950/95 p-8 md:p-10 text-center backdrop-blur">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">۱۰۰+</div>
              <div class="text-sm text-zinc-400">کامپوننت آماده</div>
            </div>
            <div class="bg-zinc-950/95 p-8 md:p-10 text-center backdrop-blur">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">۵۰+</div>
              <div class="text-sm text-zinc-400">قالب رایگان</div>
            </div>
            <div class="bg-zinc-950/95 p-8 md:p-10 text-center backdrop-blur">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">۲K+</div>
              <div class="text-sm text-zinc-400">توسعه‌دهنده</div>
            </div>
            <div class="bg-zinc-950/95 p-8 md:p-10 text-center backdrop-blur">
              <div class="text-3xl md:text-4xl font-bold text-white mb-1">۹۹٪</div>
              <div class="text-sm text-zinc-400">رضایت کاربران</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 px-6">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">آماده شروع هستید؟</h2>
        <p class="text-lg text-zinc-400 mb-8">
          همین حالا شروع کنید و با کامپوننت‌های آماده ما سرعت توسعه پروژه‌های خود را افزایش دهید.
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/components" class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            مشاهده کامپوننت‌ها
          </NuxtLink>
          <a href="https://github.com/your-repo" target="_blank" class="px-8 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            گیت‌هاب
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 border-t border-zinc-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="text-center md:text-right">
            <div class="text-xl font-bold text-white mb-2">تیلویند فارسی</div>
            <p class="text-zinc-400">ساخته شده با ❤️ برای توسعه‌دهندگان ایرانی</p>
          </div>
          <div class="flex gap-6">
            <a href="#" class="text-zinc-400 hover:text-white transition-colors">توییتر</a>
            <a href="https://github.com/ma-abaspour/tailwindfarsi" class="text-zinc-400 hover:text-white transition-colors">گیت‌هاب</a>
            <a href="#" class="text-zinc-400 hover:text-white transition-colors">دیسکورد</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>