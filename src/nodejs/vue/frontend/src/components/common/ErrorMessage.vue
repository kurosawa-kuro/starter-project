<template>
  <div v-if="message" class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/60 rounded-lg p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="w-5 h-5 text-red-400 dark:text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3 flex-1">
        <h3 class="text-sm font-medium text-red-800 dark:text-red-200">Error</h3>
        <div class="mt-2 text-sm text-red-700 dark:text-red-300">
          <p>{{ message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
})
</script> 