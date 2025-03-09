<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">کارت‌ها</h1>

    <!-- Basic Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
          <h3 class="text-lg font-semibold mb-2">کارت پایه</h3>
          <p class="text-zinc-400">یک کارت ساده با استایل‌های پایه که می‌تواند برای نمایش محتوای کوتاه استفاده شود.</p>
        </div>

        <div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
          <h3 class="text-lg font-semibold mb-4">کارت با دکمه</h3>
          <p class="text-zinc-400 mb-4">این کارت شامل یک دکمه عملیات است.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            مشاهده بیشتر
          </button>
        </div>
      </div>

      <Code v-else :code='
`<div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
  <h3 class="text-lg font-semibold mb-2">کارت پایه</h3>
  <p class="text-zinc-400">یک کارت ساده با استایل‌های پایه که می‌تواند برای نمایش محتوای کوتاه استفاده شود.</p>
</div>

<div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
  <h3 class="text-lg font-semibold mb-4">کارت با دکمه</h3>
  <p class="text-zinc-400 mb-4">این کارت شامل یک دکمه عملیات است.</p>
  <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
    مشاهده بیشتر
  </button>
</div>`' />
    </div>

    <!-- Interactive Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabInteractive" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabInteractive === 'نمایش'" class="space-y-4">
        <div
          class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer group">
          <div class="flex items-center gap-4 mb-4">
            <div
              class="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Icon name="uil:star" />
            </div>
            <h3 class="text-lg font-semibold">کارت هاور</h3>
          </div>
          <p class="text-zinc-400">موس را روی این کارت نگه دارید تا افکت آن را ببینید.</p>
        </div>
      </div>

      <Code v-else :code='
`<div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer group">
  <div class="flex items-center gap-4 mb-4">
    <div class="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
      <Icon name="uil:star" />
    </div>
    <h3 class="text-lg font-semibold">کارت هاور</h3>
  </div>
  <p class="text-zinc-400">موس را روی این کارت نگه دارید تا افکت آن را ببینید.</p>
</div>`' />
    </div>

    <!-- Profile Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabProfile" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabProfile === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت پروفایل</h2>
        <div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
          <div class="flex items-center space-x-4 space-x-reverse mb-4">
            <img class="w-14 h-14 rounded-full" src="https://avatars.githubusercontent.com/u/1?v=4" alt="Profile" />
            <div>
              <h3 class="text-lg font-semibold">علی محمدی</h3>
              <p class="text-zinc-400">توسعه‌دهنده فرانت‌اند</p>
            </div>
          </div>
          <div class="flex justify-between items-center mt-4 pt-4 border-t border-zinc-800">
            <div class="text-center">
              <div class="font-semibold">۲۳k</div>
              <div class="text-sm text-zinc-400">دنبال‌کننده</div>
            </div>
            <div class="text-center">
              <div class="font-semibold">۱۲۴</div>
              <div class="text-sm text-zinc-400">پروژه‌ها</div>
            </div>
            <div class="text-center">
              <div class="font-semibold">۴۵۶</div>
              <div class="text-sm text-zinc-400">مقالات</div>
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code='
`<div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
  <div class="flex items-center space-x-4 space-x-reverse mb-4">
    <img class="w-14 h-14 rounded-full" src="https://avatars.githubusercontent.com/u/1?v=4" alt="Profile" />
    <div>
      <h3 class="text-lg font-semibold">علی محمدی</h3>
      <p class="text-zinc-400">توسعه‌دهنده فرانت‌اند</p>
    </div>
  </div>
  <div class="flex justify-between items-center mt-4 pt-4 border-t border-zinc-800">
    <div class="text-center">
      <div class="font-semibold">۲۳k</div>
      <div class="text-sm text-zinc-400">دنبال‌کننده</div>
    </div>
    <div class="text-center">
      <div class="font-semibold">۱۲۴</div>
      <div class="text-sm text-zinc-400">پروژه‌ها</div>
    </div>
    <div class="text-center">
      <div class="font-semibold">۴۵۶</div>
      <div class="text-sm text-zinc-400">مقالات</div>
    </div>
  </div>
</div>`' />
    </div>

    <!-- Stats Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabStats" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabStats === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت آماری</h2>
        <div class="max-w-md p-6 rounded-xl bg-zinc-900 border border-zinc-800">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">گزارش ماهانه</h3>
            <div class="p-2 rounded-lg bg-green-500/10 text-green-500">
              <Icon name="uil:chart-growth" />
            </div>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <span class="text-zinc-400">درآمد</span>
              <span class="text-lg font-semibold">۲۳,۴۵۶,۰۰۰ تومان</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-zinc-400">مشتریان جدید</span>
              <span class="text-lg font-semibold">+۱۲۴</span>
            </div>
            <div class="w-full bg-zinc-800 rounded-full h-1">
              <div class="bg-green-500 h-1 rounded-full" style="width: 70%"></div>
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code='
`<div class="max-w-md p-6 rounded-xl bg-zinc-900 border border-zinc-800">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold">گزارش ماهانه</h3>
    <div class="p-2 rounded-lg bg-green-500/10 text-green-500">
      <Icon name="uil:chart-growth" />
    </div>
  </div>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <span class="text-zinc-400">درآمد</span>
      <span class="text-lg font-semibold">۲۳,۴۵۶,۰۰۰ تومان</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-zinc-400">مشتریان جدید</span>
      <span class="text-lg font-semibold">+۱۲۴</span>
    </div>
    <div class="w-full bg-zinc-800 rounded-full h-1">
      <div class="bg-green-500 h-1 rounded-full" style="width: 70%"></div>
    </div>
  </div>
</div>`' />
    </div>

    <!-- Feature Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabFeature" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabFeature === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت‌های ویژگی</h2>
        <div class="grid gap-6 md:grid-cols-3 max-w-5xl">
          <div class="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div class="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
              <Icon name="uil:bolt" class="text-blue-500" size="24" />
            </div>
            <h3 class="text-lg font-semibold mb-2">سرعت بالا</h3>
            <p class="text-zinc-400">بهینه‌سازی شده برای سرعت و کارایی بهتر</p>
          </div>

          <div class="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div class="p-3 rounded-lg bg-green-500/10 w-fit mb-4">
              <Icon name="uil:shield" class="text-green-500" size="24" />
            </div>
            <h3 class="text-lg font-semibold mb-2">امنیت بالا</h3>
            <p class="text-zinc-400">امنیت پیشرفته برای محافظت از داده‌ها</p>
          </div>

          <div class="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div class="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
              <Icon name="uil:chart-pie" class="text-purple-500" size="24" />
            </div>
            <h3 class="text-lg font-semibold mb-2">آمار دقیق</h3>
            <p class="text-zinc-400">گزارش‌های تحلیلی و نمودارهای پیشرفته</p>
          </div>
        </div>
      </div>

      <Code v-else :code='
