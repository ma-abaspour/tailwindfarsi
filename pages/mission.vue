<script setup>
useHead({
  title: 'اهداف - تیلویند فارسی',
  meta: [
    { name: 'description', content: 'اهداف و چشم‌انداز پروژه تیلویند فارسی' }
  ]
})

definePageMeta({
  layout: false
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-zinc-950">
    <div class="relative z-10">
      <!-- Background gradient effect -->
      <div class="fixed inset-0 min-h-screen blur-[118px]" 
           style="background: linear-gradient(106.89deg, rgba(192, 132, 252, 0.15) 15.73%, rgba(14, 165, 233, 0.25) 15.74%, rgba(232, 121, 249, 0.2) 56.49%, rgba(79, 70, 229, 0.3) 115.91%);">
      </div>

      <main class="relative z-20 pt-10 pb-20 sm:pt-20 sm:pb-24">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto">
            <h1 class="text-4xl font-bold tracking-tight text-white text-right mb-12 animate-fade-up drop-shadow-sm">
              اهداف من، چرا تیلویند فارسی؟
            </h1>
            
            <div class="space-y-10 animate-fade-up delay-200">
              <div class="flex gap-6 group hover:bg-black/20 p-4 rounded-xl transition-all backdrop-blur-sm">
                <icon name="ion:language" class="shrink-0 size-6 text-blue-400" />
                <p class="text-zinc-100 text-right leading-relaxed drop-shadow-sm">
                  با وجود کتابخونه‌های زیاد برای تیلویند، همشون انگلیسی هستن و برای راست‌چین مشکل دارن. هدف من ساخت یه کتابخونه‌ست که از همون اول با فکر فارسی طراحی شده - از جزئیات ریز گرفته تا ساختار کلی.
                </p>
              </div>

              <div class="flex gap-6 group hover:bg-black/20 p-4 rounded-xl transition-all backdrop-blur-sm">
                <icon name="ion:infinite" class="shrink-0 size-6 text-blue-400" />
                <p class="text-zinc-100 text-right leading-relaxed drop-shadow-sm">
                  بیشتر کتابخونه‌های تیلویند فقط شامل یه سری المان پایه‌ای هستن. اما وقتی کار به المان‌های پیشرفته‌تر می‌رسه یا اصلاً وجود ندارن، یا پشت یه دیوار پولی قفل شدن. من اینها رو برای خودم و برای شما می‌سازم، هیچوقت هم قرار نیست پولی کنم چیزی رو، رایگان و اوپن سورس برای همیشه. هیچوقت قرار نیست نسخه pro و اینجور چیزا باشه. قول 🤝.
                </p>
              </div>

              <div class="flex gap-6 group hover:bg-black/20 p-4 rounded-xl transition-all backdrop-blur-sm">
                <icon name="ion:layers" class="shrink-0 size-6 text-blue-400" />
                <p class="text-zinc-100 text-right leading-relaxed drop-shadow-sm">
                  علاوه بر کامپوننت‌ها، داشتن قالب‌های آماده می‌تونه یه شروع سریع و حرفه‌ای برای هر پروژه‌ای باشه. اما بیشتر قالب‌هایی که برای تیلویند ساخته شدن یا خیلی محدودن یا فقط با پرداخت هزینه در دسترس هستن. من میخوام یه مجموعه‌ای از قالب‌های متنوع برای کاربردهای مختلف بسازم و یه فضایی ایجاد کنم که شما هم بتونین قالب‌های خودتون رو به اشتراک بذارین.
                </p>
              </div>

              <div class="flex gap-6 group hover:bg-black/20 p-4 rounded-xl transition-all backdrop-blur-sm">
                <icon name="material-symbols:favorite" class="shrink-0 size-6 text-red-500" />
                <p class="text-zinc-100 text-right leading-relaxed drop-shadow-sm">
                  در نهایت هم میخوام انجامش بدم چون دوستون دارم، امیدوارم هر کی که هستین و هر جا که هستین همیشه خوشحال باشین و چیزایی که من میسازم یکم خوشحال ترتون کنه.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-up {
  animation: fade-up 0.5s ease-out forwards;
  opacity: 0;
}

.delay-200 {
  animation-delay: 200ms;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>