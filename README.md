# تیلویند فارسی (Tailwind Farsi)

کیت رابط کاربری تیلویند برای وب‌سایت‌های فارسی. مجموعه‌ای از کامپوننت‌های آماده و بهینه‌سازی شده برای توسعه رابط‌های کاربری فارسی با Tailwind CSS.

## ویژگی‌ها

- 🎯 بهینه‌سازی شده برای زبان فارسی
- 🎨 طراحی زیبا و مدرن
- ⚡️ سبک و سریع
- 📱 ریسپانسیو
- 🌙 پشتیبانی از حالت تاریک
- 💻 کد تمیز و استاندارد
- 🔧 قابل شخصی‌سازی

## نصب و راه‌اندازی

1. این مخزن را کلون کنید:
```bash
git clone https://github.com/ma-abaspour/tailwindfarsi.git
cd tailwindfarsi
```

2. وابستگی‌ها را نصب کنید:
```bash
npm install
```

3. پروژه را در حالت توسعه اجرا کنید:
```bash
npm run dev
```

## پیش‌نیازها

- Node.js نسخه 16 یا بالاتر
- Nuxt.js 3
- Tailwind CSS 3

## ساختار پروژه

```
tailwindfarsi/
├── components/     # کامپوننت‌های قابل استفاده مجدد
├── layouts/        # قالب‌های صفحات
├── pages/          # صفحات پروژه
├── public/         # فایل‌های استاتیک
└── assets/         # فایل‌های سبک و تصاویر
```

## نحوه استفاده

برای استفاده از کامپوننت‌ها، می‌توانید به مستندات جامع در [وب‌سایت](https://tailwindfarsi.ir/components) مراجعه کنید.

مثال ساده:

```vue
<template>
  <div dir="rtl">
    <TButton variant="primary">دکمه اصلی</TButton>
    <TInput 
      v-model="username"
      label="نام کاربری"
      placeholder="نام کاربری خود را وارد کنید"
    />
  </div>
</template>
```

## مشارکت

خوشحال می‌شویم در توسعه این پروژه مشارکت کنید! برای مشارکت:

1. یک fork از پروژه ایجاد کنید
2. تغییرات خود را در یک شاخه جدید اعمال کنید
3. درخواست pull request ارسال کنید

## مجوز

این پروژه تحت مجوز MIT منتشر شده است.

## پشتیبانی

- [گزارش مشکل](https://github.com/ma-abaspour/tailwindfarsi/issues)
- [Discord](https://discord.gg/tailwindfarsi)
- [توییتر](https://twitter.com/tailwindfarsi)

## سازندگان

- [محمد عباسپور](https://github.com/ma-abaspour)
- و همه [مشارکت‌کنندگان](https://github.com/ma-abaspour/tailwindfarsi/graphs/contributors)
