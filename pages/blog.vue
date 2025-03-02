<template>
  <div class="bg-zinc-950 w-full min-h-screen p-6 md:p-8" dir="rtl">
    <div class="max-w-5xl mx-auto">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">وبلاگ تیلویند فارسی</h1>
        <p class="text-zinc-400 text-lg">آخرین مقالات، آموزش‌ها و اخبار دنیای طراحی و برنامه‌نویسی وب</p>
      </div>

      <!-- Featured Post -->
      <div class="relative group rounded-2xl overflow-hidden mb-16">
        <img 
          :src="featuredPost.image" 
          alt="Featured post cover"
          class="w-full aspect-[21/9] object-cover"
        />
        <div class="absolute inset-0 bg-black/60">
          <div class="absolute bottom-0 p-8 w-full">
            <div class="flex gap-3 mb-4">
              <span v-for="tag in featuredPost.tags" :key="tag" 
                class="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                {{ tag }}
              </span>
            </div>
            <h2 class="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {{ featuredPost.title }}
            </h2>
            <p class="text-zinc-200 text-lg mb-6 max-w-3xl">{{ featuredPost.excerpt }}</p>
          </div>
        </div>
      </div>

      <!-- Latest Posts -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <article v-for="post in posts" :key="post.id" class="group">
          <div class="aspect-[16/9] rounded-xl overflow-hidden mb-4">
            <img :src="post.image" :alt="post.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div class="flex gap-3 mb-3">
            <span v-for="tag in post.tags" :key="tag" 
              class="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">
              {{ tag }}
            </span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {{ post.title }}
          </h3>
          <p class="text-zinc-400 text-sm mb-4 line-clamp-2">{{ post.excerpt }}</p>
        </article>
      </div>

      <!-- Newsletter -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12">
        <div class="max-w-2xl">
          <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">عضویت در خبرنامه</h3>
          <p class="text-white/80 mb-6">برای دریافت آخرین مقالات و آموزش‌ها در خبرنامه ما عضو شوید.</p>
          <div class="flex gap-3">
            <input type="email" placeholder="ایمیل شما" class="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none" />
            <button class="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
              عضویت
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const featuredPost = {
  id: 1,
  title: 'معرفی ویژگی‌های جدید تیلویند ۴',
  excerpt: 'بررسی تمام ویژگی‌های جدید نسخه ۴ تیلویند و نحوه استفاده از آن‌ها در پروژه‌های واقعی، از Container Query تا Multi-Variant Components.',
  image: 'https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg',
  tags: ['ویژه', 'آموزش تیلویند']
}

const posts = [
  {
    id: 2,
    title: 'راهنمای جامع Grid در تیلویند',
    excerpt: 'آموزش کامل سیستم Grid در تیلویند و نحوه ایجاد لایه‌های پیچیده با استفاده از کلاس‌های آماده',
    image: 'https://tailwindcss.com/_next/static/media/browser@75.c89bd659.jpg',
    tags: ['آموزش', 'طراحی رابط کاربری']
  },
]
</script>
