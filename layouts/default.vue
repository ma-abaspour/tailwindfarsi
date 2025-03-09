<template>
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
            <Icon name="material-symbols:dark-mode" class="text-white" />
          </nav>

          <!-- Vertical Line -->
          <div class="hidden h-8 w-[0.5px] bg-zinc-200 dark:bg-zinc-800 sm:flex" />

          <!-- Desktop Nav -->
          <nav class="hidden items-center space-x-6 md:flex text-zinc-700 dark:text-zinc-300">
            <NuxtLink href="/blog" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">بلاگ</NuxtLink>
            <NuxtLink href="/tools" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">ابزار ها</NuxtLink>
            <NuxtLink href="/templates" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">قالب ها</NuxtLink>
            <NuxtLink href="/blocks" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">قطعات</NuxtLink>
            <NuxtLink href="/components" class="text-sm font-medium hover:text-zinc-950 dark:hover:text-white">عناصر</NuxtLink>
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
          <NuxtLink to="/components" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            عناصر رابط کاربری
          </NuxtLink>
          <NuxtLink to="/blocks" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            قطعات
          </NuxtLink>
          <NuxtLink to="/templates" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            قالب ها
          </NuxtLink>
          <NuxtLink to="/tools" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            ابزار ها
          </NuxtLink>
          <NuxtLink to="/blog" 
            @click="isHeaderMenuOpen = false" 
            class="py-2 px-4 text-sm hover:bg-zinc-800/50 rounded-lg hover:text-white transition-colors">
            بلاگ
          </NuxtLink>
        </nav>
      </div>
    </header>

  <section class="bg-zinc-950 w-full min-h-screen" dir="rtl">

    <slot />

    <!-- Footer -->
    <footer class="py-12 border-t border-zinc-800" dir="ltr">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <div class="text-center md:text-left">
            <div class="text-xl font-bold text-white mb-2">TailwindFarsi</div>
            <p class="text-zinc-400">Built by <a href="https://symmetry.team" class="text-sky-600">Symmetry Engineering Firm</a></p>
          </div>
          <div class="flex justify-center items-center gap-2">
            <icon name="uil:github" class="bg-white w-6 h-6" />
            <a href="https://github.com/ma-abaspour/tailwindfarsi" class="text-zinc-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>

  </section>



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