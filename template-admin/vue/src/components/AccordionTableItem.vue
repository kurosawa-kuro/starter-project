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
        <div class="text-left font-medium text-green-600">{{item.total}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="inline-flex font-medium bg-yellow-500/20 text-yellow-700 rounded-full text-center px-2.5 py-0.5">{{item.status}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="text-center">{{item.items}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="text-left">{{item.location}}</div>
      </td>
      <td class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div class="flex items-center">
          <svg class="fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16">
            <path d="M4.3 4.5c1.9-1.9 5.1-1.9 7 0 .7.7 1.2 1.7 1.4 2.7l2-.3c-.2-1.5-.9-2.8-1.9-3.8C10.1.4 5.7.4 2.9 3.1L.7.9 0 7.3l6.4-.7-2.1-2.1zM15.6 8.7l-6.4.7 2.1 2.1c-1.9 1.9-5.1 1.9-7 0-.7-.7-1.2-1.7-1.4-2.7l-2 .3c.2 1.5.9 2.8 1.9 3.8 1.4 1.4 3.1 2 4.9 2 1.8 0 3.6-.7 4.9-2l2.2 2.2.8-6.4z" />
          </svg>
          <div>{{item.type}}</div>
        </div>
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
        <div class="flex items-center bg-gray-50 dark:bg-gray-950/[0.15] dark:text-gray-400 p-3 -mt-3">
          <svg class="shrink-0 fill-current text-gray-400 dark:text-gray-500 mr-2" width="16" height="16">
            <path d="M1 16h3c.3 0 .5-.1.7-.3l11-11c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-11 11c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1zm1-3.6l10-10L13.6 4l-10 10H2v-1.6z" />
          </svg>
          <div class="italic">{{item.description}}</div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AccordionTableItem',
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