<template>
  <div class="w-full" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">کارت‌ها</h1>
    
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
      <!-- Basic Cards -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">کارت ساده</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
            <h3 class="text-lg font-semibold mb-2">عنوان کارت</h3>
            <p class="text-zinc-400">این یک نمونه متن برای نمایش محتوای کارت است.</p>
          </div>

          <div class="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h3 class="text-lg font-semibold mb-2">کارت گرادیانت</h3>
            <p class="text-zinc-400">این یک نمونه کارت با پس‌زمینه گرادیانت است.</p>
          </div>
        </div>
      </div>

      <!-- Interactive Cards -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">کارت‌های تعاملی</h2>
        <div class="grid gap-6 md:grid-cols-2">
          <div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer">
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                <Icon name="uil:star" />
              </div>
              <h3 class="text-lg font-semibold">کارت قابل کلیک</h3>
            </div>
            <p class="text-zinc-400">روی این کارت می‌توانید کلیک کنید.</p>
          </div>

          <div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
            <h3 class="text-lg font-semibold mb-4">کارت با دکمه</h3>
            <p class="text-zinc-400 mb-4">این کارت شامل یک دکمه عملیات است.</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              مشاهده بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
      <pre class="text-sm text-zinc-300">
&lt;!-- Basic Card --&gt;
&lt;div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800"&gt;
  &lt;h3 class="text-lg font-semibold mb-2"&gt;عنوان کارت&lt;/h3&gt;
  &lt;p class="text-zinc-400"&gt;محتوای کارت&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Interactive Card --&gt;
&lt;div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer"&gt;
  &lt;div class="flex items-center gap-4 mb-4"&gt;
    &lt;div class="p-3 rounded-lg bg-blue-500/10 text-blue-500"&gt;
      &lt;Icon name="uil:star" /&gt;
    &lt;/div&gt;
    &lt;h3 class="text-lg font-semibold"&gt;کارت قابل کلیک&lt;/h3&gt;
  &lt;/div&gt;
  &lt;p class="text-zinc-400"&gt;محتوای کارت&lt;/p&gt;
&lt;/div&gt;</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTab = ref('نمایش')
</script>
