
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
          <Icon name="material-symbols:person" style="color: white" />
          <Icon name="material-symbols:dark-mode" style="color: white" />
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
      </NuxtLink>
    </div>
  </header>


  <section class="bg-zinc-950 w-full min-h-screen" dir="rtl">
    <slot />
  </section>



</template>