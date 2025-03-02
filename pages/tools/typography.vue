<template>
  <div class="w-full" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">تایپوگرافی</h1>
    
    <div class="space-y-12">
      <!-- Typography Introduction -->
      <div class="prose prose-invert max-w-none">
        <p class="text-zinc-400">
          سیستم تایپوگرافی ما با استفاده از فونت Vazirmatn برای بهترین خوانایی و زیبایی در رابط‌های کاربری فارسی طراحی شده است.
        </p>
      </div>

      <!-- Font Sizes -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold">اندازه‌های فونت</h2>
        <div class="space-y-8">
          <div class="space-y-1">
            <div class="text-4xl font-bold">عنوان بزرگ</div>
            <div class="text-sm text-zinc-400">text-4xl / 36px</div>
          </div>

          <div class="space-y-1">
            <div class="text-3xl font-bold">عنوان اصلی</div>
            <div class="text-sm text-zinc-400">text-3xl / 30px</div>
          </div>

          <div class="space-y-1">
            <div class="text-2xl font-bold">عنوان فرعی</div>
            <div class="text-sm text-zinc-400">text-2xl / 24px</div>
          </div>

          <div class="space-y-1">
            <div class="text-xl font-semibold">عنوان سوم</div>
            <div class="text-sm text-zinc-400">text-xl / 20px</div>
          </div>

          <div class="space-y-1">
            <div class="text-base">متن معمولی</div>
            <div class="text-sm text-zinc-400">text-base / 16px</div>
          </div>

          <div class="space-y-1">
            <div class="text-sm">متن کوچک</div>
            <div class="text-sm text-zinc-400">text-sm / 14px</div>
          </div>
        </div>
      </div>

      <!-- Font Weights -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold">وزن‌های فونت</h2>
        <div class="space-y-4">
          <div class="text-xl font-bold">متن پررنگ (700)</div>
          <div class="text-xl font-semibold">متن نیمه‌پررنگ (600)</div>
          <div class="text-xl font-medium">متن متوسط (500)</div>
          <div class="text-xl font-normal">متن معمولی (400)</div>
        </div>
      </div>

      <!-- Text Example -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold">نمونه متن</h2>
        <div class="prose prose-invert max-w-none">
          <h1>عنوان مقاله</h1>
          <p>این یک نمونه پاراگراف است که نحوه نمایش متن را در قالب یک محتوای واقعی نشان می‌دهد. از این متن می‌توانید برای بررسی خوانایی و زیبایی تایپوگرافی استفاده کنید.</p>
          <h2>زیرعنوان</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
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