`<div class="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
  <div class="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
    <Icon name="uil:bolt" class="text-blue-500" size="24"/>
  </div>
  <h3 class="text-lg font-semibold mb-2">سرعت بالا</h3>
  <p class="text-zinc-400">بهینه‌سازی شده برای سرعت و کارایی بهتر</p>
</div>`' />
    </div>

    <!-- Pricing Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabPricing" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabPricing === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت‌های قیمت‌گذاری</h2>
        <div class="grid gap-6 md:grid-cols-3 max-w-5xl">
          <div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
            <h3 class="text-xl font-bold mb-2">پایه</h3>
            <div class="mb-4">
              <span class="text-3xl font-bold">۹۹,۰۰۰</span>
              <span class="text-zinc-400">/ ماهانه</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center gap-2">
                <Icon name="uil:check" class="text-green-500" />
                <span>۵ گیگابایت فضا</span>
              </li>
              <li class="flex items-center gap-2">
                <Icon name="uil:check" class="text-green-500" />
                <span>۲ کاربر همزمان</span>
              </li>
              <li class="flex items-center gap-2 text-zinc-400">
                <Icon name="uil:times" />
                <span>پشتیبانی ۲۴/۷</span>
              </li>
            </ul>
            <button class="w-full py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800">انتخاب پلن</button>
          </div>
        </div>
      </div>

      <Code v-else :code='pricing' />
    </div>

    <!-- Testimonial Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabTestimonial" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabTestimonial === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت نظرات</h2>
        <div class="max-w-lg p-6 rounded-xl bg-zinc-900 border border-zinc-800">
          <div class="flex gap-2 mb-4">
            <Icon name="uil:star" class="text-yellow-500" />
            <Icon name="uil:star" class="text-yellow-500" />
            <Icon name="uil:star" class="text-yellow-500" />
            <Icon name="uil:star" class="text-yellow-500" />
            <Icon name="uil:star" class="text-yellow-500" />
          </div>
          <p class="text-lg mb-6">"عالی بود! من واقعاً از کیفیت خدمات و پشتیبانی راضی هستم. قطعاً به دیگران هم پیشنهاد می‌کنم."</p>
          <div class="flex items-center gap-4">
            <img class="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/2?v=4" alt="Profile" />
            <div>
              <h4 class="font-semibold">سارا احمدی</h4>
              <p class="text-zinc-400">مدیر محصول</p>
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code='testimonial' />
    </div>

    <!-- Notification Card Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabNotification" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabNotification === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت‌های اعلان</h2>
        <div class="max-w-md p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-green-500/20">
              <Icon name="uil:check-circle" class="text-green-500" />
            </div>
            <div>
              <h4 class="font-semibold text-green-500">عملیات موفق</h4>
              <p class="text-zinc-400">تغییرات با موفقیت ذخیره شد</p>
            </div>
          </div>
        </div>

        <div class="max-w-md p-4 rounded-xl bg-red-500/10 border border-red-500/20">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-red-500/20">
              <Icon name="uil:exclamation-circle" class="text-red-500" />
            </div>
            <div>
              <h4 class="font-semibold text-red-500">خطا</h4>
              <p class="text-zinc-400">لطفاً دوباره تلاش کنید</p>
            </div>
          </div>
        </div>
      </div>

      <Code v-else :code='notification' />
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'components'
})

