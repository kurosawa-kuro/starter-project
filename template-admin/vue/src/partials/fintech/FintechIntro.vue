<template>
  <div class="flex flex-col col-span-full bg-white dark:bg-gray-800 shadow-xs rounded-xl">
    <div class="px-5 py-6">

      <div class="md:flex md:justify-between md:items-center">
        <!-- Left side -->
        <div class="flex items-center mb-4 md:mb-0">
          <!-- Avatar -->
          <div class="mr-4">
            <img class="inline-flex rounded-full" src="../../images/user-64-14.jpg" width="64" height="64" alt="User" />
          </div>
          <!-- User info -->
          <div>
            <div class="mb-2">Hey <strong class="font-medium text-gray-800 dark:text-gray-100">Mary</strong> 👋, this is your current balance:</div>
            <div class="text-3xl font-bold text-green-500">$47,347.09</div>
          </div>
        </div>
        <!-- Right side -->
        <ul class="shrink-0 flex flex-wrap justify-end md:justify-start -space-x-3 -ml-px">
          <li>
            <a class="block" href="#0">
              <img class="w-9 h-9 rounded-full" src="../../images/company-icon-06.svg" width="36" height="36" alt="Account 01" />
            </a>
          </li>
          <li>
            <a class="block" href="#0">
              <img class="w-9 h-9 rounded-full" src="../../images/company-icon-02.svg" width="36" height="36" alt="Account 02" />
            </a>
          </li>
          <li>
            <a class="block" href="#0">
              <img class="w-9 h-9 rounded-full" src="../../images/company-icon-03.svg" width="36" height="36" alt="Account 03" />
            </a>
          </li>
          <li>
            <button class="flex justify-center items-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-violet-500 shadow-xs transition">
              <span class="sr-only">Add new account</span>
              <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16">
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FintechIntro',
}
</script>