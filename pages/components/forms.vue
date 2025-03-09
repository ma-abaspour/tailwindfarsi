<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">فرم‌ها</h1>

    <!-- Input Fields Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs
        v-model="activeTabInputs"
        :tabs="['نمایش', 'کد']"
      />

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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4 overflow-x-auto">
        <div class="min-w-[500px]">
          <VCodeBlock
            :code='`<div class="max-w-md space-y-4">
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
</div>`'
            highlightjs
            lang="html"
            theme="neon-bunny"
            dir="ltr"
          />
        </div>
      </div>
    </div>

    <!-- Checkboxes & Radio -->
    <div class="max-w-4xl overflow-auto">
      <Tabs
        v-model="activeTabCheckbox"
        :tabs="['نمایش', 'کد']"
      />

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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4 overflow-x-auto">
        <div class="min-w-[500px]">
          <VCodeBlock
            :code='`<div class="max-w-md space-y-4">
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
</div>`'
            highlightjs
            lang="html"
            theme="neon-bunny"
            dir="ltr"
          />
        </div>
      </div>
    </div>

    <!-- Select & Textarea -->
    <div class="max-w-4xl overflow-auto">
      <Tabs
        v-model="activeTabSelect"
        :tabs="['نمایش', 'کد']"
      />

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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4 overflow-x-auto">
        <div class="min-w-[500px]">
          <VCodeBlock
            :code='`<div class="max-w-md space-y-4">
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
</div>`'
            highlightjs
            lang="html"
            theme="neon-bunny"
            dir="ltr"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

definePageMeta({
  layout: 'components'
})

const activeTabInputs = ref('نمایش')
const activeTabCheckbox = ref('نمایش')
const activeTabSelect = ref('نمایش')
</script>

<style scoped>
</style>