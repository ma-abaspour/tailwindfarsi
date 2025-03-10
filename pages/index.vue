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
            عناصر رابط کاربری
          </NuxtLink>
          <NuxtLink to="/contribution" class="px-5 py-2 text-xs sm:text-sm font-medium text-zinc-300 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors">
            مشارکت
          </NuxtLink>
        </div>
      </section>



      <!-- Community Section -->
      <section class="mt-8 mb-4 px-4 sm:px-6">
        <div class="max-w-3xl mx-auto flex justify-center">
          <div class="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-right">
            <div class="flex flex-col gap-4">
              <p class="inline-flex items-center gap-1 text-zinc-300 text-xs sm:text-base">
                برای حمایت تو 
                <a href="https://github.com/ma-abaspour/tailwindfarsi" 
                   target="_blank" 
                   class="text-blue-400 hover:text-blue-500 transition-colors">گیت‌هاب</a>
                ستاره بدین ⭐ و تو 
                <a href="https://t.me/ma_abaspour" 
                   target="_blank"
                   class="text-blue-400 hover:text-blue-500 transition-colors">کانال تلگرامم</a>
                جوین شین. مرسیی! 💗
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Section -->
      <section>
        <div class="relative max-w-2xl mx-auto px-4">
          <!-- Intro text -->

          <div class="relative p-3 rounded-2xl">
            <!-- Subtle gradient background -->
            <div class="absolute inset-0 bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 rounded-2xl blur-xl -z-10"></div>
            
            <!-- Benefits items -->
            <div class="flex items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
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
              <span class="text-xs sm:text-sm text-zinc-400 hover:text-zinc-300 transition-colors cursor-default">
                فقط کپی-پیست کن و بساز 
                <span class="inline-block hover:scale-110 transition-transform">✨</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission Statement Section -->
      <section class="px-4">
        <div class="max-w-3xl mx-auto">
          <div class="p-6 rounded-2xl bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50">
            <h2 class="text-xl sm:text-2xl font-medium text-zinc-100 mb-4">چرا تیلویند فارسی؟</h2>
            <div class="space-y-4 text-sm sm:text-base">
              <p class="text-zinc-300">
                من این پروژه رو ساختم تا به کامیونیتی فارسی کمک کنم. همه چیز اینجا برای همیشه رایگان و متن باز می مونه.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 text-zinc-300">
                <div class="flex items-start gap-2">
                  <icon name="uil:align-right" class="w-5 h-5 text-zinc-400 mt-1" />
                  <span>راست‌چین از همون اول</span>
                </div>
                <div class="flex items-start gap-2">
                  <icon name="uil:box" class="w-5 h-5 text-zinc-400 mt-1" />
                  <span>المان‌های پیشرفته رایگان</span>
                </div>
                <div class="flex items-start gap-2">
                  <icon name="uil:window-grid" class="w-5 h-5 text-zinc-400 mt-1" />
                  <span>قالب‌های آماده متنوع</span>
                </div>
              </div>
              <p class="text-zinc-400">
                برای آشنایی بیشتر با داستان و اهداف این پروژه، 
                <NuxtLink to="/mission" class="text-blue-400 hover:text-blue-500 transition-colors">اینجا</NuxtLink>
                رو بخونید 💫
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Sponsors Section -->
      <section class="my-16 px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-xl sm:text-2xl font-medium text-zinc-100 mb-6">اوپن سورس چجوری پول در میاره؟</h2>
          
          <p class="text-zinc-400 text-sm leading-relaxed mb-12">
            هر کسی میتونه اسپانسر بشه و پروژه رو بوست کنه، اینطوری هزینه های هاست و غیره هم کاور میشه. ولی هیچ لزومی نیست اگه تواناییش رو ندارین انجام بدین. اسپانسر ها در ازای کمکشون به پروژه میتونن خودشون یا خدماتشون رو اینجا معرفی کنن  - روی هر کدوم کلیک کنین تا بیشتر بشناسینشون.
          </p>
          
          <!-- Main Sponsors -->
          <div class="mb-14">
            <h3 class="text-sm font-medium text-zinc-400 mb-6 flex items-center gap-2">
              <span class="text-amber-500/90">✨</span>
              <span>اسپانسر</span>
            </h3>
            <div class="flex flex-wrap gap-8">
              <a href="https://symmetry.team" 
                 target="_blank" 
                 data-tooltip="هزینه های هاست و توسعه رو پوشش میدهد."
                 class="group flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/17098?v=4" 
                     alt="Symmetry" 
                     class="w-12 h-12 rounded-full ring-1 ring-zinc-800 group-hover:ring-amber-500/50 transition-all" />
                <span class="mt-2 text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">Symmetry</span>
              </a>
            </div>
          </div>

          <!-- Mini Sponsors -->
          <div>
            <h3 class="text-sm font-medium text-zinc-400 mb-6 flex items-center gap-2">
              <span class="text-pink-400/90">💝</span>
              <span>حامیان کوچک</span>
            </h3>
            <div class="flex flex-wrap gap-6">
              <a href="#" class="group flex flex-col items-center opacity-40">
                <img src="https://avatars.githubusercontent.com/u/22568?v=4" alt="Placeholder"
                     class="w-10 h-10 rounded-full ring-1 ring-zinc-800 transition-all" />
                <span class="mt-2 text-sm text-zinc-500">به‌زودی</span>
              </a>
              <a href="#" class="group flex flex-col items-center opacity-40">
                <img src="https://avatars.githubusercontent.com/u/23568?v=4" alt="Placeholder"
                     class="w-10 h-10 rounded-full ring-1 ring-zinc-800 transition-all" />
                <span class="mt-2 text-sm text-zinc-500">به‌زودی</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Hire Me Section -->
      <section class="my-16 px-4">
        <div class="max-w-3xl mx-auto">
          
          <div class="p-6 rounded-2xl bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50">
            <p class="text-zinc-300 text-sm sm:text-base mb-6">
              من به عنوان توسعه‌دهنده فول‌استک با تجربه کار در پروژه‌های مختلف، آماده همکاری در پروژه‌های شما هستم. تخصص اصلی من:
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div class="flex items-center gap-3">
                <icon name="uil:window" class="w-5 h-5 text-blue-400" />
                <span class="text-zinc-300 text-sm">React، Vue و Next/Nuxt.js</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:server-network" class="w-5 h-5 text-purple-400" />
                <span class="text-zinc-300 text-sm">Node.js، Express و NestJS</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:database" class="w-5 h-5 text-yellow-400" />
                <span class="text-zinc-300 text-sm">MongoDB، PostgreSQL و Redis</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:docker" class="w-5 h-5 text-blue-400" />
                <span class="text-zinc-300 text-sm">Docker، K8s و Microservices</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:cloud" class="w-5 h-5 text-green-400" />
                <span class="text-zinc-300 text-sm">AWS، GCP و Azure</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:graph-bar" class="w-5 h-5 text-pink-400" />
                <span class="text-zinc-300 text-sm">DevOps و CI/CD</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:shield" class="w-5 h-5 text-red-400" />
                <span class="text-zinc-300 text-sm">امنیت و OAuth2</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:clock" class="w-5 h-5 text-orange-400" />
                <span class="text-zinc-300 text-sm">WebSocket و gRPC</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:code" class="w-5 h-5 text-indigo-400" />
                <span class="text-zinc-300 text-sm">TypeScript و Testing</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:processor" class="w-5 h-5 text-teal-400" />
                <span class="text-zinc-300 text-sm">GraphQL و REST API</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:analytics" class="w-5 h-5 text-cyan-400" />
                <span class="text-zinc-300 text-sm">Analytics و SEO</span>
              </div>
              <div class="flex items-center gap-3">
                <icon name="uil:scaling-right" class="w-5 h-5 text-lime-400" />
                <span class="text-zinc-300 text-sm">Scale و Load Balancing</span>
              </div>
            </div>

            <div class="flex flex-row gap-4 items-center justify-center">
              <a href="https://t.me/foraeons" 
                 target="_blank"
                 class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <icon name="uil:telegram" class="w-5 h-5" />
                تماس در تلگرام
              </a>
              <a href="mailto:user.amin.abaspour@gamil.com" 
                 class="px-5 py-2 text-sm font-medium text-zinc-300 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors flex items-center gap-2">
                <icon name="uil:envelope" class="w-5 h-5" />
                ارسال ایمیل
              </a>
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

/* Add tooltip styling */
[data-tooltip] {
  position: relative;
}

[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem 1rem;
  background: rgba(24, 24, 27, 0.9);
  color: #fff;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;
  border: 1px solid rgba(82, 82, 91, 0.3);
}

[data-tooltip]:hover::after {
  opacity: 1;
}
</style>

<script setup lang="ts">
useSeoMeta({
  title: 'کیت رابط کاربری تیلویند فارسی',
  ogTitle: 'کیت رابط کاربری تیلویند فارسی',
  twitterTitle: 'کیت رابط کاربری تیلویند فارسی',
  description: 'عناصر، قطعات و قالب های راست چین شده تیلویند (Tailwind CSS) برای طراحی رابط کاربری',
  ogDescription: 'کیت رابط کاربری تیلویند فارسی',
  twitterDescription: 'کیت رابط کاربری تیلویند فارسی',
  ogImage: 'https://tailwindfarsi.com/tailwind.png',
  twitterImage: 'https://tailwindfarsi.com/tailwind.png',
  twitterCard: 'summary',
  robots: 'index, follow'
})
</script>