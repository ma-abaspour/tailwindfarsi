<template>
  <div class="bg-zinc-950 w-full min-h-screen" dir="rtl">

      <!-- Hero section -->
      <section class="flex h-full flex-col items-center justify-center pt-20">
        <div class="flex w-full max-w-2lg flex-col items-center justify-center text-center">
          <h1 class="relative mb-3 text-2xl sm:text-4xl font-medium text-zinc-950 dark:text-zinc-50">
            کیت رابط کاربری تیلویند فارسی
          </h1>
          <p class="text-center text-xs sm:text-base text-zinc-600 dark:text-zinc-200 nowrap">
          راست‌چین. زیبایی و سادگی. کپی-پیست آسان.
          </p>
        </div>
        <span class="mt-2 text-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
          به‌روزرسانی‌ها و اجزای جدید به طور منظم منتشر می‌شوند.
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



      <!-- Community Section -->
      <section class="my-8 px-4 sm:px-6">
        <div class="max-w-3xl mx-auto flex justify-center">
          <div class="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-right">
            <div class="flex-1">
              <p class="text-zinc-400 text-sm sm:text-base mb-4">
                برای حمایت تو گیت‌هاب ستاره بدین ⭐ و تو چنل تلگرامم 🗨️ جوین شین. مرسیی! 💗
              </p>
              <div class="flex flex-wrap items-center justify-center sm:justify-start gap-6">
                <a href="https://github.com/ma-abaspour/tailwindfarsi" 
                   target="_blank" 
                   class="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                  <icon name="uil:star" class="w-4 h-4" />
                  <span>گیت‌هاب</span>
                </a>
                <a href="https://t.me/ma_abaspour" 
                   target="_blank" 
                   class="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">
                  <icon name="uil:telegram" class="w-4 h-4" />
                  <span>کانال تلگرام</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Goals Section -->
      <div class="max-w-[85rem] px-4   lg:mx-auto">
        <div class="max-w-2xl mx-auto">
          <div class="grid gap-12">
            <div>
              <p class="mb-6 text-3xl font-bold lg:text-4xl text-zinc-50 text-right">
                اهداف من، چرا تیلویند فارسی؟
              </p>
              
              <div class="space-y-8">
                <div class="flex gap-4">
                  <icon name="ion:language" class="shrink-0 size-6 text-blue-500" />
                  <p class="text-zinc-400 text-right leading-relaxed">
                    با وجود کتابخونه‌های زیاد برای تیلویند، همشون انگلیسی هستن و برای راست‌چین مشکل دارن. هدف من ساخت یه کتابخونه‌ست که از همون اول با فکر فارسی طراحی شده - از جزئیات ریز گرفته تا ساختار کلی.
                  </p>
                </div>

                <div class="flex gap-4">
                  <icon name="ion:infinite" class="shrink-0 size-6 text-blue-500" />
                  <p class="text-zinc-400 text-right leading-relaxed">
                    بیشتر کتابخونه‌های تیلویند فقط شامل یه سری المان پایه‌ای هستن. اما وقتی کار به المان‌های پیشرفته‌تر می‌رسه یا اصلاً وجود ندارن، یا پشت یه دیوار پولی قفل شدن. من اینها رو برای خودم و برای شما می‌سازم، هیچوقت هم قرار نیست پولی کنم چیزی رو، رایگان و اوپن سورس برای همیشه. هیچوقت قرار نیست نسخه pro و اینجور چیزا باشه. قول 🤝.
                  </p>
                </div>

                <div class="flex gap-4">
                  <icon name="ion:layers" class="shrink-0 size-6 text-blue-500" />
                  <p class="text-zinc-400 text-right leading-relaxed">
                    علاوه بر کامپوننت‌ها، داشتن قالب‌های آماده می‌تونه یه شروع سریع و حرفه‌ای برای هر پروژه‌ای باشه. اما بیشتر قالب‌هایی که برای تیلویند ساخته شدن یا خیلی محدودن یا فقط با پرداخت هزینه در دسترس هستن. من میخوام یه مجموعه‌ای از قالب‌های متنوع برای کاربردهای مختلف بسازم و یه فضایی ایجاد کنم که شما هم بتونین قالب‌های خودتون رو به اشتراک بذارین.
                  </p>
                </div>

                <div class="flex gap-4">
                  <icon name="material-symbols:favorite" class="shrink-0 size-6 text-red-500" />
                  <p class="text-zinc-400 text-right leading-relaxed">
                    در نهایت هم میخوام انجامش بدم چون دوستون دارم، امیدوارم هر کی که هستین و هر جا که هستین همیشه خوشحال باشین و چیزایی که من میسازم یکم خوشحال ترتون کنه.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <section class="my-8">
        <div class="relative max-w-2xl mx-auto px-4">
          <!-- Intro text -->

          <div class="relative p-3 rounded-2xl">
            <!-- Subtle gradient background -->
            <div class="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 rounded-2xl blur-xl -z-10"></div>
            
            <!-- Benefits items -->
            <div class="flex items-center justify-center gap-3 sm:gap-8 text-sm sm:text-base">
              <div class="group flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <icon name="uil:check" class="w-3 h-3 text-green-500" />
                </span>
                <span class="text-zinc-300 group-hover:text-zinc-100 transition-colors">بدون نصب</span>
              </div>

              <div class="h-3 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>

              <div class="group flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <icon name="uil:check" class="w-3 h-3 text-green-500" />
                </span>
                <span class="text-zinc-300 group-hover:text-zinc-100 transition-colors">بدون تنظیمات</span>
              </div>

              <div class="h-3 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>

              <div class="group flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <icon name="uil:check" class="w-3 h-3 text-green-500" />
                </span>
                <span class="text-zinc-300 group-hover:text-zinc-100 transition-colors">بدون راه‌اندازی</span>
              </div>
            </div>

            <!-- Message -->
            <div class="mt-3 text-center">
              <span class="text-sm text-zinc-400 hover:text-zinc-300 transition-colors cursor-default">
                فقط کپی-پیست کن و بساز 
                <span class="inline-block hover:scale-110 transition-transform">✨</span>
              </span>
            </div>
          </div>
        </div>
      </section>




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

<script setup lang="ts">
useSeoMeta({
  title: 'صفحه اصلی',
  ogTitle: 'صفحه اصلی',
  twitterTitle: 'صفحه اصلی',
  description: 'کیت رابط کاربری تیلویند فارسی',
  ogDescription: 'کیت رابط کاربری تیلویند فارسی',
  twitterDescription: 'کیت رابط کاربری تیلویند فارسی',
  ogImage: 'https://tailwindfarsi.com/tailwind.png',
  twitterImage: '[twitter:image]',
  twitterCard: 'کیت رابط کاربری تیلویند فارسی',
  robots: 'index, follow'
})
</script>