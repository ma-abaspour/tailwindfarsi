<template>
  <div class="min-h-screen bg-zinc-950">

    <!-- Beta banner -->
    <div dir="rtl" class="w-full text-center bg-[#0588F0] dark:bg-[#111927] py-2 text-xs md:text-sm font-medium text-white">
      <span>🎉 نسخه بتا تیلویند فارسی منتشر شد!</span>
    </div>

    <!-- Navigation -->
    <header class="sticky top-0 z-20 bg-white border-zinc-200 border-b dark:border-white/10 dark:bg-zinc-950 py-2 w-full">
      <div class="px-4 md:px-6 mx-auto flex items-center justify-between md:max-w-7xl">
        <!-- Navigation Left -->
        <div class="flex items-center space-x-6">
          <nav class="flex items-center gap-4">
            <Icon @click="isHeaderMenuOpen = !isHeaderMenuOpen" 
              class="ml-2 p-1 text-zinc-400 hover:text-white md:hidden cursor-pointer" 
              :name="isHeaderMenuOpen ? 'uil:times' : 'heroicons:bars-3'" 
              size="24" />
            <Icon name="material-symbols:person" class="text-white" />
            <Icon name="material-symbols:dark-mode" class="text-white" />
          </nav>

          <!-- Vertical Line -->
          <div class="hidden h-8 w-[0.5px] bg-zinc-200 dark:bg-zinc-800 sm:flex" />

          <!-- Desktop Nav -->
          <nav class="hidden items-center space-x-6 md:flex text-zinc-700 dark:text-zinc-300">
            <NuxtLink href="/blog" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">بلاگ</NuxtLink>
            <NuxtLink href="/templates" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">قالب ها</NuxtLink>
            <NuxtLink href="/components" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">قطعات رابط کاربری</NuxtLink>
          </nav>
        </div>

        <!-- Navigation Right -->
        <NuxtLink to="/" class="relative flex items-center">
          <span class="mb-4 mr-2 select-none rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50">beta</span>
          <div class="text-sm font-medium text-zinc-950 dark:text-white">تیلویند فارسی</div>
        </NuxtLink>
      </div>

      <!-- Mobile Navigation Menu -->
      <div v-show="isHeaderMenuOpen" 
        class="absolute left-0 right-0 w-full bg-zinc-900 border-b border-zinc-800 md:hidden">
        <nav class="flex flex-col p-4 text-zinc-400" dir="rtl">
          <NuxtLink to="/blog" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            بلاگ
          </NuxtLink>
          <NuxtLink to="/templates" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            قالب ها
          </NuxtLink>
          <NuxtLink to="/components" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            قطعات رابط کاربری
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Layout -->
    <div class="max-w-7xl mx-auto text-white px-4 md:px-8 mt-8">
      <div class="flex flex-col md:flex-row-reverse justify-between">
        <!-- Sidebar Toggle for Mobile -->
        <div class="md:hidden mb-4">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="w-full flex items-center justify-between p-3 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800/50 transition-colors">
            <span class="text-sm font-medium">منو</span>
            <Icon :name="isMobileMenuOpen ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" size="20" />
          </button>
        </div>

        <!-- Sidebar -->
        <div :class="[
          'overflow-hidden transition-all duration-300 ease-in-out bg-zinc-950',
          'md:w-72 md:flex-shrink-0',
          isMobileMenuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-none'
        ]">
          <div class="md:sticky md:top-24 p-4 md:p-0">
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
                    <Icon name="material-symbols:format-list-bulleted-add"
                      class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                    <span class="group-hover:text-zinc-100">فرم‌ها</span>
                  </NuxtLink>
                  <NuxtLink to="/components/cards"
                    class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                    <Icon name="uil:card-atm" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                    <span class="group-hover:text-zinc-100">کارت‌ها</span>
                  </NuxtLink>
                  <NuxtLink to="/components/navigation"
                    class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                    <Icon name="tabler:layout-navbar" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                    <span class="group-hover:text-zinc-100">ناوبری</span>
                  </NuxtLink>
                </div>
              </div>

              <!-- Utilities Section -->
              <div class="space-y-3">
                <h3 class="text-sm font-semibold text-zinc-400 px-3">ابزارها</h3>
                <div class="flex flex-col">
                  <NuxtLink to="/tools/colors"
                    class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                    <Icon name="uil:palette" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                    <span class="group-hover:text-zinc-100">رنگ‌ها</span>
                  </NuxtLink>
                  <NuxtLink to="/tools/typography"
                    class="flex items-center gap-2 py-2 px-3 text-sm text-zinc-400 hover:bg-zinc-800/50 rounded-lg group transition-all duration-200 border-l-2 border-transparent hover:border-zinc-700">
                    <Icon name="uil:text" class="ml-2 text-zinc-500 group-hover:text-zinc-300" />
                    <span class="group-hover:text-zinc-100">تایپوگرافی</span>
                  </NuxtLink>
                </div>
              </div>

            </nav>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full md:flex-1 pb-12">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const isMobileMenuOpen = ref(false)
const isHeaderMenuOpen = ref(false)
const isDarkMode = ref(false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark')
}

watch(route, () => {
  isMobileMenuOpen.value = false
  isHeaderMenuOpen.value = false
})

onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      isMobileMenuOpen.value = false
      isHeaderMenuOpen.value = false
    }
  }
  
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})
</script>
