<template>
  <div class="w-full max-w-4xl" dir="rtl">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">راهنمای استفاده</h1>
      <p class="text-zinc-400 text-lg">نحوه استفاده از کامپوننت‌های تیلویند فارسی در پروژه</p>
    </div>

    <!-- Usage Guide -->
    <div class="space-y-8">
      <!-- Basic Usage -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">استفاده پایه</h2>
        <p class="text-zinc-400">کامپوننت‌های مورد نیاز را import کنید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
import { TButton, TInput } from '@tailwindfarsi/ui'

// در کامپوننت Vue
export default {
  components: {
    TButton,
    TInput
  }
}</pre>
        </div>
      </section>

      <!-- Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">مثال</h2>
        <p class="text-zinc-400">نمونه استفاده از کامپوننت‌ها:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
&lt;template&gt;
  &lt;div class="space-y-4"&gt;
    &lt;TInput 
      v-model="username"
      label="نام کاربری"
      placeholder="نام کاربری خود را وارد کنید"
    /&gt;
    
    &lt;TButton variant="primary"&gt;
      ثبت نام
    &lt;/TButton&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
        </div>
      </section>

      <!-- Customization -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">شخصی‌سازی</h2>
        <p class="text-zinc-400">می‌توانید با استفاده از کلاس‌های Tailwind، ظاهر کامپوننت‌ها را تغییر دهید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
&lt;TButton 
  variant="primary"
  class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
&gt;
  دکمه سفارشی
&lt;/TButton&gt;</pre>
        </div>
      </section>

      <!-- Tips -->
      <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">نکات مهم</h3>
        <ul class="list-disc list-inside space-y-2 text-zinc-400">
          <li>همیشه از ویژگی dir="rtl" در المان والد استفاده کنید</li>
          <li>برای متون انگلیسی از dir="ltr" استفاده کنید</li>
          <li>از فونت Vazirmatn برای بهترین نتیجه استفاده کنید</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})
</script>