const activeTabBasic = ref('نمایش')
const activeTabInteractive = ref('نمایش')
const activeTabFeature = ref('نمایش')
const activeTabProfile = ref('نمایش')
const activeTabStats = ref('نمایش')
const activeTabPricing = ref('نمایش')
const activeTabTestimonial = ref('نمایش')
const activeTabNotification = ref('نمایش')

const pricing = `<div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
  <h3 class="text-xl font-bold mb-2">پایه</h3>
  <div class="mb-4">
    <span class="text-3xl font-bold">۹۹,۰۰۰</span>
    <span class="text-zinc-400">/ ماهانه</span>
  </div>
  <ul class="space-y-3 mb-6">
    <li class="flex items-center gap-2">
      <Icon name="uil:check" class="text-green-500" />
      <span>۵ گیگابایت فضا</span>
    </li>
    <li class="flex items-center gap-2">
      <Icon name="uil:check" class="text-green-500" />
      <span>۲ کاربر همزمان</span>
    </li>
    <li class="flex items-center gap-2 text-zinc-400">
      <Icon name="uil:times" />
      <span>پشتیبانی ۲۴/۷</span>
    </li>
  </ul>
  <button class="w-full py-2 border border-zinc-700 rounded-lg hover:bg-zinc-800">انتخاب پلن</button>
</div>`

const testimonial = `<div class="max-w-lg p-6 rounded-xl bg-zinc-900 border border-zinc-800">
  <div class="flex gap-2 mb-4">
    <Icon name="uil:star" class="text-yellow-500" />
    <Icon name="uil:star" class="text-yellow-500" />
    <Icon name="uil:star" class="text-yellow-500" />
    <Icon name="uil:star" class="text-yellow-500" />
    <Icon name="uil:star" class="text-yellow-500" />
  </div>
  <p class="text-lg mb-6">"عالی بود! من واقعاً از کیفیت خدمات و پشتیبانی راضی هستم. قطعاً به دیگران هم پیشنهاد می‌کنم."</p>
  <div class="flex items-center gap-4">
    <img class="w-12 h-12 rounded-full" src="https://avatars.githubusercontent.com/u/2?v=4" alt="Profile" />
    <div>
      <h4 class="font-semibold">سارا احمدی</h4>
      <p class="text-zinc-400">مدیر محصول</p>
    </div>
  </div>
</div>`

const notification = `<div class="max-w-md p-4 rounded-xl bg-green-500/10 border border-green-500/20">
  <div class="flex items-center gap-3">
    <div class="p-2 rounded-lg bg-green-500/20">
      <Icon name="uil:check-circle" class="text-green-500" />
    </div>
    <div>
      <h4 class="font-semibold text-green-500">عملیات موفق</h4>
      <p class="text-zinc-400">تغییرات با موفقیت ذخیره شد</p>
    </div>
  </div>
</div>

<div class="max-w-md p-4 rounded-xl bg-red-500/10 border border-red-500/20">
  <div class="flex items-center gap-3">
    <div class="p-2 rounded-lg bg-red-500/20">
      <Icon name="uil:exclamation-circle" class="text-red-500" />
    </div>
    <div>
      <h4 class="font-semibold text-red-500">خطا</h4>
      <p class="text-zinc-400">لطفاً دوباره تلاش کنید</p>
    </div>
  </div>
</div>`
</script>