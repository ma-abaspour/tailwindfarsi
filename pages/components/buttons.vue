<template>
  <div class="w-full min-h-[calc(100vh-4rem)]" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">دکمه‌ها</h1>
    
    <!-- Simple Buttons Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabSimple = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabSimple === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabSimple === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های ساده</h2>
        <div class="flex flex-wrap gap-4">
          <button class="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg">
            دکمه ساده
          </button>
          <button class="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg" disabled>
            غیرفعال
          </button>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;button class="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg"&gt;
  دکمه ساده
&lt;/button&gt;

&lt;button class="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg" disabled&gt;
  غیرفعال
&lt;/button&gt;</pre>
      </div>
    </div>

    <!-- Colorful Buttons Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabColorful = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabColorful === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabColorful === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های رنگی</h2>
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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"&gt;
  دکمه آبی
&lt;/button&gt;

&lt;button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"&gt;
  دکمه سبز
&lt;/button&gt;

&lt;button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"&gt;
  دکمه قرمز
&lt;/button&gt;

&lt;button class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"&gt;
  دکمه زرد
&lt;/button&gt;

&lt;button class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg"&gt;
  دکمه بنفش
&lt;/button&gt;</pre>
      </div>
    </div>

    <!-- Primary Buttons Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabPrimary = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabPrimary === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabPrimary === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های اصلی</h2>
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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;!-- Primary Button --&gt;
&lt;button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"&gt;
  دکمه اصلی
&lt;/button&gt;

&lt;!-- Success Button --&gt;
&lt;button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"&gt;
  ثبت تغییرات
&lt;/button&gt;

&lt;!-- Danger Button --&gt;
&lt;button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"&gt;
  حذف
&lt;/button&gt;</pre>
      </div>
    </div>

    <!-- Outline Buttons Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabOutline = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabOutline === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabOutline === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های خطی</h2>
        <div class="flex flex-wrap gap-4">
          <button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg">
            دکمه خطی
          </button>
          <button class="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg">
            تایید
          </button>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;!-- Outline Primary Button --&gt;
&lt;button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg"&gt;
  دکمه خطی
&lt;/button&gt;

&lt;!-- Outline Success Button --&gt;
&lt;button class="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-4 py-2 rounded-lg"&gt;
  تایید
&lt;/button&gt;</pre>
      </div>
    </div>

    <!-- Gradient Buttons Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabGradient = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabGradient === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabGradient === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های گرادیانت</h2>
        <div class="flex flex-wrap gap-4">
          <button class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg">
            گرادیانت آبی-بنفش
          </button>
          <button class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 rounded-lg">
            گرادیانت سبز
          </button>
          <button class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg">
            گرادیانت نارنجی
          </button>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;button class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg"&gt;
  گرادیانت آبی-بنفش
&lt;/button&gt;</pre>
      </div>
    </div>

    <!-- Rounded Buttons Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabRounded = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabRounded === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabRounded === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های گرد</h2>
        <div class="flex flex-wrap gap-4">
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full">
            دکمه گرد
          </button>
          <button class="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full">
            دکمه گرد خطی
          </button>
          <button class="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
            <Icon name="uil:plus" />
            <span>دکمه گرد آیکن‌دار</span>
          </button>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;button class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"&gt;
  دکمه گرد
&lt;/button&gt;</pre>
      </div>
    </div>

    <!-- Icon Buttons Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabIcon = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabIcon === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabIcon === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">دکمه‌های آیکن‌دار</h2>
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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;!-- Icon Add Button --&gt;
&lt;button class="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"&gt;
  &lt;Icon name="uil:plus" /&gt;
  &lt;span&gt;افزودن&lt;/span&gt;
&lt;/button&gt;

&lt;!-- Icon Delete Button --&gt;
&lt;button class="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"&gt;
  &lt;Icon name="uil:trash-alt" /&gt;
  &lt;span&gt;حذف&lt;/span&gt;
&lt;/button&gt;</pre>
      </div>
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