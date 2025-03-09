<template>
  <div class="w-full min-h-[calc(100vh-4rem)] flex flex-col gap-8 custom-scrollbar" dir="rtl">
    <h1 class="text-3xl font-bold mb-8">جداول</h1>

    <!-- Basic Table -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabBasic" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabBasic === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">جدول ساده</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead class="bg-zinc-800">
              <tr>
                <th class="px-4 py-3 text-right text-sm font-medium">نام</th>
                <th class="px-4 py-3 text-right text-sm font-medium">سمت</th>
                <th class="px-4 py-3 text-right text-sm font-medium">وضعیت</th>
                <th class="px-4 py-3 text-right text-sm font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-800">
              <tr v-for="user in users" :key="user.id" class="hover:bg-zinc-800/50">
                <td class="px-4 py-3">{{ user.name }}</td>
                <td class="px-4 py-3 text-zinc-400">{{ user.role }}</td>
                <td class="px-4 py-3">
                  <span :class="[
                    'inline-flex items-center px-2 py-1 text-xs rounded-full',
                    user.status === 'فعال' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  ]">
                    {{ user.status }}
                  </span>
                </td>
                <td class="px-4 py-3">
                  <button class="text-blue-500 hover:text-blue-400">
                    <Icon name="uil:edit" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='tableBasicCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
      </div>
    </div>

    <!-- Striped Table -->
    <div class="max-w-4xl overflow-auto">
      <Tabs v-model="activeTabStriped" :tabs="['نمایش', 'کد']" />
      
      <div v-if="activeTabStriped === 'نمایش'" class="space-y-4">
        <h2 class="text-xl font-semibold mb-4">جدول راه‌راه</h2>
        <div class="overflow-x-auto rounded-lg border border-zinc-800">
          <table class="w-full border-collapse">
            <thead class="bg-zinc-800/50">
              <tr>
                <th class="px-4 py-3 text-right text-sm font-medium">شماره سفارش</th>
                <th class="px-4 py-3 text-right text-sm font-medium">محصول</th>
                <th class="px-4 py-3 text-right text-sm font-medium">قیمت</th>
                <th class="px-4 py-3 text-right text-sm font-medium">وضعیت</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-800">
              <tr v-for="(order, index) in orders" :key="order.id" 
                  :class="index % 2 === 0 ? 'bg-zinc-900' : 'bg-zinc-800/20'">
                <td class="px-4 py-3">#{{ order.id }}</td>
                <td class="px-4 py-3">{{ order.product }}</td>
                <td class="px-4 py-3 text-zinc-400">{{ order.price }} تومان</td>
                <td class="px-4 py-3">
                  <span :class="[
                    'inline-flex items-center px-2 py-1 text-xs rounded-full',
                    order.status === 'تکمیل شده' ? 'bg-green-500/10 text-green-500' : 
                    order.status === 'در حال پردازش' ? 'bg-blue-500/10 text-blue-500' : 
                    'bg-yellow-500/10 text-yellow-500'
                  ]">
                    {{ order.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-else class="bg-zinc-900 p-4 rounded-lg mt-4">
        <VCodeBlock :code='tableStripedCode' highlightjs lang="html" theme="neon-bunny" dir="ltr" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'

definePageMeta({
  layout: 'components'
})

const activeTabBasic = ref('نمایش')
const activeTabStriped = ref('نمایش')

const users = [
  { id: 1, name: 'علی محمدی', role: 'توسعه‌دهنده', status: 'فعال' },
  { id: 2, name: 'سارا احمدی', role: 'طراح', status: 'غیرفعال' },
  { id: 3, name: 'رضا کریمی', role: 'مدیر پروژه', status: 'فعال' },
]

const orders = [
  { id: '1001', product: 'لپ تاپ', price: '45,000,000', status: 'تکمیل شده' },
  { id: '1002', product: 'موبایل', price: '12,000,000', status: 'در حال پردازش' },
  { id: '1003', product: 'تبلت', price: '8,500,000', status: 'در انتظار پرداخت' },
]

// ... code exports for table templates
</script>
