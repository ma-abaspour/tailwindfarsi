<template>
  <div class="bg-zinc-950 w-full min-h-screen p-6 md:p-8" dir="rtl">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">مشارکت در پروژه</h1>
        <p class="text-zinc-400 text-lg">به جامعه توسعه‌دهندگان تیلویند فارسی خوش آمدید</p>
      </div>

      <!-- Main Content -->
      <div class="space-y-12">
        <!-- Quick Actions -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://github.com/your-repo/issues/new" target="_blank" 
            class="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group">
            <div class="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400">ثبت ایده جدید</h3>
            <p class="text-zinc-400">پیشنهاد کامپوننت یا ویژگی جدید</p>
          </a>

          <a href="https://github.com/your-repo/issues" target="_blank"
            class="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group">
            <div class="w-12 h-12 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400">رفع باگ</h3>
            <p class="text-zinc-400">گزارش و رفع مشکلات موجود</p>
          </a>

          <a href="https://github.com/your-repo/pulls" target="_blank"
            class="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group">
            <div class="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400">توسعه کد</h3>
            <p class="text-zinc-400">مشارکت در توسعه پروژه</p>
          </a>
        </div>

        <!-- Guidelines -->
        <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 md:p-8">
          <h2 class="text-2xl font-bold text-white mb-6">راهنمای مشارکت</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-1">1</div>
              <div>
                <h3 class="font-medium text-white mb-1">مخزن گیت را فورک کنید</h3>
                <p class="text-zinc-400">ابتدا مخزن اصلی پروژه را در حساب گیت‌هاب خود فورک کنید</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-1">2</div>
              <div>
                <h3 class="font-medium text-white mb-1">تغییرات را اعمال کنید</h3>
                <p class="text-zinc-400">کد را در نسخه فورک شده توسعه دهید و تست کنید</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center flex-shrink-0 mt-1">3</div>
              <div>
                <h3 class="font-medium text-white mb-1">درخواست ادغام بدهید</h3>
                <p class="text-zinc-400">یک Pull Request به مخزن اصلی ارسال کنید</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4">کد آو کانداکت</h3>
            <p class="text-zinc-400 mb-4">ما متعهد به ایجاد یک محیط دوستانه و همکاری برای همه هستیم.</p>
            <a href="#" class="text-blue-500 hover:text-blue-400">مطالعه بیشتر →</a>
          </div>

          <div class="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4">راهنمای نگارش</h3>
            <p class="text-zinc-400 mb-4">استانداردهای کدنویسی و راهنمای سبک نگارش ما را مطالعه کنید.</p>
            <a href="#" class="text-blue-500 hover:text-blue-400">مطالعه بیشتر →</a>
          </div>
        </div>

        <!-- Community -->
        <div class="text-center">
          <h2 class="text-2xl font-bold text-white mb-6">به جامعه ما بپیوندید</h2>
          <div class="flex justify-center gap-4">
            <a href="#" class="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              گیت‌هاب
            </a>
            <a href="#" class="px-6 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/></svg>
              دیسکورد
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
