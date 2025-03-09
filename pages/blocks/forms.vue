<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">فرم‌ها</h1>

    <!-- Simple Form Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <form class="max-w-md space-y-4 p-6 bg-zinc-50 rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-all">
          <div>
            <label class="block text-sm font-medium text-zinc-700">نام کاربری</label>
            <input type="text" 
              class="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-zinc-300 
                     text-zinc-900 placeholder-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent" />
          </div>
          <div>
            <label class="block text-sm font-medium text-zinc-700">رمز عبور</label>
            <input type="password"
              class="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-zinc-300 
                     text-zinc-900 placeholder-zinc-400
                     focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent" />
          </div>
          <button class="w-full bg-zinc-900 text-white rounded-md py-2 hover:bg-zinc-800">ورود</button>
        </form>
      </div>

      <Code v-else :code="
`<form class='max-w-md space-y-4 p-6 bg-white rounded-lg shadow'>
  <div>
    <label class='block text-sm font-medium text-gray-700'>نام کاربری</label>
    <input type='text' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500' />
  </div>
  <div>
    <label class='block text-sm font-medium text-gray-700'>رمز عبور</label>
    <input type='password' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500' />
  </div>
  <button class='w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600'>ورود</button>
</form>`" />
    </div>

    <!-- Contact Form Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabContact" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabContact === 'نمایش'" class="space-y-4">
        <form class="max-w-lg space-y-6 p-8 bg-white rounded-xl shadow-lg text-black">
          <div class="grid grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">نام</label>
              <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">نام خانوادگی</label>
              <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">موضوع</label>
            <input type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">پیام</label>
            <textarea rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
          </div>
          <button class="w-full bg-blue-500 text-white rounded-lg py-3 hover:bg-blue-600">ارسال پیام</button>
        </form>
      </div>

      <Code v-else :code="
`<form class='max-w-lg space-y-6 p-8 bg-white rounded-xl shadow-lg'>
  <div class='grid grid-cols-2 gap-6'>
    <div>
      <label class='block text-sm font-medium text-gray-700'>نام</label>
      <input type='text' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500' />
    </div>
    <div>
      <label class='block text-sm font-medium text-gray-700'>نام خانوادگی</label>
      <input type='text' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500' />
    </div>
  </div>
  <div>
    <label class='block text-sm font-medium text-gray-700'>موضوع</label>
    <input type='text' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500' />
  </div>
  <div>
    <label class='block text-sm font-medium text-gray-700'>پیام</label>
    <textarea rows='4' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'></textarea>
  </div>
  <button class='w-full bg-blue-500 text-white rounded-lg py-3 hover:bg-blue-600'>ارسال پیام</button>
</form>`" />
    </div>

    <!-- Multi-step Form Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabMultiStep" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabMultiStep === 'نمایش'" class="space-y-4">
        <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-black">
          <!-- Progress Bar -->
          <div class="mb-8">
            <div class="flex justify-between mb-2">
              <span class="text-blue-600 font-medium">مرحله ۱ از ۳</span>
              <span class="text-gray-600">تکمیل اطلاعات شخصی</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div class="bg-blue-600 h-2 rounded-full" style="width: 33%"></div>
            </div>
          </div>

          <!-- Form Step 1 -->
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">نام</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">نام خانوادگی</label>
                <input type="text" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">شماره تماس</label>
              <div class="flex">
                <span class="inline-flex items-center px-4 rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  +98
                </span>
                <input type="tel" class="w-full px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">آدرس ایمیل</label>
              <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div class="flex justify-end space-x-4 space-x-reverse">
              <button type="button" class="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                انصراف
              </button>
              <button type="button" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                مرحله بعد
              </button>
            </div>
          </form>
        </div>
      </div>

      <Code v-else :code="
`<div class='max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8'>
  <!-- Progress Bar -->
  <div class='mb-8'>
    <div class='flex justify-between mb-2'>
      <span class='text-blue-600 font-medium'>مرحله ۱ از ۳</span>
      <span class='text-gray-600'>تکمیل اطلاعات شخصی</span>
    </div>
    <div class='w-full bg-gray-200 rounded-full h-2'>
      <div class='bg-blue-600 h-2 rounded-full' style='width: 33%'></div>
    </div>
  </div>

  <!-- Form Content -->
  <form class='space-y-6'>
    <!-- Form fields -->
    <div class='grid md:grid-cols-2 gap-6'>
      <!-- Name fields -->
    </div>

    <!-- Phone field -->
    <div>
      <label class='block text-sm font-medium text-gray-700 mb-1'>شماره تماس</label>
      <div class='flex'>
        <span class='inline-flex items-center px-4 rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
          +98
        </span>
        <input type='tel' class='w-full px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500' />
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class='flex justify-end space-x-4 space-x-reverse'>
      <!-- Buttons -->
    </div>
  </form>
</div>`" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blocks'
})

const activeTabSimple = ref('نمایش')
const activeTabContact = ref('نمایش')
const activeTabSearch = ref('نمایش')
const activeTabMultiStep = ref('نمایش')
</script>
