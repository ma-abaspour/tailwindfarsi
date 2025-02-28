<template>
  <div class="w-full" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">دکمه‌ها</h1>
    
    <!-- Tabs -->
    <div class="mb-6 border-b border-zinc-800">
      <button 
        v-for="tab in ['نمایش', 'کد']" 
        :key="tab"
        @click="activeTab = tab"
        :class="[
          'px-4 py-2 text-sm font-medium',
          activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Content -->
    <div v-if="activeTab === 'نمایش'" class="space-y-8">
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های اصلی</h2>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            دکمه اصلی
          </button>
          <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            ثبت تغییرات
          </button>
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            حذف
          </button>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های خطی</h2>
        <div class="flex flex-wrap gap-4">
          <button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg">
            دکمه خطی
          </button>
          <button class="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg">
            تایید
          </button>
        </div>
      </div>
    </div>

    <div v-else class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
      <pre class="text-sm text-zinc-300">
&lt;button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"&gt;
  دکمه اصلی
&lt;/button&gt;

&lt;button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"&gt;
  دکمه خطی
&lt;/button&gt;</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTab = ref('نمایش')
</script>