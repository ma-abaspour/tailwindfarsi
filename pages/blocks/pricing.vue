<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">جداول قیمت‌گذاری</h1>

    <!-- Simple Pricing Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-lg shadow text-black">
            <h3 class="text-xl font-bold">پایه</h3>
            <div class="my-4">
              <span class="text-3xl font-bold">۹۹</span>
              <span class="text-gray-500">هزار تومان / ماه</span>
            </div>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center">
                <Icon name="uil:check" class="text-green-500 ml-2" />
                ویژگی اول
              </li>
              <li class="flex items-center">
                <Icon name="uil:check" class="text-green-500 ml-2" />
                ویژگی دوم
              </li>
            </ul>
            <button class="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600">انتخاب پلن</button>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='p-6 bg-white rounded-lg shadow'>
  <h3 class='text-xl font-bold'>پایه</h3>
  <div class='my-4'>
    <span class='text-3xl font-bold'>۹۹</span>
    <span class='text-gray-500'>هزار تومان / ماه</span>
  </div>
  <ul class='space-y-2 mb-6'>
    <li class='flex items-center'>
      <Icon name='uil:check' class='text-green-500 ml-2' />
      ویژگی اول
    </li>
    <li class='flex items-center'>
      <Icon name='uil:check' class='text-green-500 ml-2' />
      ویژگی دوم
    </li>
  </ul>
  <button class='w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600'>انتخاب پلن</button>
</div>`" />
    </div>

    <!-- Featured Pricing Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabFeatured" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabFeatured === 'نمایش'" class="space-y-4">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="p-6 bg-white rounded-lg shadow-md text-black">
            <div class="text-center">
              <h3 class="text-xl font-bold">پایه</h3>
              <div class="mt-4">
                <span class="text-4xl font-bold">رایگان</span>
              </div>
            </div>
            <ul class="mt-6 space-y-4">
              <li class="flex items-center text-sm">
                <Icon name="uil:check" class="text-green-500 ml-2" />
                ۱ کاربر
              </li>
              <li class="flex items-center text-sm">
                <Icon name="uil:check" class="text-green-500 ml-2" />
                ۱۰۰ مگابایت فضا
              </li>
            </ul>
            <button class="mt-8 w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
              شروع رایگان
            </button>
          </div>

          <div class="p-6 bg-blue-500 rounded-lg shadow-lg transform scale-105">
            <div class="text-center text-white">
              <h3 class="text-xl font-bold">حرفه‌ای</h3>
              <div class="mt-4">
                <span class="text-4xl font-bold">۱۹۹</span>
                <span class="text-sm opacity-75"> هزار تومان / ماه</span>
              </div>
            </div>
            <ul class="mt-6 space-y-4 text-white">
              <li class="flex items-center text-sm">
                <Icon name="uil:check" class="text-white ml-2" />
                ۵ کاربر
              </li>
              <li class="flex items-center text-sm">
                <Icon name="uil:check" class="text-white ml-2" />
                ۱ ترابایت فضا
              </li>
            </ul>
            <button class="mt-8 w-full py-2 px-4 bg-white text-blue-500 rounded-lg hover:bg-blue-50">
              شروع دوره
            </button>
          </div>

          <div class="p-6 bg-white rounded-lg shadow-md text-black">
            <div class="text-center">
              <h3 class="text-xl font-bold">تجاری</h3>
              <div class="mt-4">
                <span class="text-4xl font-bold">۳۹۹</span>
                <span class="text-sm text-gray-500"> هزار تومان / ماه</span>
              </div>
            </div>
            <ul class="mt-6 space-y-4">
              <li class="flex items-center text-sm">
                <Icon name="uil:check" class="text-green-500 ml-2" />
                کاربران نامحدود
              </li>
              <li class="flex items-center text-sm">
                <Icon name="uil:check" class="text-green-500 ml-2" />
                فضای نامحدود
              </li>
            </ul>
            <button class="mt-8 w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
              تماس با ما
            </button>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='grid md:grid-cols-3 gap-6'>
  <!-- Basic Plan -->
  <div class='p-6 bg-white rounded-lg shadow-md'>
    <div class='text-center'>
      <h3 class='text-xl font-bold'>پایه</h3>
      <div class='mt-4'>
        <span class='text-4xl font-bold'>رایگان</span>
      </div>
    </div>
    <ul class='mt-6 space-y-4'>
      <li class='flex items-center text-sm'>
        <Icon name='uil:check' class='text-green-500 ml-2' />
        ۱ کاربر
      </li>
      <!-- More list items... -->
    </ul>
    <button class='mt-8 w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50'>
      شروع رایگان
    </button>
  </div>

  <!-- Pro Plan (Featured) -->
  <div class='p-6 bg-blue-500 rounded-lg shadow-lg transform scale-105'>
    <!-- Similar structure with different styling -->
  </div>

  <!-- Business Plan -->
  <div class='p-6 bg-white rounded-lg shadow-md'>
    <!-- Similar structure -->
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
const activeTabFeatured = ref('نمایش')
const activeTabAdvanced = ref('نمایش')
</script>
