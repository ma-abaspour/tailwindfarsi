<template>
  <div class="w-full max-w-4xl" dir="rtl">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">راهنمای استفاده</h1>
      <p class="text-zinc-400 text-lg">نحوه استفاده از کامپوننت‌های تیلویند فارسی در پروژه شما</p>
    </div>

    <!-- Usage Guide -->
    <div class="space-y-8">
      <!-- Basic Usage -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">کپی و استفاده از کامپوننت‌ها</h2>
        <p class="text-zinc-400">برای استفاده از هر کامپوننت، کافیست کد آن را در پوشه components پروژه خود کپی کنید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
📁 components/
  └─ TButton.vue
  └─ TInput.vue
  └─ ... </pre>
        </div>
      </section>

      <!-- Example -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">نمونه استفاده</h2>
        <p class="text-zinc-400">پس از کپی کامپوننت‌ها، می‌توانید مستقیماً از آن‌ها استفاده کنید:</p>
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

      <!-- RTL Support -->
      <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">نکات مهم</h3>
        <ul class="list-disc list-inside space-y-2 text-zinc-400">
          <li>همه کامپوننت‌ها برای RTL بهینه‌سازی شده‌اند</li>
          <li>از ویژگی dir="rtl" در المان والد استفاده کنید</li>
          <li>برای محتوای انگلیسی از dir="ltr" استفاده کنید</li>
          <li>فونت Vazirmatn را حتماً نصب کرده باشید</li>
        </ul>
      </div>

      <!-- Customization -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">شخصی‌سازی</h2>
        <p class="text-zinc-400">می‌توانید کامپوننت‌ها را با کلاس‌های تیلویند شخصی‌سازی کنید:</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
&lt;TButton 
  variant="primary"
  class="bg-gradient-to-r from-blue-500 to-purple-500"
&gt;
  دکمه سفارشی
&lt;/TButton&gt;</pre>
        </div>
      </section>

      <!-- Next Steps -->
      <div class="pt-4">
        <NuxtLink to="/components" class="inline-flex items-center text-blue-500 hover:text-blue-400">
          <span>مشاهده همه کامپوننت‌ها</span>
          <Icon name="uil:arrow-left" class="mr-2" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})
</script>
