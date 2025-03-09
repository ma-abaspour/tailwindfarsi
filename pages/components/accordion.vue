<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">آکاردئون</h1>

    <!-- Basic Accordion -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">آکاردئون ساده</h2>
        <div class="space-y-2">
          <div v-for="(item, index) in accordionItems" :key="index" class="border border-zinc-800 rounded-lg overflow-hidden">
            <button 
              @click="toggleAccordion(index)"
              class="w-full px-4 py-3 flex justify-between items-center hover:bg-zinc-800/50"
            >
              <span>{{ item.title }}</span>
              <Icon 
                name="uil:angle-down" 
                :class="[activeAccordion === index ? 'rotate-180' : '', 'transition-transform']"
              />
            </button>
            <div 
              v-show="activeAccordion === index"
              class="px-4 py-3 text-zinc-400 border-t border-zinc-800"
            >
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='accordionBasicCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
      </div>
    </div>

    <!-- Bordered Accordion -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBordered" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBordered === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">آکاردئون با حاشیه</h2>
        <div class="space-y-4">
          <div v-for="(item, index) in accordionItems" :key="index" class="rounded-lg overflow-hidden">
            <div 
              :class="[
                'border border-zinc-800 rounded-lg overflow-hidden',
                activeAccordion2 === index ? 'border-blue-500/50' : ''
              ]"
            >
              <button 
                @click="toggleAccordion2(index)"
                class="w-full px-4 py-3 flex justify-between items-center hover:bg-zinc-800/50"
              >
                <span>{{ item.title }}</span>
                <Icon 
                  name="uil:angle-down" 
                  :class="[activeAccordion2 === index ? 'rotate-180 text-blue-500' : '', 'transition-transform']"
                />
              </button>
              <div 
                v-show="activeAccordion2 === index"
                class="px-4 py-3 text-zinc-400 border-t border-zinc-800"
              >
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='accordionBorderedCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
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
const activeTabBordered = ref('نمایش')

const activeAccordion = ref(0)
const activeAccordion2 = ref(0)

const accordionItems = [
  {
    title: 'عنوان بخش اول',
    content: 'این محتوای بخش اول است که می‌تواند شامل متن، تصویر یا هر المان دیگری باشد.'
  },
  {
    title: 'عنوان بخش دوم',
    content: 'این محتوای بخش دوم است. برای باز و بسته کردن روی عنوان کلیک کنید.'
  },
  {
    title: 'عنوان بخش سوم',
    content: 'این محتوای بخش سوم است. می‌توانید استایل‌های مختلفی به این بخش اضافه کنید.'
  }
]

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? -1 : index
}

const toggleAccordion2 = (index: number) => {
  activeAccordion2.value = activeAccordion2.value === index ? -1 : index
}

// ... code exports
</script>
