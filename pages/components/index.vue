<template>
  <div class="w-full" dir="rtl">
    <div class="max-w-4xl">
      <!-- Hero Section -->
      <div class="mb-16">
        <h1 class="text-4xl font-bold mb-4">قطعات رابط کاربری تیلویند فارسی</h1>
        <p class="text-zinc-400 text-lg mb-6">مجموعه‌ای از کامپوننت‌های آماده و بهینه‌سازی شده برای توسعه رابط‌های کاربری فارسی با Tailwind CSS</p>
        <div class="flex gap-4">
          <a href="/docs/installation" class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            شروع کنید
          </a>
          <a href="https://github.com/your-repo" class="px-6 py-2 border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
            گیت‌هاب
          </a>
        </div>
      </div>

      <!-- Why Section -->
      <div class="mb-16 space-y-8">
        <h2 class="text-2xl font-bold">چرا تیلویند فارسی؟</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="mt-1">
                <Icon name="uil:check-circle" class="text-green-500" size="20"/>
              </div>
              <div>
                <h3 class="font-medium mb-1">استانداردهای طراحی فارسی</h3>
                <p class="text-zinc-400 text-sm">رعایت اصول طراحی رابط کاربری برای وب‌سایت‌های فارسی</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="mt-1">
                <Icon name="uil:check-circle" class="text-green-500" size="20"/>
              </div>
              <div>
                <h3 class="font-medium mb-1">مستندات فارسی</h3>
                <p class="text-zinc-400 text-sm">راهنمای کامل به زبان فارسی با مثال‌های کاربردی</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="mt-1">
                <Icon name="uil:check-circle" class="text-green-500" size="20"/>
              </div>
              <div>
                <h3 class="font-medium mb-1">به‌روزرسانی مداوم</h3>
                <p class="text-zinc-400 text-sm">پشتیبانی مستمر و اضافه شدن کامپوننت‌های جدید</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="mt-1">
                <Icon name="uil:check-circle" class="text-green-500" size="20"/>
              </div>
              <div>
                <h3 class="font-medium mb-1">انعطاف‌پذیری</h3>
                <p class="text-zinc-400 text-sm">سازگار با فریم‌ورک‌های مختلف و قابل تنظیم با نیازهای شما</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Getting Started Section -->
      <div class="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <h3 class="text-xl font-semibold mb-4">آماده شروع هستید؟</h3>
        <p class="text-zinc-400 mb-4">با مطالعه مستندات جامع ما، در کمترین زمان شروع به ساخت رابط‌های کاربری حرفه‌ای کنید.</p>
        <div class="flex gap-4">
          <a href="/componentss/installation" class="inline-flex items-center text-blue-500 hover:text-blue-400">
            <span>مستندات نصب</span>
            <Icon name="uil:arrow-left" class="mr-2" />
          </a>
          <a href="/components/usage" class="inline-flex items-center text-purple-500 hover:text-purple-400">
            <span>راهنمای کامپوننت‌ها</span>
            <Icon name="uil:arrow-left" class="mr-2" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})
</script>