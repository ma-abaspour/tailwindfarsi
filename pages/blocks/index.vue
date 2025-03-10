<template>
  <div class="w-full max-w-4xl" dir="rtl">
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">بلوک‌های آماده</h1>
      <p class="text-zinc-400 text-lg leading-relaxed">
        بلوک‌ها ترکیبی از 
        <nuxt-link to="/components" class="text-blue-400 hover:text-blue-300">عناصر پایه</nuxt-link> 
        هستن که با هم یه بخش کامل از رابط کاربری رو می‌سازن.
      </p>
    </div>

    <div class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">بلوک‌ها چی هستن؟</h2>
        <p class="text-zinc-400 leading-relaxed">
          بلوک‌ها قطعات بزرگ‌تری از رابط کاربری هستن. مثلاً یه فرم کامل ثبت‌نام، یه نوار ناوبری پیشرفته،
          یا یه بخش قیمت‌گذاری. اینا از ترکیب چند تا کامپوننت ساده‌تر ساخته میشن.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">چطور ازشون استفاده کنم؟</h2>
        <p class="text-zinc-400 leading-relaxed">
          مثل کامپوننت‌های ساده، کافیه کد رو کپی کنی و توی پروژه‌ات بذاری. فقط یادت باشه که 
          بلوک‌ها معمولاً به چند تا کامپوننت دیگه هم نیاز دارن. اونا رو هم باید با هم کپی کنی.
        </p>
      </section>

      <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">دسته‌بندی‌های محبوب</h3>
        <ul class="list-disc list-inside space-y-2 text-zinc-400">
          <li>هدرها و منوها</li>
          <li>فرم‌های ورود و ثبت‌نام</li>
          <li>کارت‌های محصول</li>
          <li>فوترهای سایت</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blocks'
})

useSeoMeta({
  title: 'بلوک‌های تیلویند فارسی',
  ogTitle: 'بلوک‌های تیلویند فارسی',
  twitterTitle: 'بلوک‌های تیلویند فارسی',
  description: 'بلوک‌های آماده و راست‌چین شده تیلویند فارسی برای ساخت رابط کاربری',
  ogDescription: 'بلوک‌های آماده و راست‌چین شده تیلویند فارسی برای ساخت رابط کاربری',
  twitterDescription: 'بلوک‌های آماده و راست‌چین شده تیلویند فارسی برای ساخت رابط کاربری',
  ogImage: 'https://tailwindfarsi.com/tailwind.png',
  twitterImage: 'https://tailwindfarsi.com/tailwind.png',
  twitterCard: 'summary',
  robots: 'index, follow'
});
</script>

