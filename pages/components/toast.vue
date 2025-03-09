<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">اعلان‌ها</h1>

    <!-- Basic Toast -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">اعلان ساده</h2>
        <button 
          @click="showToast('basic')"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          نمایش اعلان
        </button>

        <!-- Toast Container -->
        <Teleport to="body">
          <div class="fixed bottom-4 left-4 z-50 space-y-4">
            <TransitionGroup name="toast">
              <div 
                v-if="toasts.basic"
                key="basic"
                class="bg-zinc-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3"
              >
                <Icon name="uil:info-circle" class="text-blue-500"/>
                <span>عملیات با موفقیت انجام شد</span>
              </div>
            </TransitionGroup>
          </div>
        </Teleport>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='toastBasicCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
      </div>
    </div>

    <!-- Toast Types -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabTypes" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabTypes === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">انواع اعلان</h2>
        <div class="flex flex-wrap gap-4">
          <button 
            @click="showToast('success')"
            class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            موفقیت
          </button>

          <button 
            @click="showToast('error')"
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            خطا
          </button>

          <button 
            @click="showToast('warning')"
            class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            هشدار
          </button>
        </div>

        <!-- Toast Container -->
        <Teleport to="body">
          <div class="fixed bottom-4 left-4 z-50 space-y-4">
            <TransitionGroup name="toast">
              <div 
                v-if="toasts.success"
                key="success"
                class="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3"
              >
                <Icon name="uil:check-circle"/>
                <span>عملیات با موفقیت انجام شد</span>
              </div>

              <div 
                v-if="toasts.error"
                key="error"
                class="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3"
              >
                <Icon name="uil:times-circle"/>
                <span>خطا در انجام عملیات</span>
              </div>

              <div 
                v-if="toasts.warning"
                key="warning"
                class="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 px-4 py-3 rounded-lg shadow-lg flex items-center gap-3"
              >
                <Icon name="uil:exclamation-triangle"/>
                <span>هشدار! لطفا توجه کنید</span>
              </div>
            </TransitionGroup>
          </div>
        </Teleport>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='toastTypesCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
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
const activeTabTypes = ref('نمایش')

const toasts = reactive({
  basic: false,
  success: false,
  error: false,
  warning: false
})

const showToast = (type: string) => {
  toasts[type] = true
  setTimeout(() => {
    toasts[type] = false
  }, 3000)
}

// ... code exports
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
