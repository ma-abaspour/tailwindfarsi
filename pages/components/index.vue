<template>
  <div class="w-full max-w-4xl" dir="rtl">
    <div class="mb-12">
      <h1 class="text-4xl font-bold mb-4">عناصر رابط کابری</h1>
      <p class="text-zinc-400 text-lg leading-relaxed">
        خب، عناصر چی هستن؟ ساده‌ترین اجزای رابط کاربری. مثل آجرهای ساختمون! با همین‌ها می‌تونیم 
        <nuxt-link to="/blocks" class="text-blue-400 hover:text-blue-300">بلوک‌ها</nuxt-link> و 
        <nuxt-link to="/templates" class="text-blue-400 hover:text-blue-300">قالب‌ها</nuxt-link> 
        رو بسازیم.
      </p>
    </div>

    <div class="space-y-8">

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">چطور استفاده کنم؟ چرا اینجوری ساختی؟</h2>
        <p class="text-zinc-400 leading-relaxed">
          خیلی راحت، کامپوننت ها رو دید بزن، هر کدوم رو خواستی کپی پیست کن تو پروژه ات، و هر جوری میخوای ایدیتش کن و باهاش کار کن.
          ببین، می‌تونستم یه پکیج npm بسازم و بگم نصبش کن و استفاده کن. ولی خب، اینجوری کد از چشمت پنهون می‌شه. 
          من می‌خوام تو یاد بگیری چجوری این المان‌ها رو می‌سازن. الان شاید فقط کپی‌پیست کنی (که اشکالی نداره!)، 
          ولی کم کم که کد رو میخونی و باهاش ور میری، یاد می‌گیری خودت بسازیش.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">با هر فریمورکی کار می‌کنه</h2>
        <p class="text-zinc-400 leading-relaxed">
          React کار می‌کنی؟ Vue؟ فرقی نداره! ایده‌ها یکی‌ان، فقط سینتکس فرق می‌کنه. 
          سعی می‌کنم مثال‌های React و Vue بذارم. اگه گیر کردی هم نگران نباش - برو سراغ 
          صفحه مولد پرامپت، یه پرامپت خوب بساز و بده به ChatGPT یا Copilot، برات تبدیلش می‌کنه!
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">یاد بگیر کامپوننتی فکر کنی</h2>
        <p class="text-zinc-400">همه فریمورک های مدرن یه روشی برای کامپوننت ساختن دارن، سعی کن از همین اول همه چی رو کامپوننت کنی برای خودت، بجای اینکه یه صفحه طولاینی و قر و قاطی داشته باشی.</p>
        <div class="bg-zinc-900 p-4 rounded-lg" dir="ltr">
          <pre class="text-sm text-zinc-300">
📁 components/
  └─ basic/
      └─ tbutton.vue
      └─ tinput.vue
      └─ ... </pre>
        </div>
      </section>

      <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 rounded-xl">
        <h3 class="text-xl font-semibold mb-4">نکات مهم</h3>
        <ul class="list-disc list-inside space-y-2 text-zinc-400">
          <li>همه کامپوننت‌ها برای rtl بهینه‌سازی شده‌اند</li>
          <li>از ویژگی dir="rtl" در المان والد استفاده کنید</li>
          <li>برای محتوای انگلیسی از dir="ltr" استفاده کنید</li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'components'
})

useSeoMeta({
  title: 'کامپوننت‌های تیلویند فارسی',
  ogTitle: 'کامپوننت‌های تیلویند فارسی',
  twitterTitle: 'کامپوننت‌های تیلویند فارسی',
  description: 'مجموعه کامپوننت‌های آماده و راست‌چین شده تیلویند فارسی برای طراحی رابط کاربری',
  ogDescription: 'مجموعه کامپوننت‌های آماده و راست‌چین شده تیلویند فارسی برای طراحی رابط کاربری',
  twitterDescription: 'مجموعه کامپوننت‌های آماده و راست‌چین شده تیلویند فارسی برای طراحی رابط کاربری',
  ogImage: 'https://tailwindfarsi.com/tailwind.png',
  twitterImage: 'https://tailwindfarsi.com/tailwind.png',
  twitterCard: 'summary',
  robots: 'index, follow'
});
</script>
