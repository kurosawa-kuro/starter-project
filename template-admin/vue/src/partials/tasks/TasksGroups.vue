<template>
  <div class="col-span-full sm:col-span-6 xl:col-span-3">
    <!-- Column header -->
    <header>
      <div class="flex items-center justify-between mb-2">
        <h2 class="grow font-semibold text-gray-800 dark:text-gray-100 truncate">{{title}}</h2>
        <button class="shrink-0 text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 ml-2">
          <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
        </button>
      </div>
      <!-- Cards -->
      <div class="grid gap-2">
        <slot />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TasksGroups',
  props: ['title'],
}
</script>