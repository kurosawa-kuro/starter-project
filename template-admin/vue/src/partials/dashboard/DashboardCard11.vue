<template>
  <div class="col-span-full xl:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
    <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
      <h2 class="font-semibold text-gray-800 dark:text-gray-100">Income/Expenses</h2>
    </header>
    <div class="p-3">

      <!-- Card content -->
      <!-- "Today" group -->
      <div>
        <header class="text-xs uppercase text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700/50 rounded-xs font-semibold p-2">Today</header>
        <ul class="my-1">
          <!-- Item -->
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-red-500 my-2 mr-3">
              <svg class="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
              </svg>
            </div>
            <div class="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Qonto</a> billing</div>
                <div class="shrink-0 self-start ml-2">
                  <span class="font-medium text-gray-800 dark:text-gray-100">-$49.88</span>
                </div>
              </div>
            </div>
          </li>
          <!-- Item -->
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
              <svg class="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
              </svg>
            </div>
            <div class="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Cruip.com</a> Market Ltd 70 Wilson St London</div>
                <div class="shrink-0 self-start ml-2">
                  <span class="font-medium text-green-600">+249.88</span>
                </div>
              </div>
            </div>
          </li>
          <!-- Item -->
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
              <svg class="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
              </svg>
            </div>
            <div class="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Notion Labs Inc</a></div>
                <div class="shrink-0 self-start ml-2">
                  <span class="font-medium text-green-600">+99.99</span>
                </div>
              </div>
            </div>
          </li>
          <!-- Item -->
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3">
              <svg class="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                <path d="M18.3 11.3l-1.4 1.4 4.3 4.3H11v2h10.2l-4.3 4.3 1.4 1.4L25 18z" />
              </svg>
            </div>
            <div class="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">Market Cap Ltd</a></div>
                <div class="shrink-0 self-start ml-2">
                  <span class="font-medium text-green-600">+1,200.88</span>
                </div>
              </div>
            </div>
          </li>
          <!-- Item -->
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-gray-200 my-2 mr-3">
              <svg class="w-9 h-9 fill-current text-gray-400" viewBox="0 0 36 36">
                <path d="M21.477 22.89l-8.368-8.367a6 6 0 008.367 8.367zm1.414-1.413a6 6 0 00-8.367-8.367l8.367 8.367zM18 26a8 8 0 110-16 8 8 0 010 16z" />
              </svg>
            </div>
            <div class="grow flex items-center border-b border-gray-100 dark:border-gray-700/60 text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">App.com</a> Market Ltd 70 Wilson St London</div>
                <div class="shrink-0 self-start ml-2">
                  <span class="font-medium text-gray-800 dark:text-gray-100 line-through">+$99.99</span>
                </div>
              </div>
            </div>
          </li>
          <!-- Item -->
          <li class="flex px-2">
            <div class="w-9 h-9 rounded-full shrink-0 bg-red-500 my-2 mr-3">
              <svg class="w-9 h-9 fill-current text-white" viewBox="0 0 36 36">
                <path d="M17.7 24.7l1.4-1.4-4.3-4.3H25v-2H14.8l4.3-4.3-1.4-1.4L11 18z" />
              </svg>
            </div>
            <div class="grow flex items-center text-sm py-2">
              <div class="grow flex justify-between">
                <div class="self-center"><a class="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white" href="#0">App.com</a> Market Ltd 70 Wilson St London</div>
                <div class="shrink-0 self-start ml-2">
                  <span class="font-medium text-gray-800 dark:text-gray-100">-$49.88</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard11',
}
</script>