<template>
  <div class="w-full min-h-[calc(100vh-4rem)]" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">کارت‌ها</h1>
    
    <!-- Basic Card Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabBasic = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabBasic === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت ساده</h2>
        <div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
          <h3 class="text-lg font-semibold mb-2">کارت پایه</h3>
          <p class="text-zinc-400">یک کارت ساده با استایل‌های پایه که می‌تواند برای نمایش محتوای کوتاه استفاده شود.</p>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800"&gt;
  &lt;h3 class="text-lg font-semibold mb-2"&gt;عنوان کارت&lt;/h3&gt;
  &lt;p class="text-zinc-400"&gt;متن کارت&lt;/p&gt;
&lt;/div&gt;</pre>
      </div>
    </div>

    <!-- Action Card Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabAction = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabAction === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabAction === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت با دکمه عملیات</h2>
        <div class="max-w-sm p-6 rounded-xl bg-zinc-900 border border-zinc-800">
          <h3 class="text-lg font-semibold mb-4">کارت با دکمه</h3>
          <p class="text-zinc-400 mb-4">این کارت شامل یک دکمه عملیات است.</p>
          <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            مشاهده بیشتر
          </button>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800"&gt;
  &lt;h3 class="text-lg font-semibold mb-4"&gt;کارت با دکمه&lt;/h3&gt;
  &lt;p class="text-zinc-400 mb-4"&gt;متن کارت&lt;/p&gt;
  &lt;button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"&gt;
    مشاهده بیشتر
  &lt;/button&gt;
&lt;/div&gt;</pre>
      </div>
    </div>

    <!-- Interactive Card Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabInteractive = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabInteractive === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabInteractive === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت تعاملی</h2>
        <div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer group">
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <Icon name="uil:star" />
            </div>
            <h3 class="text-lg font-semibold">کارت هاور</h3>
          </div>
          <p class="text-zinc-400">موس را روی این کارت نگه دارید تا افکت آن را ببینید.</p>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer group"&gt;
  &lt;div class="flex items-center gap-4 mb-4"&gt;
    &lt;div class="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors"&gt;
      &lt;Icon name="uil:star" /&gt;
    &lt;/div&gt;
    &lt;h3 class="text-lg font-semibold"&gt;کارت هاور&lt;/h3&gt;
  &lt;/div&gt;
  &lt;p class="text-zinc-400"&gt;متن کارت&lt;/p&gt;
&lt;/div&gt;</pre>
      </div>
    </div>

    <!-- Gradient Card Section -->
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
        <h2 class="text-xl font-semibold">کارت گرادیانت</h2>
        <div class="relative p-6 rounded-xl border border-zinc-800 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 -z-10" />
          <h3 class="text-lg font-semibold mb-4">کارت گرادیانت</h3>
          <p class="text-zinc-400 mb-4">کارت با پس‌زمینه گرادیانت و جلوه بصری زیبا.</p>
          <button class="flex items-center gap-2 text-blue-500 hover:text-blue-400">
            <span>ادامه مطلب</span>
            <Icon name="uil:arrow-left" />
          </button>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;div class="relative p-6 rounded-xl border border-zinc-800 overflow-hidden"&gt;
  &lt;div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 -z-10" /&gt;
  &lt;h3 class="text-lg font-semibold mb-4"&gt;کارت گرادیانت&lt;/h3&gt;
  &lt;p class="text-zinc-400 mb-4"&gt;متن کارت&lt;/p&gt;
  &lt;button class="flex items-center gap-2 text-blue-500 hover:text-blue-400"&gt;
    &lt;span&gt;ادامه مطلب&lt;/span&gt;
    &lt;Icon name="uil:arrow-left" /&gt;
  &lt;/button&gt;
&lt;/div&gt;</pre>
      </div>
    </div>

    <!-- Add new Profile Card Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabProfile = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabProfile === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// ... Profile card code here ...
        </pre>
      </div>
    </div>

    <!-- Add new Stats Card Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabStats = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabStats === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

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

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
// ... Stats card code here ...
        </pre>
      </div>
    </div>

    <!-- Feature Card Section -->
    <div class="mb-12">
      <div class="mb-6 border-b border-zinc-800">
        <button 
          v-for="tab in ['نمایش', 'کد']" 
          :key="tab"
          @click="activeTabFeature = tab"
          :class="[
            'px-4 py-2 text-sm font-medium',
            activeTabFeature === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-zinc-400'
          ]"
        >
          {{ tab }}
        </button>
      </div>

      <div v-if="activeTabFeature === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold">کارت‌های ویژگی</h2>
        <div class="grid gap-6 md:grid-cols-3 max-w-5xl">
          <div class="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <div class="p-3 rounded-lg bg-blue-500/10 w-fit mb-4">
              <Icon name="uil:bolt" class="text-blue-500" size="24"/>
            </div>
            <h3 class="text-lg font-semibold mb-2">سرعت بالا</h3>
            <p class="text-zinc-400">بهینه‌سازی شده برای سرعت و کارایی بهتر</p>
          </div>

          <div class="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20">
            <div class="p-3 rounded-lg bg-green-500/10 w-fit mb-4">
              <Icon name="uil:shield" class="text-green-500" size="24"/>
            </div>
            <h3 class="text-lg font-semibold mb-2">امنیت بالا</h3>
            <p class="text-zinc-400">امنیت پیشرفته برای محافظت از داده‌ها</p>
          </div>

          <div class="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <div class="p-3 rounded-lg bg-purple-500/10 w-fit mb-4">
              <Icon name="uil:chart-pie" class="text-purple-500" size="24"/>
            </div>
            <h3 class="text-lg font-semibold mb-2">آمار دقیق</h3>
            <p class="text-zinc-400">گزارش‌های تحلیلی و نمودارهای پیشرفته</p>
          </div>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4" dir="ltr">
        <pre class="text-sm text-zinc-300">
&lt;div class="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20"&gt;
  &lt;div class="p-3 rounded-lg bg-blue-500/10 w-fit mb-4"&gt;
    &lt;Icon name="uil:bolt" class="text-blue-500" size="24"/&gt;
  &lt;/div&gt;
  &lt;h3 class="text-lg font-semibold mb-2"&gt;عنوان ویژگی&lt;/h3&gt;
  &lt;p class="text-zinc-400"&gt;توضیحات ویژگی&lt;/p&gt;
&lt;/div&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

const activeTabBasic = ref('نمایش')
const activeTabAction = ref('نمایش')
const activeTabInteractive = ref('نمایش')
const activeTabGradient = ref('نمایش')
const activeTabFeature = ref('نمایش')
const activeTabProfile = ref('نمایش')
const activeTabStats = ref('نمایش')
</script>
