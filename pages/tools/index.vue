<template>
  <div class="w-full max-w-4xl" dir="rtl">
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">ابزارهای کاربردی</h1>
      <p class="text-zinc-400 text-lg leading-relaxed">
        مجموعه‌ای از ابزارهای مفید که کار با تیلویند رو راحت‌تر می‌کنه. از مولد کلاس‌ها گرفته تا 
        <nuxt-link to="/tools/prompt" class="text-blue-400 hover:text-blue-300">مولد پرامپت</nuxt-link> و 
        <nuxt-link to="/tools/converter" class="text-blue-400 hover:text-blue-300">مبدل‌ها</nuxt-link>.
      </p>
    </div>

    <div class="space-y-8">
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">ابزارهای موجود</h2>
        <p class="text-zinc-400 leading-relaxed">
          هر ابزار برای حل یه مشکل خاص طراحی شده. مثلاً با مولد پرامپت می‌تونی پرامپت‌های هوشمند برای چت‌جی‌پی‌تی بسازی،
          یا با مبدل‌ها کدهای CSS معمولی رو به کلاس‌های تیلویند تبدیل کنی.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">همه چی آنلاینه</h2>
        <p class="text-zinc-400 leading-relaxed">
          نیازی به نصب هیچ نرم‌افزاری نیست. همه ابزارها مستقیماً توی مرورگر کار می‌کنن و نتیجه رو 
          همونجا بهت نشون میدن. فقط کافیه ابزار مورد نظرت رو انتخاب کنی و شروع کنی به استفاده.
        </p>
      </section>

      <div class="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">ابزارهای پیشنهادی</h3>
        <ul class="list-disc list-inside space-y-2 text-zinc-400">
          <li>مولد پرامپت برای هوش مصنوعی</li>
          <li>مبدل CSS به Tailwind</li>
          <li>پالت رنگ‌های تیلویند</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tools'
})
</script>
