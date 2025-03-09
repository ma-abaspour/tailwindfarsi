<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">فرم پرداخت</h1>

    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
          <form class="space-y-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">شماره کارت</label>
              <div class="relative">
                <input type="text" placeholder="0000-0000-0000-0000" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <img src="" alt="card" class="w-6 h-6" />
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">تاریخ انقضا</label>
                <input type="text" placeholder="MM/YY" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700">CVV</label>
                <input type="text" placeholder="123" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700">نام صاحب کارت</label>
              <input type="text" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <button class="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
              پرداخت
            </button>
          </form>
        </div>
      </div>

      <Code v-else :code="
`<div class='max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg'>
  <form class='space-y-6'>
    <div class='space-y-2'>
      <label class='block text-sm font-medium text-gray-700'>شماره کارت</label>
      <div class='relative'>
        <input type='text' placeholder='0000-0000-0000-0000' 
          class='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500' />
        <div class='absolute left-3 top-1/2 transform -translate-y-1/2'>
          <img src='/images/credit-card.svg' alt='card' class='w-6 h-6' />
        </div>
      </div>
    </div>

    <div class='grid grid-cols-2 gap-4'>
      <!-- Date and CVV inputs -->
    </div>

    <div class='space-y-2'>
      <label class='block text-sm font-medium text-gray-700'>نام صاحب کارت</label>
      <input type='text' 
        class='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500' />
    </div>

    <button class='w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700'>
      پرداخت
    </button>
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
</script>
