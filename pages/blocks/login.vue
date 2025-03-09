<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">صفحات ورود</h1>

    <!-- Simple Login Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="min-h-[400px] flex items-center justify-center bg-zinc-50">
          <div class="max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-zinc-900">ورود به حساب کاربری</h2>
              <p class="mt-2 text-zinc-600">به پنل کاربری خود خوش آمدید</p>
            </div>
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-zinc-700">ایمیل</label>
                <input type="email" 
                  class="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-zinc-300 
                         text-zinc-900 placeholder-zinc-400
                         focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent" />
              </div>
              <div>
                <label class="block text-sm font-medium text-zinc-700">رمز عبور</label>
                <input type="password" 
                  class="mt-1 block w-full px-3 py-2 bg-white rounded-md border border-zinc-300 
                         text-zinc-900 placeholder-zinc-400
                         focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:border-transparent" />
              </div>
              <button class="w-full bg-zinc-900 text-white rounded-md py-2 hover:bg-zinc-800">ورود</button>
            </form>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='min-h-[400px] flex items-center justify-center bg-gray-50'>
  <div class='max-w-md w-full space-y-8 p-6 bg-white rounded-xl shadow'>
    <div class='text-center'>
      <h2 class='text-2xl font-bold'>ورود به حساب کاربری</h2>
      <p class='mt-2 text-gray-600'>به پنل کاربری خود خوش آمدید</p>
    </div>
    <form class='space-y-6'>
      <div>
        <label class='block text-sm font-medium text-gray-700'>ایمیل</label>
        <input type='email' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500' />
      </div>
      <div>
        <label class='block text-sm font-medium text-gray-700'>رمز عبور</label>
        <input type='password' class='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500' />
      </div>
      <button class='w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600'>ورود</button>
    </form>
  </div>
</div>`" />
    </div>

    <!-- Split Login Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSplit" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSplit === 'نمایش'" class="space-y-4">
        <div class="min-h-[500px] flex bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="hidden md:block w-1/2 bg-gradient-to-tr from-blue-500 to-purple-500">
            <div class="flex items-center justify-center h-full text-white">
              <div class="text-center">
                <h2 class="text-3xl font-bold">خوش آمدید</h2>
                <p class="mt-4 text-lg">به جمع ما بپیوندید</p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/2 p-8">
            <div class="max-w-md mx-auto">
              <h2 class="text-2xl font-bold mb-8">ورود به حساب</h2>
              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700">ایمیل</label>
                  <input type="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">رمز عبور</label>
                  <input type="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                </div>
                <div class="flex items-center justify-between">
                  <label class="flex items-center">
                    <input type="checkbox" class="rounded border-gray-300 text-blue-500 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                    <span class="mr-2 text-sm text-gray-600">مرا به خاطر بسپار</span>
                  </label>
                  <a href="#" class="text-sm text-blue-500 hover:text-blue-600">فراموشی رمز؟</a>
                </div>
                <button class="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600">ورود</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<div class='min-h-[500px] flex bg-white rounded-xl shadow-lg overflow-hidden'>
  <!-- Left Side - Image/Gradient -->
  <div class='hidden md:block w-1/2 bg-gradient-to-tr from-blue-500 to-purple-500'>
    <div class='flex items-center justify-center h-full text-white'>
      <div class='text-center'>
        <h2 class='text-3xl font-bold'>خوش آمدید</h2>
        <p class='mt-4 text-lg'>به جمع ما بپیوندید</p>
      </div>
    </div>
  </div>
  <!-- Right Side - Login Form -->
  <div class='w-full md:w-1/2 p-8'>
    <!-- Form Content -->
  </div>
</div>`" />
    </div>

    <!-- Modern Login Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabModern" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabModern === 'نمایش'" class="space-y-4">
        <div class="min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
          <div class="w-full max-w-md">
            <div class="bg-white rounded-2xl shadow-2xl p-8">
              <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800">خوش آمدید</h2>
                <p class="text-gray-600 mt-2">برای ادامه وارد شوید</p>
              </div>

              <div class="space-y-4">
                <button class="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  <Icon name="uil:google" class="text-xl" />
                  <span>ورود با گوگل</span>
                </button>

                <div class="relative my-6">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="px-4 bg-white text-gray-500">یا با ایمیل ادامه دهید</span>
                  </div>
                </div>

                <div class="space-y-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">ایمیل</label>
                    <input type="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">رمز عبور</label>
                    <input type="password" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="حداقل ۸ کاراکتر" />
                  </div>
                  <div class="flex items-center justify-between">
                    <label class="flex items-center gap-2">
                      <input type="checkbox" class="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span class="text-sm text-gray-600">مرا به خاطر بسپار</span>
                    </label>
                    <a href="#" class="text-sm text-blue-600 hover:text-blue-700">فراموشی رمز؟</a>
                  </div>
                </div>

                <button class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-4 py-3 font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  ورود به حساب
                </button>
              </div>

              <p class="mt-6 text-center text-sm text-gray-600">
                حساب کاربری ندارید؟
                <a href="#" class="text-blue-600 hover:text-blue-700 font-medium">ثبت نام کنید</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code="
`<!-- Modern Login Form -->
<div class='min-h-[600px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6'>
  <div class='w-full max-w-md'>
    <div class='bg-white rounded-2xl shadow-2xl p-8'>
      <!-- Header -->
      <div class='text-center mb-8'>
        <h2 class='text-3xl font-bold text-gray-800'>خوش آمدید</h2>
        <p class='text-gray-600 mt-2'>برای ادامه وارد شوید</p>
      </div>

      <!-- Social Login & Form -->
      <div class='space-y-4'>
        <!-- Social Login Button -->
        <button class='w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 font-medium hover:bg-gray-50'>
          <Icon name='uil:google' class='text-xl' />
          <span>ورود با گوگل</span>
        </button>

        <!-- Divider -->
        <div class='relative my-6'>
          <!-- Divider content -->
        </div>

        <!-- Login Form -->
        <div class='space-y-6'>
          <!-- Form fields -->
        </div>

        <!-- Submit Button -->
        <button class='w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg px-4 py-3 font-medium hover:from-blue-700 hover:to-blue-800'>
          ورود به حساب
        </button>
      </div>
    </div>
  </div>
</div>`" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blocks'
})

const activeTabSimple = ref('نمایش')
const activeTabSplit = ref('نمایش')
const activeTabModern = ref('نمایش')
</script>
