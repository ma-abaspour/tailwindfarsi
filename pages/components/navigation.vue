<template>
  <div class="w-full" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">ناوبری</h1>
    
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
      <!-- Basic Navigation -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">منوی افقی</h2>
        <nav class="flex items-center gap-6 p-4 bg-zinc-900 rounded-lg">
          <a href="#" class="text-blue-500">خانه</a>
          <a href="#" class="text-zinc-400 hover:text-white transition-colors">محصولات</a>
          <a href="#" class="text-zinc-400 hover:text-white transition-colors">درباره ما</a>
          <a href="#" class="text-zinc-400 hover:text-white transition-colors">تماس</a>
        </nav>
      </div>

      <!-- Vertical Navigation -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">منوی عمودی</h2>
        <nav class="w-64 space-y-2 p-4 bg-zinc-900 rounded-lg">
          <a href="#" class="flex items-center gap-2 px-3 py-2 text-blue-500 bg-blue-500/10 rounded-lg">
            <Icon name="uil:home" />
            <span>داشبورد</span>
          </a>
          <a href="#" class="flex items-center gap-2 px-3 py-2 text-zinc-400 hover:bg-zinc-800 rounded-lg">
            <Icon name="uil:user" />
            <span>پروفایل</span>
          </a>
          <a href="#" class="flex items-center gap-2 px-3 py-2 text-zinc-400 hover:bg-zinc-800 rounded-lg">
            <Icon name="uil:setting" />
            <span>تنظیمات</span>
          </a>
        </nav>
      </div>

      <!-- Breadcrumbs -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">مسیر ناوبری</h2>
        <nav class="flex items-center gap-2 text-sm">
          <a href="#" class="text-zinc-400 hover:text-white">خانه</a>
          <Icon name="uil:angle-left" class="text-zinc-600" />
          <a href="#" class="text-zinc-400 hover:text-white">محصولات</a>
          <Icon name="uil:angle-left" class="text-zinc-600" />
          <span class="text-zinc-200">جزئیات</span>
        </nav>
      </div>
    </div>

    <div v-else class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
      <pre class="text-sm text-zinc-300">
&lt;!-- Horizontal Navigation --&gt;
&lt;nav class="flex items-center gap-6 p-4 bg-zinc-900 rounded-lg"&gt;
  &lt;a href="#" class="text-blue-500"&gt;خانه&lt;/a&gt;
  &lt;a href="#" class="text-zinc-400 hover:text-white transition-colors"&gt;محصولات&lt;/a&gt;
  &lt;!-- ... --&gt;
&lt;/nav&gt;

&lt;!-- Vertical Navigation --&gt;
&lt;nav class="w-64 space-y-2 p-4 bg-zinc-900 rounded-lg"&gt;
  &lt;a href="#" class="flex items-center gap-2 px-3 py-2 text-blue-500 bg-blue-500/10 rounded-lg"&gt;
    &lt;Icon name="uil:home" /&gt;
    &lt;span&gt;داشبورد&lt;/span&gt;
  &lt;/a&gt;
  &lt;!-- ... --&gt;
&lt;/nav&gt;</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTab = ref('نمایش')
</script>
