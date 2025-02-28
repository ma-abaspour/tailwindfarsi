<template>
  <div class="w-full max-w-4xl" dir="rtl">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">نصب و راه‌اندازی</h1>
      <p class="text-zinc-400 text-lg">مراحل نصب و پیکربندی تیلویند فارسی در پروژه شما</p>
    </div>

    <!-- Installation Steps -->
    <div class="space-y-8">
      <!-- NPM Installation -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">نصب با NPM</h2>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <code class="text-blue-400">npm install @tailwindfarsi/ui</code>
        </div>
      </section>

      <!-- Configuration -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">پیکربندی</h2>
        <p class="text-zinc-400">فایل tailwind.config.js خود را به صورت زیر ویرایش کنید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
module.exports = {
  content: [
    "./node_modules/@tailwindfarsi/ui/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindfarsi/ui/plugin')
  ],
}</pre>
        </div>
      </section>

      <!-- Font Setup -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">تنظیم فونت</h2>
        <p class="text-zinc-400">فونت Vazirmatn را به پروژه خود اضافه کنید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
// در فایل CSS اصلی
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap');</pre>
        </div>
      </section>

      <!-- Next Steps -->
      <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">قدم بعدی</h3>
        <p class="text-zinc-400 mb-4">برای آشنایی با نحوه استفاده از کامپوننت‌ها، به صفحه راهنمای استفاده مراجعه کنید.</p>
        <NuxtLink to="/docs/usage" class="inline-flex items-center text-blue-500 hover:text-blue-400">
          <span>راهنمای استفاده</span>
          <Icon name="uil:arrow-left" class="mr-2" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})
</script>
