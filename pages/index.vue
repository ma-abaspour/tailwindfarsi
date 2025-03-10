<template>
  <div class="flex min-h-screen w-full flex-col bg-zinc-950 px-4 sm:px-6 lg:px-8" dir="rtl">
    <!-- Hero section -->
    <section class="pt-16 sm:pt-20">
      <div class="mx-auto flex max-w-2xl flex-col items-center justify-center gap-4">
        <h1 class="text-2xl font-medium text-zinc-50 sm:text-4xl">
          کیت رابط کاربری تیلویند فارسی
        </h1>
        <p class="text-xs text-zinc-200 sm:text-base">
          کامپوننت ها و قالب های تیلویند راست چین و فارسی بصورت رایگان و اوپن سورس
        </p>
        <p class="text-xs text-zinc-400 sm:text-sm">
          برای مشاهده
          <NuxtLink to="/updates" class="text-blue-400 underline hover:text-blue-500">آخرین آپدیت‌ها</NuxtLink>
          کلیک کنید.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <NuxtLink to="/components" class="btn-primary">عناصر رابط کاربری</NuxtLink>
          <NuxtLink to="/contribution" class="btn-secondary">مشارکت</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Support Me Section -->
    <section class="mt-8">
      <div class="mx-auto flex max-w-3xl flex-col items-center justify-center sm:text-right">
        <p class="inline-flex flex-wrap items-center gap-1 text-xs text-zinc-300 sm:text-base">
          برای حمایت تو 
          <a href="https://github.com/ma-abaspour/tailwindfarsi" target="_blank" class="link">گیت‌هاب</a>
          ستاره بدین ⭐ و تو 
          <a href="https://t.me/ma_abaspour" target="_blank" class="link">کانال تلگرامم</a>
          جوین شین. مرسیی! 💗
        </p>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="mt-10">
      <div class="mx-auto max-w-2xl">
        <div class="relative rounded-2xl p-4">
          <div class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 blur-xl"></div>
          
          <div class="flex flex-wrap items-center justify-center gap-3 text-xs sm:gap-6 sm:text-sm">
            <!-- Benefits items -->
            <template v-for="benefit in ['بدون نصب', 'بدون تنظیمات', 'بدون راه‌اندازی']" :key="benefit">
              <div class="group flex items-center gap-2">
                <span class="benefit-icon">
                  <icon name="uil:check" class="h-3 w-3 text-green-500" />
                </span>
                <span class="text-zinc-300 transition-colors group-hover:text-zinc-100">{{ benefit }}</span>
              </div>
              <!-- Divider for all except last item -->
              <div v-if="benefit !== 'بدون راه‌اندازی'" class="h-3 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent"></div>
            </template>
          </div>

          <div class="mt-3 text-center">
            <span class="cursor-default text-xs text-zinc-400 hover:text-zinc-300 sm:text-sm">
              فقط کپی-پیست کن و بساز 
              <span class="inline-block transition-transform hover:scale-110">✨</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement Section -->
    <section class="mt-10 px-4">
      <div class="mx-auto max-w-3xl">
        <div class="section-card">
          <h2 class="mb-4 text-xl font-medium text-zinc-100 sm:text-2xl">چرا تیلویند فارسی؟</h2>
          <div class="space-y-4 text-sm sm:text-base">
            <p class="text-zinc-300">
              من این پروژه رو ساختم تا به کامیونیتی فارسی کمک کنم. همه چیز اینجا برای همیشه رایگان و متن باز می مونه.
            </p>
            <div class="flex flex-col gap-4 text-zinc-300 sm:flex-row">
              <div class="flex items-start gap-2">
                <icon name="uil:align-right" class="mt-1 h-5 w-5 text-zinc-400" />
                <span>راست‌چین از همون اول</span>
              </div>
              <div class="flex items-start gap-2">
                <icon name="uil:box" class="mt-1 h-5 w-5 text-zinc-400" />
                <span>المان‌های پیشرفته رایگان</span>
              </div>
              <div class="flex items-start gap-2">
                <icon name="uil:window-grid" class="mt-1 h-5 w-5 text-zinc-400" />
                <span>قالب‌های آماده متنوع</span>
              </div>
            </div>
            <p class="text-zinc-400">
              برای آشنایی بیشتر با داستان و اهداف این پروژه، 
              <NuxtLink to="/mission" class="text-blue-400 transition-colors hover:text-blue-500">اینجا</NuxtLink>
              رو بخونید 💫
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsors Section -->
    <section class="my-16 px-4">
      <div class="mx-auto max-w-3xl">
        <h2 class="mb-6 text-xl font-medium text-zinc-100 sm:text-2xl">اوپن سورس چجوری پول در میاره؟</h2>
        
        <p class="mb-12 text-sm leading-relaxed text-zinc-400">
          هر کسی میتونه اسپانسر بشه و پروژه رو بوست کنه، اینطوری هزینه های هاست و غیره هم کاور میشه. ولی هیچ لزومی نیست اگه تواناییش رو ندارین انجام بدین. اسپانسر ها در ازای کمکشون به پروژه میتونن خودشون یا خدماتشون رو اینجا معرفی کنن  - روی هر کدوم کلیک کنین تا بیشتر بشناسینشون.
        </p>
        
        <!-- Main Sponsors -->
        <div class="mb-14">
          <h3 class="mb-6 flex items-center gap-2 text-sm font-medium text-zinc-400">
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
                   class="h-12 w-12 rounded-full ring-1 ring-zinc-800 transition-all group-hover:ring-amber-500/50" />
              <span class="mt-2 text-sm text-zinc-400 transition-colors group-hover:text-zinc-200">Symmetry</span>
            </a>
          </div>
        </div>

        <!-- Mini Sponsors -->
        <div>
          <h3 class="mb-6 flex items-center gap-2 text-sm font-medium text-zinc-400">
            <span class="text-pink-400/90">💝</span>
            <span>حامیان کوچک</span>
          </h3>
          <div class="flex flex-wrap gap-6">
            <a href="#" class="group flex flex-col items-center opacity-40">
              <img src="https://avatars.githubusercontent.com/u/22568?v=4" alt="Placeholder"
                   class="h-10 w-10 rounded-full ring-1 ring-zinc-800 transition-all" />
              <span class="mt-2 text-sm text-zinc-500">به‌زودی</span>
            </a>
            <a href="#" class="group flex flex-col items-center opacity-40">
              <img src="https://avatars.githubusercontent.com/u/23568?v=4" alt="Placeholder"
                   class="h-10 w-10 rounded-full ring-1 ring-zinc-800 transition-all" />
              <span class="mt-2 text-sm text-zinc-500">به‌زودی</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Hire Me Section -->
    <section class="my-16 px-4">
      <div class="mx-auto max-w-3xl">
        
        <div class="section-card">
          <p class="mb-6 text-sm text-zinc-300 sm:text-base">
            من به عنوان توسعه‌دهنده فول‌استک با تجربه کار در پروژه‌های مختلف، آماده همکاری در پروژه‌های شما هستم. تخصص اصلی من:
          </p>
          
          <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div class="flex items-center gap-3">
              <icon name="uil:window" class="h-5 w-5 text-blue-400" />
              <span class="text-sm text-zinc-300">React، Vue و Next/Nuxt.js</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:server-network" class="h-5 w-5 text-purple-400" />
              <span class="text-sm text-zinc-300">Node.js، Express و NestJS</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:database" class="h-5 w-5 text-yellow-400" />
              <span class="text-sm text-zinc-300">MongoDB، PostgreSQL و Redis</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:docker" class="h-5 w-5 text-blue-400" />
              <span class="text-sm text-zinc-300">Docker، K8s و Microservices</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:cloud" class="h-5 w-5 text-green-400" />
              <span class="text-sm text-zinc-300">AWS، GCP و Azure</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:graph-bar" class="h-5 w-5 text-pink-400" />
              <span class="text-sm text-zinc-300">DevOps و CI/CD</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:shield" class="h-5 w-5 text-red-400" />
              <span class="text-sm text-zinc-300">امنیت و OAuth2</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:clock" class="h-5 w-5 text-orange-400" />
              <span class="text-sm text-zinc-300">WebSocket و gRPC</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:code" class="h-5 w-5 text-indigo-400" />
              <span class="text-sm text-zinc-300">TypeScript و Testing</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:processor" class="h-5 w-5 text-teal-400" />
              <span class="text-sm text-zinc-300">GraphQL و REST API</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:analytics" class="h-5 w-5 text-cyan-400" />
              <span class="text-sm text-zinc-300">Analytics و SEO</span>
            </div>
            <div class="flex items-center gap-3">
              <icon name="uil:scaling-right" class="h-5 w-5 text-lime-400" />
              <span class="text-sm text-zinc-300">Scale و Load Balancing</span>
            </div>
          </div>

          <div class="flex flex-row items-center justify-center gap-4">
            <a href="https://t.me/foraeons" 
               target="_blank"
               class="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
              <icon name="uil:telegram" class="h-5 w-5" />
              تماس در تلگرام
            </a>
            <a href="mailto:user.amin.abaspour@gamil.com" 
               class="flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900">
              <icon name="uil:envelope" class="h-5 w-5" />
              ارسال ایمیل
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style>
.btn-primary {
  @apply rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700 sm:text-sm;
}

.btn-secondary {
  @apply rounded-lg border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-900 sm:text-sm;
}

.link {
  @apply text-blue-400 transition-colors hover:text-blue-500;
}

.benefit-icon {
  @apply flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-green-500/20 to-green-500/5 transition-transform duration-300 group-hover:scale-110;
}

.section-card {
  @apply rounded-2xl bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 p-6;
}

/* Existing tooltip styles */
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