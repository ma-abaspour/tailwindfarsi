<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">منوهای کشویی</h1>

    <!-- Basic Dropdown -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">منوی کشویی ساده</h2>
        <div class="relative inline-block">
          <button 
            @click="showDropdown1 = !showDropdown1"
            class="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 inline-flex items-center gap-2"
          >
            <span>منوی کشویی</span>
            <Icon name="uil:angle-down" />
          </button>
          
          <div v-if="showDropdown1" class="absolute mt-2 w-48 rounded-lg bg-zinc-800 shadow-lg py-2">
            <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700">پروفایل</a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700">تنظیمات</a>
            <a href="#" class="block px-4 py-2 text-sm text-red-400 hover:bg-zinc-700">خروج</a>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='dropdownBasicCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
      </div>
    </div>

    <!-- Dropdown with Icons -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabIcons" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabIcons === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">منوی کشویی با آیکن</h2>
        <div class="relative inline-block">
          <button 
            @click="showDropdown2 = !showDropdown2"
            class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 inline-flex items-center gap-2"
          >
            <Icon name="uil:user" />
            <span>حساب کاربری</span>
            <Icon name="uil:angle-down" />
          </button>
          
          <div v-if="showDropdown2" class="absolute mt-2 w-48 rounded-lg bg-zinc-800 shadow-lg py-2">
            <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700 flex items-center gap-2">
              <Icon name="uil:user" />
              <span>پروفایل</span>
            </a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700 flex items-center gap-2">
              <Icon name="uil:setting" />
              <span>تنظیمات</span>
            </a>
            <a href="#" class="block px-4 py-2 text-sm text-red-400 hover:bg-zinc-700 flex items-center gap-2">
              <Icon name="uil:signout" />
              <span>خروج</span>
            </a>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='dropdownIconCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
      </div>
    </div>

    <!-- Dropdown Divider -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabDivider" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabDivider === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">منوی کشویی با جداکننده</h2>
        <div class="relative inline-block">
          <button 
            @click="showDropdown3 = !showDropdown3"
            class="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 inline-flex items-center gap-2"
          >
            <span>تنظیمات</span>
            <Icon name="uil:angle-down" />
          </button>
          
          <div v-if="showDropdown3" class="absolute mt-2 w-48 rounded-lg bg-zinc-800 shadow-lg py-2">
            <div class="px-4 py-2 text-sm text-zinc-400">علی محمدی</div>
            <div class="border-t border-zinc-700 my-2"></div>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700">پروفایل</a>
            <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700">تنظیمات</a>
            <div class="border-t border-zinc-700 my-2"></div>
            <a href="#" class="block px-4 py-2 text-sm text-red-400 hover:bg-zinc-700">خروج</a>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='dropdownDividerCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

definePageMeta({
  layout: 'components'
})

const activeTabBasic = ref('نمایش')
const activeTabIcons = ref('نمایش')
const activeTabDivider = ref('نمایش')

const showDropdown1 = ref(false)
const showDropdown2 = ref(false)
const showDropdown3 = ref(false)

const dropdownBasicCode = `<div class="relative inline-block">
  <button 
    @click="showDropdown = !showDropdown"
    class="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 inline-flex items-center gap-2"
  >
    <span>منوی کشویی</span>
    <Icon name="uil:angle-down" />
  </button>
  
  <div v-if="showDropdown" class="absolute mt-2 w-48 rounded-lg bg-zinc-800 shadow-lg py-2">
    <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700">پروفایل</a>
    <a href="#" class="block px-4 py-2 text-sm hover:bg-zinc-700">تنظیمات</a>
    <a href="#" class="block px-4 py-2 text-sm text-red-400 hover:bg-zinc-700">خروج</a>
  </div>
</div>`

// ... other code exports
</script>
