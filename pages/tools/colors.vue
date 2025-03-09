<template>
  <div class="w-full min-h-[calc(100vh-4rem)]" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">رنگ‌ها</h1>
    
    <div class="space-y-12">
      <!-- Color Introduction -->
      <div class="prose prose-invert max-w-none">
        <p class="text-zinc-400">
          پالت رنگ‌های پیش‌فرض تیلویند با تمرکز بر کاربردپذیری و زیبایی برای رابط‌های کاربری فارسی بهینه‌سازی شده است.
        </p>
      </div>

      <!-- Main Colors -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold">رنگ‌های اصلی</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Blue -->
          <div class="space-y-3">
            <h3 class="text-sm font-medium text-zinc-400">آبی</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-12 h-12 rounded-lg bg-blue-500"></div>
                <div>
                  <div class="text-sm font-medium">blue-500</div>
                  <div class="text-xs text-zinc-400">#3B82F6</div>
                </div>
              </div>
              <div class="flex gap-2">
                <div class="w-8 h-8 rounded bg-blue-400"></div>
                <div class="w-8 h-8 rounded bg-blue-500"></div>
                <div class="w-8 h-8 rounded bg-blue-600"></div>
                <div class="w-8 h-8 rounded bg-blue-700"></div>
              </div>
            </div>
          </div>

          <!-- Green -->
          <div class="space-y-3">
            <h3 class="text-sm font-medium text-zinc-400">سبز</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <div class="w-12 h-12 rounded-lg bg-green-500"></div>
                <div>
                  <div class="text-sm font-medium">green-500</div>
                  <div class="text-xs text-zinc-400">#22C55E</div>
                </div>
              </div>
              <div class="flex gap-2">
                <div class="w-8 h-8 rounded bg-green-400"></div>
                <div class="w-8 h-8 rounded bg-green-500"></div>
                <div class="w-8 h-8 rounded bg-green-600"></div>
                <div class="w-8 h-8 rounded bg-green-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gray Scale -->
      <div class="space-y-6">
        <h2 class="text-xl font-semibold">مقیاس خاکستری</h2>
        <div class="grid grid-cols-10 gap-2">
          <div v-for="n in 10" :key="n" 
            :class="[
              'h-20 rounded-lg',
              `bg-zinc-${n * 100}`
            ]">
          </div>
        </div>
        <div class="text-sm text-zinc-400">
          از zinc-100 تا zinc-900 برای ایجاد سلسله‌مراتب بصری استفاده کنید.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'tools'
})
</script>
