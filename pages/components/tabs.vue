<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">تب‌ها</h1>

    <!-- Basic Tabs -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">تب‌های ساده</h2>
        <div class="border-b border-zinc-800">
          <div class="flex gap-6">
            <button 
              v-for="tab in ['خانه', 'پروفایل', 'تنظیمات']" 
              :key="tab"
              :class="[
                'pb-3 px-1',
                activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-400 hover:text-zinc-200'
              ]"
              @click="activeTab = tab"
            >
              {{ tab }}
            </button>
          </div>
        </div>
        <div class="py-4">
          <div v-if="activeTab === 'خانه'">محتوای تب خانه</div>
          <div v-if="activeTab === 'پروفایل'">محتوای تب پروفایل</div>
          <div v-if="activeTab === 'تنظیمات'">محتوای تب تنظیمات</div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='tabsBasicCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Pills Tabs -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabPills" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabPills === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">تب‌های گرد</h2>
        <div class="bg-zinc-900 p-1 rounded-lg inline-flex">
          <button 
            v-for="tab in ['روزانه', 'هفتگی', 'ماهانه']" 
            :key="tab"
            :class="[
              'px-4 py-2 rounded-lg',
              activeTab2 === tab ? 'bg-blue-500 text-white' : 'text-zinc-400 hover:text-zinc-200'
            ]"
            @click="activeTab2 = tab"
          >
            {{ tab }}
          </button>
        </div>
        <div class="py-4">
          <div v-if="activeTab2 === 'روزانه'">آمار روزانه</div>
          <div v-if="activeTab2 === 'هفتگی'">آمار هفتگی</div>
          <div v-if="activeTab2 === 'ماهانه'">آمار ماهانه</div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='tabsPillsCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Icon Tabs -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabIcon" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabIcon === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">تب‌های آیکن‌دار</h2>
        <div class="border-b border-zinc-800">
          <div class="flex gap-6">
            <button 
              v-for="tab in iconTabs" 
              :key="tab.name"
              :class="[
                'pb-3 px-1 flex items-center gap-2',
                activeTab3 === tab.name ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-400 hover:text-zinc-200'
              ]"
              @click="activeTab3 = tab.name"
            >
              <Icon :name="tab.icon" />
              <span>{{ tab.name }}</span>
            </button>
          </div>
        </div>
        <div class="py-4">
          <div v-if="activeTab3 === 'داشبورد'">محتوای داشبورد</div>
          <div v-if="activeTab3 === 'تیکت‌ها'">محتوای تیکت‌ها</div>
          <div v-if="activeTab3 === 'پیام‌ها'">محتوای پیام‌ها</div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='tabsIconCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
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
const activeTabPills = ref('نمایش')
const activeTabIcon = ref('نمایش')

const activeTab = ref('خانه')
const activeTab2 = ref('روزانه')
const activeTab3 = ref('داشبورد')

const iconTabs = [
  { name: 'داشبورد', icon: 'uil:dashboard' },
  { name: 'تیکت‌ها', icon: 'uil:ticket' },
  { name: 'پیام‌ها', icon: 'uil:envelope' },
]

const tabsBasicCode = `<div class="border-b border-zinc-800">
  <div class="flex gap-6">
    <button 
      v-for="tab in ['خانه', 'پروفایل', 'تنظیمات']" 
      :key="tab"
      :class="[
        'pb-3 px-1',
        activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-400'
      ]"
      @click="activeTab = tab"
    >
      {{ tab }}
    </button>
  </div>
</div>`

const tabsPillsCode = `<div class="bg-zinc-900 p-1 rounded-lg inline-flex">
  <button 
    v-for="tab in ['روزانه', 'هفتگی', 'ماهانه']" 
    :key="tab"
    :class="[
      'px-4 py-2 rounded-lg',
      activeTab === tab ? 'bg-blue-500 text-white' : 'text-zinc-400'
    ]"
    @click="activeTab = tab"
  >
    {{ tab }}
  </button>
</div>`

const tabsIconCode = `<button 
  :class="[
    'pb-3 px-1 flex items-center gap-2',
    activeTab === tab.name ? 'text-blue-500 border-b-2 border-blue-500' : 'text-zinc-400'
  ]"
  @click="activeTab = tab.name"
>
  <Icon :name="tab.icon" />
  <span>{{ tab.name }}</span>
</button>`
</script>
