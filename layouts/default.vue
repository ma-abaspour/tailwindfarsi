<template>
  <!-- Beta banner -->
  <div dir="rtl" class="w-full bg-[#0588F0] py-2 text-center text-xs font-medium text-white md:text-sm dark:bg-[#111927]">
    <span>🎉 نسخه بتا تیلویند فارسی منتشر شد!</span>
  </div>

  <!-- Navigation -->
  <header class="sticky top-0 z-20 w-full border-b border-zinc-200 bg-white py-2 dark:border-white/10 dark:bg-zinc-950">
    <div class="container mx-auto flex items-center justify-between px-4 md:max-w-7xl">
      <!-- Left Navigation -->
      <div class="flex items-center gap-4 md:gap-6">
        <button @click="toggleMenu" class="md:hidden">
          <Icon :name="isHeaderMenuOpen ? 'uil:times' : 'heroicons:bars-3'" 
                class="text-zinc-400 hover:text-zinc-600 dark:hover:text-white" 
                size="24" />
        </button>
        <button @click="toggleDarkMode">
          <Icon name="material-symbols:dark-mode" 
                class="text-zinc-600 dark:text-white" />
        </button>

        <div class="hidden h-8 w-px bg-zinc-200 md:block dark:bg-zinc-800" />

        <!-- Desktop Nav -->
        <nav class="hidden items-center gap-6 md:flex">
          <NuxtLink v-for="item in navItems" 
                    :key="item.path"
                    :to="item.path" 
                    class="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center">
        <span class="mb-4 mr-2 rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50">beta</span>
        <div class="text-sm font-medium text-zinc-950 dark:text-white">تیلویند فارسی</div>
      </NuxtLink>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isHeaderMenuOpen" 
         class="absolute left-0 right-0 w-full border-b border-zinc-800 bg-zinc-900 md:hidden">
      <nav class="p-4" dir="rtl">
        <NuxtLink v-for="item in navItems"
                  :key="item.path"
                  :to="item.path"
                  @click="closeMenu"
                  class="block rounded-lg px-4 py-2 text-sm text-zinc-400 transition-colors hover:bg-zinc-800/50 hover:text-white">
          {{ item.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>

  <main class="min-h-screen w-full bg-zinc-950" dir="rtl">
    <slot />

    <!-- Footer -->
    <footer class="border-t border-zinc-800 py-12" dir="ltr">
      <div class="container mx-auto px-4 md:max-w-7xl">
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div class="text-center md:text-left">
            <div class="mb-2 text-xl font-bold text-white">Tailwind Farsi</div>
            <p class="text-zinc-400">Built by <a href="https://symmetry.team" class="text-sky-600 hover:text-sky-500">Symmetry Engineering Firm</a></p>
          </div>
          <a href="https://github.com/ma-abaspour/tailwindfarsi" 
             class="flex items-center gap-2 text-zinc-400 transition-colors hover:text-white">
            <Icon name="uil:github" class="h-6 w-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup>
const route = useRoute()
const isHeaderMenuOpen = ref(false)

const navItems = [
  { path: '/blog', label: 'بلاگ' },
  { path: '/tools', label: 'ابزار ها' },
  { path: '/templates', label: 'قالب ها' },
  { path: '/blocks', label: 'قطعات' },
  { path: '/components', label: 'عناصر' }
]

const toggleMenu = () => isHeaderMenuOpen.value = !isHeaderMenuOpen.value
const closeMenu = () => isHeaderMenuOpen.value = false

const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark')
}

watch(route, closeMenu)

onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') closeMenu()
  }
  
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})
</script>