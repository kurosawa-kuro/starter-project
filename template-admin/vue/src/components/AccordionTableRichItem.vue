<template>
  <tbody class="text-sm">
    <tr>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="flex items-center text-gray-800">
          <div class="w-10 h-10 shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mr-2 sm:mr-3">
            <img class="rounded-full ml-1" :src="item.image" width="40" height="40" :alt="item.customer" />
          </div>
          <div class="font-medium text-gray-800 dark:text-gray-100">{{item.customer}}</div>
        </div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="text-left">{{item.email}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="text-left">{{item.location}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="text-left">{{item.date}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="text-left text-green-500 font-medium">{{item.amount}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div class="flex items-center">
          <button class="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 transform" :class="{ 'rotate-180': descriptionOpen }" @click.prevent="descriptionOpen = !descriptionOpen" :aria-expanded="descriptionOpen" :aria-controls="`description-${item.id}`">
            <span class="sr-only">Menu</span>
            <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
    <!--
    Example of content revealing when clicking the button on the right side:
    Note that you must set a "colspan" attribute on the <td> element,
    and it should match the number of columns in your table
    -->
    <tr :id="`description-${item.id}`" role="region" :class="!descriptionOpen && 'hidden'">
      <td colspan="10" class="px-2 first:pl-5 last:pr-5 py-3">
        <div class="bg-gray-50 dark:bg-gray-950/[0.15] dark:text-gray-400 p-3 -mt-3">
          <div class="text-sm mb-3">
            <div class="font-medium text-gray-800 dark:text-gray-100 mb-1">{{item.descriptionTitle}}</div>
            <div>{{item.descriptionBody}}</div>
          </div>
          <button class="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Approve</button>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AccordionTableRichItem',
  props: ['item'],
  setup() {

    const descriptionOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)

    return {
      descriptionOpen,
      trigger,
      dropdown,
    }
  }
}
</script>