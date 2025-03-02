<template>
  <div class="bg-zinc-950 w-full min-h-screen p-6 md:p-8" dir="rtl">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-12">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">قالب‌های متن‌باز</h1>
        <p class="text-zinc-400 text-lg">مجموعه قالب‌های رایگان و متن‌باز برای پروژه‌های وب، ساخته شده با تیلویند و نوکست</p>
      </div>

      <!-- Categories -->
      <div class="flex flex-wrap gap-3 justify-center mb-10">
        <button class="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">همه قالب‌ها</button>
        <button class="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700">داشبورد</button>
        <button class="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700">لندینگ</button>
        <button class="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700">فروشگاهی</button>
        <button class="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm hover:bg-zinc-700">وبلاگ</button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Template Cards -->
        <div v-for="template in templates" :key="template.id" class="group bg-zinc-900 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300">
          <div class="relative">
            <div class="aspect-[4/3] bg-gradient-to-br" :class="template.gradient"></div>
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a :href="template.preview" class="px-5 py-2.5 bg-white text-black rounded-lg font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                پیش‌نمایش
              </a>
              <a :href="template.github" class="px-5 py-2.5 bg-zinc-800 text-white rounded-lg font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform flex items-center gap-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                گیت‌هاب
              </a>
            </div>
            <div class="absolute top-4 right-4 flex gap-2">
              <span v-if="template.isNew" class="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">جدید</span>
              <span class="px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">{{ template.category }}</span>
            </div>
          </div>
          <div class="p-6">
            <div class="mb-4">
              <h3 class="text-xl font-bold text-white mb-2">{{ template.title }}</h3>
              <p class="text-zinc-400 text-sm">{{ template.description }}</p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-zinc-800">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-zinc-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3 6.5 7 .5-5 4.5 2 7-6-4-6 4 2-7-5-4.5 7-.5 3-6.5z"/></svg>
                  <span class="text-zinc-400 text-sm">{{ template.stars }} ستاره</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                  <span class="text-zinc-400 text-sm">{{ template.forks }} فورک</span>
                </div>
              </div>
              <a :href="template.download" class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                دانلود
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const templates = [
  {
    id: 1,
    title: 'داشبورد مدیریت حرفه‌ای',
    description: 'قالب پنل مدیریت با ویجت‌های متنوع، نمودارها و جداول پیشرفته',
    category: 'داشبورد',
    gradient: 'from-blue-600 to-indigo-600',
    isNew: true,
    stars: 245,
    forks: 68,
    preview: '#',
    github: '#',
    download: '#'
  },
  {
    id: 2,
    title: 'فروشگاه دیجیتال مارکت',
    description: 'قالب فروشگاهی کامل با سبد خرید، پروفایل کاربری و پنل فروشنده',
    category: 'فروشگاهی',
    gradient: 'from-emerald-600 to-teal-600',
    isNew: false,
    stars: 189,
    forks: 42,
    preview: '#',
    github: '#',
    download: '#'
  },
  {
    id: 3,
    title: 'لندینگ استارتاپ',
    description: 'قالب صفحه فرود مدرن با انیمیشن‌های جذاب و بخش‌های متنوع',
    category: 'لندینگ',
    gradient: 'from-purple-600 to-pink-600',
    isNew: true,
    stars: 156,
    forks: 35,
    preview: '#',
    github: '#',
    download: '#'
  },
  {
    id: 4,
    title: 'وبلاگ شخصی مینیمال',
    description: 'قالب وبلاگی ساده و شیک با تمرکز بر محتوا و تجربه کاربری عالی',
    category: 'وبلاگ',
    gradient: 'from-orange-600 to-red-600',
    isNew: false,
    stars: 134,
    forks: 29,
    preview: '#',
    github: '#',
    download: '#'
  }
]
</script>
