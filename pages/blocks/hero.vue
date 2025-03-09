<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">قسمت‌های قهرمان</h1>

    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[500px] flex items-center justify-center text-white px-4">
          <div class="text-center space-y-6 max-w-3xl">
            <h2 class="text-4xl md:text-6xl font-bold">ساخت رابط‌های کاربری مدرن</h2>
            <p class="text-lg md:text-xl text-purple-100">با استفاده از Tailwind CSS رابط‌های کاربری زیبا و واکنش‌گرا بسازید</p>
            <div class="flex gap-4 justify-center">
              <button class="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50">شروع کنید</button>
              <button class="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10">مستندات</button>
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='relative bg-gradient-to-r from-purple-600 to-blue-600 h-[500px] flex items-center justify-center text-white px-4'>
  <div class='text-center space-y-6 max-w-3xl'>
    <h2 class='text-4xl md:text-6xl font-bold'>ساخت رابط‌های کاربری مدرن</h2>
    <p class='text-lg md:text-xl text-purple-100'>با استفاده از Tailwind CSS رابط‌های کاربری زیبا و واکنش‌گرا بسازید</p>
    <div class='flex gap-4 justify-center'>
      <button class='bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50'>شروع کنید</button>
      <button class='border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10'>مستندات</button>
    </div>
  </div>
</div>`" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blocks'
})

const activeTabSimple = ref('نمایش')
</script>
