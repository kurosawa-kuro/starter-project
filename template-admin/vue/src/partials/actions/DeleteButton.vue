<template>
  <div :class="selectedItems.length < 1 && 'hidden'">
    <div class="flex items-center">
      <div class="hidden xl:block text-sm italic mr-2 whitespace-nowrap"><span>{{selectedItems.length}}</span> items selected</div>
      <button class="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-red-500">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteButton',
  props: ['selectedItems'],
}
</script>