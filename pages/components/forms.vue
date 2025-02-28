<template>
  <div class="w-full" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">فرم‌ها</h1>
    
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
        <h2 class="text-xl font-semibold">ورودی‌های متنی</h2>
        <div class="max-w-md space-y-4">
          <div class="space-y-2">
            <label class="block text-sm font-medium">نام کاربری</label>
            <input 
              type="text" 
              class="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="نام کاربری خود را وارد کنید"
            >
          </div>
          
          <div class="space-y-2">
            <label class="block text-sm font-medium">ایمیل</label>
            <input 
              type="email" 
              class="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
              placeholder="email@example.com"
              dir="ltr"
            >
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold">انتخاب‌ها</h2>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <input type="checkbox" class="rounded border-zinc-700 bg-zinc-900 text-blue-500">
            <label class="text-sm">مرا به خاطر بسپار</label>
          </div>
          <div class="flex items-center gap-2">
            <input type="radio" class="border-zinc-700 bg-zinc-900 text-blue-500">
            <label class="text-sm">گزینه اول</label>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
      <pre class="text-sm text-zinc-300">
&lt;div class="space-y-2"&gt;
  &lt;label class="block text-sm font-medium"&gt;نام کاربری&lt;/label&gt;
  &lt;input 
    type="text" 
    class="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
    placeholder="نام کاربری خود را وارد کنید"
  &gt;
&lt;/div&gt;

&lt;div class="flex items-center gap-2"&gt;
  &lt;input type="checkbox" class="rounded border-zinc-700 bg-zinc-900 text-blue-500"&gt;
  &lt;label class="text-sm"&gt;مرا به خاطر بسپار&lt;/label&gt;
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