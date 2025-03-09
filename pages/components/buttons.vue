<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 " dir="rtl">
    <h1 class="text-3xl font-bold mb-8">دکمه‌ها</h1>

    <!-- Simple Buttons Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabSimple" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <button class="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg">
            دکمه ساده
          </button>
          <button class="bg-zinc-900 text-white px-4 py-2 rounded-lg" disabled>
            غیرفعال
          </button>
        </div>
      </div>

      <Code v-else :code="
`<button class='bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg'>
  دکمه ساده
</button>

<button class='bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg' disabled>
  غیرفعال
</button>`
        " />
    </div>

    <!-- Colorful Buttons -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabColorful" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabColorful === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            دکمه آبی
          </button>
          <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            دکمه سبز
          </button>
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            دکمه قرمز
          </button>
          <button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
            دکمه زرد
          </button>
          <button class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
            دکمه بنفش
          </button>
        </div>
      </div>

      <Code v-else :code="
`<button class='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>
  دکمه آبی
</button>

<button class='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'>
  دکمه سبز
</button>

<button class='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'>
  دکمه قرمز
</button>

<button class='bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg'>
  دکمه زرد
</button>

<button class='bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg'>
  دکمه بنفش
</button>`" />
    </div>

    <!-- Primary Buttons Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabPrimary" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabPrimary === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            دکمه اصلی
          </button>
          <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
            ثبت تغییرات
          </button>
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            حذف
          </button>
        </div>
      </div>

      <Code v-else :code="
`<!-- Primary Button -->
<button class='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>
  دکمه اصلی
</button>

<!-- Success Button -->
<button class='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'>
  ثبت تغییرات
</button>

<!-- Danger Button -->
<button class='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'>
  حذف
</button>`" />
    </div>

    <!-- Outline Buttons Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabOutline" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabOutline === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg">
            دکمه خطی
          </button>
          <button
            class="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg">
            تایید
          </button>
        </div>
      </div>

      <Code v-else :code="
`<!-- Outline Primary Button -->
<button class='border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg'>
  دکمه خطی
</button>

<!-- Outline Success Button -->
<button class='border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg'>
  تایید
</button>`" />
    </div>

    <!-- Gradient Buttons Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabGradient" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabGradient === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <button
            class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg">
            گرادیانت آبی-بنفش
          </button>
          <button
            class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg">
            گرادیانت سبز
          </button>
          <button
            class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg">
            گرادیانت نارنجی
          </button>
        </div>
      </div>

      <div v-else>
        <Code :code="
`<button class='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg'>
  گرادیانت آبی-بنفش
</button>

<button class='bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg'>
  گرادیانت سبز
</button>

<button class='bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg'>
  گرادیانت نارنجی
</button>`" />
      </div>
    </div>

    <!-- Rounded Buttons Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabRounded" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabRounded === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
            دکمه گرد
          </button>
          <button
            class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full">
            دکمه گرد خطی
          </button>
          <button
            class="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
            <Icon name="uil:plus" />
            <span>دکمه گرد آیکن‌دار</span>
          </button>
        </div>
      </div>

      <Code v-else :code="
`<button class='bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full'>
  دکمه گرد
</button>`" />
    </div>

    <!-- Icon Buttons Section -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabIcon" :tabs="['نمایش', 'کد']" />

      <div v-if="activeTabIcon === 'نمایش'" class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <button class="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            <Icon name="uil:plus" />
            <span>افزودن</span>
          </button>
          <button class="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
            <Icon name="uil:trash-alt" />
            <span>حذف</span>
          </button>
        </div>
      </div>

      <Code v-else :code="
`<!-- Icon Add Button -->
<button class='inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'>
  <Icon name='uil:plus' />
  <span>افزودن</span>
</button>

<!-- Icon Delete Button -->
<button class='inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'>
  <Icon name='uil:trash-alt' />
  <span>حذف</span>
</button>`" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTabSimple = ref('نمایش')
const activeTabColorful = ref('نمایش')
const activeTabPrimary = ref('نمایش')
const activeTabOutline = ref('نمایش')
const activeTabGradient = ref('نمایش')
const activeTabRounded = ref('نمایش')
const activeTabIcon = ref('نمایش')
</script>
