<template>
  <div class="w-full max-w-4xl" dir="rtl">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">نصب و راه‌اندازی</h1>
      <p class="text-zinc-400 text-lg">نحوه استفاده از کامپوننت‌های تیلویند فارسی</p>
    </div>

    <!-- Current Status -->
    <div class="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 p-6 rounded-xl mb-8">
      <h2 class="text-xl font-semibold mb-3 flex items-center gap-2">
        <Icon name="uil:info-circle" />
        <span>وضعیت فعلی پروژه</span>
      </h2>
      <p class="text-zinc-400 leading-relaxed">
        در حال حاضر، پکیج npm تیلویند فارسی در حال توسعه است. تا زمان انتشار رسمی پکیج، می‌توانید کامپوننت‌های موردنیاز خود را مستقیماً از مستندات کپی کرده و در پروژه خود استفاده کنید.
      </p>
    </div>

    <!-- Setup Guide -->
    <div class="space-y-8">
      <!-- Font Setup -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">تنظیم فونت</h2>
        <p class="text-zinc-400">برای استفاده از کامپوننت‌ها، ابتدا فونت Vazirmatn را به پروژه خود اضافه کنید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap');</pre>
        </div>
      </section>

      <!-- Tailwind Config -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">پیکربندی تیلویند</h2>
        <p class="text-zinc-400">فایل tailwind.config.js خود را به‌روزرسانی کنید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
}</pre>
        </div>
      </section>

      <!-- Future Plans -->
      <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">برنامه‌های آینده</h3>
        <p class="text-zinc-400 mb-4">به زودی پکیج npm تیلویند فارسی منتشر خواهد شد که شامل:</p>
        <ul class="list-disc list-inside text-zinc-400 space-y-2 mr-4">
          <li>نصب آسان با یک دستور</li>
          <li>به‌روزرسانی‌های خودکار</li>
          <li>پشتیبانی از تایپ‌اسکریپت</li>
          <li>و امکانات بیشتر...</li>
        </ul>
      </div>

      <!-- Start Using -->
      <section class="pt-4">
        <NuxtLink to="/components" class="inline-flex items-center text-blue-500 hover:text-blue-400">
          <span>مشاهده کامپوننت‌ها</span>
          <Icon name="uil:arrow-left" class="mr-2" />
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})
</script>
