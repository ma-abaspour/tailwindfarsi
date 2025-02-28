<template>

<!-- Beta announcement banner -->
<div
  class="inline-flex w-full flex-col items-center justify-center gap-2 bg-[#0588F0] px-4 py-2 text-xs font-medium leading-normal text-white dark:bg-[#111927] md:text-sm"
  dir="rtl">
  <span>🎉 نسخه بتا تیلویند فارسی منتشر شد!</span>
</div>


<div class="min-h-screen bg-zinc-950">


  <!-- Header navigation -->
  <header
    class="sticky top-0 z-10 flex h-16 items-center justify-center border-b border-zinc-200 bg-white px-4 md:px-6 py-5 dark:border-white/10 dark:bg-zinc-950">
    <div class="mx-auto flex w-full items-center justify-between md:max-w-7xl">
      <!-- Mobile menu button -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="p-2 text-zinc-400 hover:text-white md:hidden">
        <Icon :name="isMobileMenuOpen ? 'uil:times' : 'uil:bars'" size="24" />
      </button>

      <!-- Navigation items -->
      <div class="flex items-center space-x-6">
        <nav class="flex items-center space-x-2">
          <Icon name="uil:user" style="color: white" />
          <Icon name="uil:moon" style="color: white" />
        </nav>

        <div class="hidden h-8 w-[0.5px] bg-zinc-200 dark:bg-zinc-800 sm:flex" />

        <!-- Desktop Navigation -->
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

  <!-- Mobile Menu Overlay -->
  <div v-if="isMobileMenuOpen" 
    class="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
    @click="isMobileMenuOpen = false">
  </div>

  <div class="max-w-7xl mx-auto text-white flex flex-col md:flex-row-reverse justify-between px-4 md:px-8 mt-8">

    <!-- Desktop Sidebar -->
    <div class="hidden md:block w-72 flex-shrink-0">
      <div class="sticky top-24">
        <nav class="flex flex-col space-y-6" dir="rtl">
          <!-- Getting Started Section -->
          <div class="space-y-3">
            <h3 class="text-sm font-semibold text-zinc-400 px-3">شروع به کار</h3>
            <div class="flex flex-col">
              <NuxtLink to="/components/installation" 
                class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:download-alt" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">نصب و راه‌اندازی</span>
              </NuxtLink>
              <NuxtLink to="/components/usage" 
                class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:code-branch" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">نحوه استفاده</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Components Section -->
          <div class="space-y-3">
            <h3 class="text-sm font-semibold text-zinc-400 px-3">قطعات رابط کاربری</h3>
            <div class="flex flex-col">
              <NuxtLink to="/components/buttons" 
                class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:square" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">دکمه‌ها</span>
              </NuxtLink>
              <NuxtLink to="/components/forms" 
                class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:form" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">فرم‌ها</span>
              </NuxtLink>
              <a href="#cards" class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:card-atm" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">کارت‌ها</span>
              </a>
              <NuxtLink href="/components/navigation" class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:navigation" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">ناوبری</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Utilities Section -->
          <div class="space-y-3">
            <h3 class="text-sm font-semibold text-zinc-400 px-3">ابزارها</h3>
            <div class="flex flex-col">
              <NuxtLink href="/tools/colors" 
                class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:palette" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">رنگ‌ها</span>
            </NuxtLink>
              <NuxtLink href="/tools/typography" class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                <Icon name="uil:text" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                <span class="group-hover:text-zinc-100">تایپوگرافی</span>
              </NuxtLink>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full md:flex-1 pb-12">
      <slot />
    </div>
  </div>

  <!-- Mobile Sidebar -->
  <div 
    v-if="isMobileMenuOpen"
    class="fixed inset-y-0 left-0 w-64 bg-zinc-950 border-r border-zinc-800 z-30 md:hidden overflow-y-auto">
    <div class="p-4">
      <nav class="flex flex-col space-y-6" dir="rtl">
        <!-- Getting Started Section -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-zinc-400 px-3">شروع به کار</h3>
          <div class="flex flex-col">
            <NuxtLink to="/components/installation" 
              class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:download-alt" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">نصب و راه‌اندازی</span>
            </NuxtLink>
            <NuxtLink to="/components/usage" 
              class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:code-branch" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">نحوه استفاده</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Components Section -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-zinc-400 px-3">قطعات رابط کاربری</h3>
          <div class="flex flex-col">
            <NuxtLink to="/components/buttons" 
              class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:square" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">دکمه‌ها</span>
            </NuxtLink>
            <NuxtLink to="/components/forms" 
              class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:form" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">فرم‌ها</span>
            </NuxtLink>
            <a href="#cards" class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:card-atm" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">کارت‌ها</span>
            </a>
            <a href="#navigation" class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:navigation" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">ناوبری</span>
            </a>
          </div>
        </div>

        <!-- Utilities Section -->
        <div class="space-y-3">
          <h3 class="text-sm font-semibold text-zinc-400 px-3">ابزارها</h3>
          <div class="flex flex-col">
            <a href="#colors" 
              class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:palette" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">رنگ‌ها</span>
            </a>
            <a href="#typography" class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:text" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">تایپوگرافی</span>
            </a>
            <a href="#spacing" class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
              <Icon name="uil:arrows-resize-h" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
              <span class="group-hover:text-zinc-100">فاصله‌گذاری</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>

</div>
</template>

<script setup>
const route = useRoute()
const isMobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(route, () => {
  isMobileMenuOpen.value = false
})

// Close mobile menu on escape key
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      isMobileMenuOpen.value = false
    }
  })
})
</script>
