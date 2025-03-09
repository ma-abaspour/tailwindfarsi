<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">اثبات اجتماعی</h1>

    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="bg-white py-16 px-4">
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">مشتریان ما چه می‌گویند</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-gray-50 p-6 rounded-xl">
                <div class="flex items-center mb-4">
                  <div class="text-yellow-400 flex">
                    <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">"بهترین تجربه خرید آنلاین را با این سایت داشتم. پشتیبانی عالی و محصولات با کیفیت."</p>
                <div class="font-medium">علی محمدی</div>
                <div class="text-sm text-gray-500">مدیر عامل تک‌نما</div>
              </div>
              <!-- Repeat for other testimonials -->
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='bg-white py-16 px-4'>
  <div class='max-w-7xl mx-auto'>
    <h2 class='text-3xl font-bold text-center mb-12'>مشتریان ما چه می‌گویند</h2>
    <div class='grid md:grid-cols-3 gap-8'>
      <div class='bg-gray-50 p-6 rounded-xl'>
        <div class='flex items-center mb-4'>
          <div class='text-yellow-400 flex'>
            <!-- Star SVGs -->
          </div>
        </div>
        <p class='text-gray-600 mb-4'>بهترین تجربه خرید آنلاین را با این سایت داشتم. پشتیبانی عالی و محصولات با کیفیت.</p>
        <div class='font-medium'>علی محمدی</div>
        <div class='text-sm text-gray-500'>مدیر عامل تک‌نما</div>
      </div>
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
