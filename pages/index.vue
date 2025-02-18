<template>
  <!-- Beta announcement banner -->
  <div
    class="inline-flex w-full flex-col items-center justify-center gap-2 bg-[#0588F0] px-4 py-2 text-xs font-medium leading-normal text-white dark:bg-[#111927] md:text-sm"
    dir="rtl">
    <span>🎉 نسخه بتا تیلویند فارسی منتشر شد!</span>
  </div>

  <!-- Header navigation -->
  <header
    class="sticky top-0 z-10 flex h-16 items-center justify-center border-b border-zinc-200 bg-white px-6 py-5 dark:border-white/10 dark:bg-zinc-950">
    <div class="mx-auto flex w-full items-center justify-between md:max-w-7xl">
      <!-- Navigation items -->
      <div class="flex items-center space-x-6">
        <nav class="flex items-center space-x-2">
          <Icon name="uil:user" style="color: white" />
          <Icon name="uil:moon" style="color: white" />
        </nav>

        <div class="hidden h-8 w-[0.5px] bg-zinc-200 dark:bg-zinc-800 sm:flex" />

        <nav class="hidden items-center space-x-6 sm:flex">
          <NuxtLink v-for="(link, index) in [
            { href: '/blog', text: 'بلاگ' },
            { href: '/templates', text: 'قالب ها' },
            { href: '/components', text: 'قطعات رابط کاربری' }
          ]" :key="index" :href="link.href"
            class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            {{ link.text }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Logo and brand -->
      <NuxtLink to="/" class="relative flex items-center">
        <span
          class="mb-4 mr-2 select-none rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50">beta</span>
        <div class="text-sm font-medium text-zinc-950 dark:text-white">تیلویند فارسی</div>
        <MPLogo class="h-6 w-auto mr-2" />
      </NuxtLink>
    </div>
  </header>


  <!-- Hero section -->
<section class="bg-zinc-950 w-full min-h-screen" dir="rtl">
  <div class="px-6 py-4 pb-20">
    <section class="flex h-full flex-col items-center justify-center pt-20">
      <div class="flex w-full max-w-2lg flex-col items-center justify-center text-center">
        <h1 class="relative mb-3 text-2xl sm:text-4xl font-medium text-zinc-950 dark:text-zinc-50">
          کیت رابط کاربری تیلویند فارسی
        </h1>
        <p class="text-center text-xs sm:text-base text-zinc-600 dark:text-zinc-200 nowrap">
          راست‌چین. زیبایی و سادگی. کپی-پیست آسان. ساخته شده برای مهندسان و طراحان.
        </p>
      </div>
      <span class="mt-2 text-center text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
        به‌روزرسانی‌های رایگان و اجزای جدید به طور منظم منتشر می‌شوند.
      </span>
      <div class="flex gap-4 mt-6">
        <NuxtLink to="/sample" class="px-5 py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
          مشاهده نمونه ها
        </NuxtLink>
        <NuxtLink to="/buy" class="px-5 py-2 text-xs sm:text-sm font-medium text-zinc-300 border border-zinc-700 rounded-lg hover:bg-zinc-900 transition-colors">
          خرید
        </NuxtLink>
      </div>
    </section>
  </div>
</section>



  <!-- <div class="bg-zinc-950 w-full" dir="rtl">
    <div class="max-w-md mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <h2 class="text-2xl font-bold tracking-tight text-gray-400">Customers also purchased</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

        <div class="group relative">
          <img src="https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg"
            alt="Front of men&#039;s Basic Tee in black."
            class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80">
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-200">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  انواع دیوایس ها
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">Black</p>
            </div>
            <p class="text-sm font-medium text-gray-900">$35</p>
          </div>
        </div>

      </div>
    </div>
  </div> -->


  <!-- <div
    class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
    <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
    <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
    <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
        class="dark:hidden w-[272px] h-[572px]" alt="">
      <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
        class="hidden dark:block w-[272px] h-[572px]" alt="">
    </div>
  </div> -->



</template>
