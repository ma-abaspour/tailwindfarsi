<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">دعوت به عمل</h1>

    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="bg-gray-900 text-white py-16 px-4">
          <div class="max-w-4xl mx-auto text-center space-y-8">
            <h2 class="text-3xl md:text-5xl font-bold">به جمع ما بپیوندید</h2>
            <p class="text-gray-300 text-lg max-w-2xl mx-auto">همین امروز ثبت‌نام کنید و از ۳۰ روز دوره آزمایشی رایگان بهره‌مند شوید.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input type="email" placeholder="آدرس ایمیل" class="px-6 py-3 rounded-lg w-full sm:w-80 text-gray-900" />
              <button class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 w-full sm:w-auto">
                شروع دوره آزمایشی
              </button>
            </div>
            <p class="text-sm text-gray-400">هیچ کارت اعتباری مورد نیاز نیست</p>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='bg-gray-900 text-white py-16 px-4'>
  <div class='max-w-4xl mx-auto text-center space-y-8'>
    <h2 class='text-3xl md:text-5xl font-bold'>به جمع ما بپیوندید</h2>
    <p class='text-gray-300 text-lg max-w-2xl mx-auto'>همین امروز ثبت‌نام کنید و از ۳۰ روز دوره آزمایشی رایگان بهره‌مند شوید.</p>
    <div class='flex flex-col sm:flex-row gap-4 justify-center items-center'>
      <input type='email' placeholder='آدرس ایمیل' class='px-6 py-3 rounded-lg w-full sm:w-80 text-gray-900' />
      <button class='bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 w-full sm:w-auto'>
        شروع دوره آزمایشی
      </button>
    </div>
    <p class='text-sm text-gray-400'>هیچ کارت اعتباری مورد نیاز نیست</p>
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
