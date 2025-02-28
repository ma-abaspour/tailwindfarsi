<template>
  <div class="w-full" dir="rtl">
    <div class="max-w-4xl">
      <!-- Hero Section -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold mb-4">قطعات رابط کاربری</h1>
        <p class="text-zinc-400 text-lg">مجموعه‌ای از کامپوننت‌های آماده و بهینه‌سازی شده برای توسعه رابط‌های کاربری فارسی با Tailwind CSS</p>
      </div>

      <!-- Components Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Buttons Card -->
        <NuxtLink to="/components/buttons" 
          class="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-lg bg-blue-500/10 text-blue-500">
              <Icon name="uil:square" size="24" />
            </div>
            <h2 class="text-xl font-semibold">دکمه‌ها</h2>
          </div>
          <p class="text-zinc-400 group-hover:text-zinc-300">مجموعه‌ای از دکمه‌های سفارشی با سبک‌های مختلف و حالت‌های تعاملی</p>
        </NuxtLink>

        <!-- Forms Card -->
        <NuxtLink to="/components/forms" 
          class="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-lg bg-green-500/10 text-green-500">
              <Icon name="uil:form" size="24" />
            </div>
            <h2 class="text-xl font-semibold">فرم‌ها</h2>
          </div>
          <p class="text-zinc-400 group-hover:text-zinc-300">المان‌های ورودی، چک‌باکس‌ها و سایر اجزای فرم با پشتیبانی از راست‌چین</p>
        </NuxtLink>

        <!-- Cards Card -->
        <div class="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 opacity-60 cursor-not-allowed">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-lg bg-purple-500/10 text-purple-500">
              <Icon name="uil:card-atm" size="24" />
            </div>
            <h2 class="text-xl font-semibold">کارت‌ها</h2>
          </div>
          <p class="text-zinc-400">به زودی...</p>
        </div>

        <!-- Navigation Card -->
        <div class="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 opacity-60 cursor-not-allowed">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-lg bg-orange-500/10 text-orange-500">
              <Icon name="uil:navigation" size="24" />
            </div>
            <h2 class="text-xl font-semibold">ناوبری</h2>
          </div>
          <p class="text-zinc-400">به زودی...</p>
        </div>
      </div>

      <!-- Getting Started Section -->
      <div class="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <h3 class="text-xl font-semibold mb-4">تازه شروع کرده‌اید؟</h3>
        <p class="text-zinc-400 mb-4">برای شروع استفاده از کتابخانه کامپوننت‌های ما، ابتدا مستندات نصب و راه‌اندازی را مطالعه کنید.</p>
        <a href="/docs/installation" class="inline-flex items-center text-blue-500 hover:text-blue-400">
          <span>مشاهده مستندات</span>
          <Icon name="uil:arrow-left" class="mr-2" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})
</script>