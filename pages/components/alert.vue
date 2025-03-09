<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">هشدارها</h1>

    <!-- Basic Alerts -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">هشدارهای پایه</h2>
        <div class="space-y-4">
          <div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
            اطلاعات مهم
          </div>
          
          <div class="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
            عملیات با موفقیت انجام شد
          </div>
          
          <div class="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500">
            هشدار! لطفا توجه کنید
          </div>
          
          <div class="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
            خطا در انجام عملیات
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='alertBasicCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Alerts with Icons -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabIcons" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabIcons === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">هشدارها با آیکن</h2>
        <div class="space-y-4">
          <div class="flex items-center gap-3 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
            <Icon name="uil:info-circle" />
            <span>اطلاعات مهم</span>
          </div>
          
          <div class="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
            <Icon name="uil:check-circle" />
            <span>عملیات با موفقیت انجام شد</span>
          </div>
          
          <div class="flex items-center gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-500">
            <Icon name="uil:exclamation-triangle" />
            <span>هشدار! لطفا توجه کنید</span>
          </div>
          
          <div class="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
            <Icon name="uil:times-circle" />
            <span>خطا در انجام عملیات</span>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='alertIconCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Dismissible Alerts -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabDismiss" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabDismiss === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">هشدارهای قابل بستن</h2>
        <div class="space-y-4">
          <div v-if="showAlert1" class="flex items-center justify-between p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
            <div class="flex items-center gap-3">
              <Icon name="uil:info-circle" />
              <span>اطلاعات مهم</span>
            </div>
            <button @click="showAlert1 = false" class="hover:bg-blue-500/20 p-1 rounded">
              <Icon name="uil:times" />
            </button>
          </div>
          
          <div v-if="showAlert2" class="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
            <div class="flex items-center gap-3">
              <Icon name="uil:times-circle" />
              <span>خطا در انجام عملیات</span>
            </div>
            <button @click="showAlert2 = false" class="hover:bg-red-500/20 p-1 rounded">
              <Icon name="uil:times" />
            </button>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='alertDismissCode'
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
const activeTabIcons = ref('نمایش')
const activeTabDismiss = ref('نمایش')

const showAlert1 = ref(true)
const showAlert2 = ref(true)

const alertBasicCode = `<div class="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
  اطلاعات مهم
</div>

<div class="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500">
  عملیات با موفقیت انجام شد
</div>`

const alertIconCode = `<div class="flex items-center gap-3 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
  <Icon name="uil:info-circle" />
  <span>اطلاعات مهم</span>
</div>`

const alertDismissCode = `<div v-if="showAlert" class="flex items-center justify-between p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
  <div class="flex items-center gap-3">
    <Icon name="uil:info-circle" />
    <span>اطلاعات مهم</span>
  </div>
  <button @click="showAlert = false" class="hover:bg-blue-500/20 p-1 rounded">
    <Icon name="uil:times" />
  </button>
</div>`
</script>

<style scoped>
</style>
