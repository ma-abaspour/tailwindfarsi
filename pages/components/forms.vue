<template>
  <div class="w-full min-h-[calc(100vh-4rem)]" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">فرم‌ها</h1>

    <!-- Input Fields -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabInputs = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabInputs === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabInputs === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">فیلدهای ورودی</h2>
        <div class="max-w-md space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">ایمیل</label>
            <input 
              type="email" 
              class="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="example@email.com"
            >
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">رمز عبور</label>
            <input 
              type="password" 
              class="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="********"
            >
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// Input fields code...
        </pre>
      </div>
    </div>

    <!-- Checkboxes & Radio -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabCheckbox = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabCheckbox === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabCheckbox === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">چک‌باکس و رادیو</h2>
        <div class="max-w-md space-y-4">
          <label class="flex items-center space-x-3 space-x-reverse">
            <input type="checkbox" class="w-5 h-5 rounded border-zinc-800 text-blue-500 focus:ring-blue-500">
            <span>مرا به خاطر بسپار</span>
          </label>
          
          <div class="space-y-2">
            <label class="flex items-center space-x-3 space-x-reverse">
              <input type="radio" name="plan" class="w-5 h-5 border-zinc-800 text-blue-500 focus:ring-blue-500">
              <span>پلن رایگان</span>
            </label>
            <label class="flex items-center space-x-3 space-x-reverse">
              <input type="radio" name="plan" class="w-5 h-5 border-zinc-800 text-blue-500 focus:ring-blue-500">
              <span>پلن حرفه‌ای</span>
            </label>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// Checkbox and radio code...
        </pre>
      </div>
    </div>

    <!-- Select & Textarea -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabSelect = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabSelect === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabSelect === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">منو کشویی و متن چند خطی</h2>
        <div class="max-w-md space-y-4">
          <div>
            <label class="block text-sm font-medium mb-2">انتخاب کشور</label>
            <select class="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-blue-500 focus:outline-none">
              <option>ایران</option>
              <option>آلمان</option>
              <option>فرانسه</option>
              <option>انگلستان</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-2">توضیحات</label>
            <textarea 
              class="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-blue-500 focus:outline-none"
              rows="4"
              placeholder="توضیحات خود را وارد کنید..."
            ></textarea>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// Select and textarea code...
        </pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTabInputs = ref('نمایش')
const activeTabCheckbox = ref('نمایش')
const activeTabSelect = ref('نمایش')
</script>