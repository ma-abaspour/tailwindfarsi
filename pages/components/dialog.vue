<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">مودال‌ها</h1>

    <!-- Basic Modal -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">مودال پایه</h2>
        <button
          @click="showModal1 = true"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          نمایش مودال
        </button>

        <!-- Basic Modal -->
        <Teleport to="body">
          <div v-if="showModal1" class="fixed inset-0 z-50 overflow-y-auto" role="dialog">
            <div class="flex min-h-screen items-center justify-center p-4">
              <div class="fixed inset-0 bg-black/50" @click="showModal1 = false"></div>
              
              <div class="relative bg-zinc-900 rounded-xl p-6 max-w-md w-full">
                <div class="flex justify-between items-start mb-4">
                  <h3 class="text-lg font-semibold">عنوان مودال</h3>
                  <button @click="showModal1 = false" class="text-zinc-400 hover:text-zinc-200">
                    <Icon name="uil:times" />
                  </button>
                </div>
                
                <div class="mb-6">
                  <p class="text-zinc-400">این یک مودال پایه است که می‌توانید از آن برای نمایش محتوا استفاده کنید.</p>
                </div>
                
                <div class="flex justify-end gap-3">
                  <button
                    @click="showModal1 = false"
                    class="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700"
                  >
                    انصراف
                  </button>
                  <button
                    @click="showModal1 = false"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    تایید
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='modalBasicCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Alert Modal -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabAlert" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabAlert === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">مودال هشدار</h2>
        <button
          @click="showModal2 = true"
          class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          حذف آیتم
        </button>

        <!-- Alert Modal -->
        <Teleport to="body">
          <div v-if="showModal2" class="fixed inset-0 z-50 overflow-y-auto" role="dialog">
            <div class="flex min-h-screen items-center justify-center p-4">
              <div class="fixed inset-0 bg-black/50" @click="showModal2 = false"></div>
              
              <div class="relative bg-zinc-900 rounded-xl p-6 max-w-md w-full">
                <div class="flex items-center gap-4 mb-4">
                  <div class="p-3 rounded-full bg-red-500/10">
                    <Icon name="uil:exclamation-circle" class="text-red-500" size="24"/>
                  </div>
                  <h3 class="text-lg font-semibold">حذف آیتم</h3>
                </div>
                
                <div class="mb-6">
                  <p class="text-zinc-400">آیا از حذف این آیتم اطمینان دارید؟ این عملیات قابل بازگشت نیست.</p>
                </div>
                
                <div class="flex justify-end gap-3">
                  <button
                    @click="showModal2 = false"
                    class="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700"
                  >
                    انصراف
                  </button>
                  <button
                    @click="showModal2 = false"
                    class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    حذف
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='modalAlertCode'
          highlightjs
          lang="html"
          theme="neon-bunny"
          dir="ltr"
        />
      </div>
    </div>

    <!-- Form Modal -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabForm" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabForm === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">مودال فرم</h2>
        <button
          @click="showModal3 = true"
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          ثبت نام
        </button>

        <!-- Form Modal -->
        <Teleport to="body">
          <div v-if="showModal3" class="fixed inset-0 z-50 overflow-y-auto" role="dialog">
            <div class="flex min-h-screen items-center justify-center p-4">
              <div class="fixed inset-0 bg-black/50" @click="showModal3 = false"></div>
              
              <div class="relative bg-zinc-900 rounded-xl p-6 max-w-md w-full">
                <div class="flex justify-between items-start mb-6">
                  <h3 class="text-lg font-semibold">ثبت نام</h3>
                  <button @click="showModal3 = false" class="text-zinc-400 hover:text-zinc-200">
                    <Icon name="uil:times" />
                  </button>
                </div>
                
                <div class="space-y-4 mb-6">
                  <div>
                    <label class="block text-sm font-medium mb-2">نام کاربری</label>
                    <input 
                      type="text"
                      class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">ایمیل</label>
                    <input 
                      type="email"
                      class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-2">رمز عبور</label>
                    <input 
                      type="password"
                      class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                  </div>
                </div>
                
                <div class="flex justify-end gap-3">
                  <button
                    @click="showModal3 = false"
                    class="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700"
                  >
                    انصراف
                  </button>
                  <button
                    @click="showModal3 = false"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  >
                    ثبت نام
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Teleport>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock
          :code='modalFormCode'
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
const activeTabAlert = ref('نمایش')
const activeTabForm = ref('نمایش')

const showModal1 = ref(false)
const showModal2 = ref(false)
const showModal3 = ref(false)

const modalBasicCode = `<button @click="showModal = true">نمایش مودال</button>

<Teleport to="body">
  <div v-if="showModal" class="fixed inset-0 z-50 overflow-y-auto" role="dialog">
    <div class="flex min-h-screen items-center justify-center p-4">
      <div class="fixed inset-0 bg-black/50" @click="showModal = false"></div>
      
      <div class="relative bg-zinc-900 rounded-xl p-6 max-w-md w-full">
        <!-- Modal content -->
      </div>
    </div>
  </div>
</Teleport>`

const modalAlertCode = `<!-- Alert Modal Structure -->
<div class="flex items-center gap-4 mb-4">
  <div class="p-3 rounded-full bg-red-500/10">
    <Icon name="uil:exclamation-circle" class="text-red-500" size="24"/>
  </div>
  <h3 class="text-lg font-semibold">حذف آیتم</h3>
</div>`

const modalFormCode = `<!-- Form Modal Content -->
<div class="space-y-4 mb-6">
  <div>
    <label class="block text-sm font-medium mb-2">نام کاربری</label>
    <input 
      type="text"
      class="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none"
    >
  </div>
  <!-- More form fields... -->
</div>`
</script>