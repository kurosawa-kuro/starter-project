<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
    <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
      <h2 class="font-semibold text-gray-800 dark:text-gray-100">Top Pages</h2>
    </header>
    <div class="grow p-3">
      <div class="flex flex-col h-full">
        <!-- Card content -->
        <div class="grow">
          <ul class="flex justify-between text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold px-2 space-x-2">
            <li>Source</li>
            <li>Pageviews</li>
          </ul>

          <ul class="space-y-1 text-sm text-gray-800 dark:text-gray-100 mt-3 mb-4">
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 82%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>cruip.com/</div>
                <div class="font-medium">28K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 70%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>preview.cruip.com/open-pro/</div>
                <div class="font-medium">12K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 60%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>preview.cruip.com/appy/</div>
                <div class="font-medium">9.7K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 44%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>cruip.com/unlimited/</div>
                <div class="font-medium">9.2K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 40%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>preview.cruip.com/simple/</div>
                <div class="font-medium">7K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 30%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>cruip.com/about-us/</div>
                <div class="font-medium">6.4K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 22%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>docs.cruip.com/</div>
                <div class="font-medium">5.4K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-green-50 dark:bg-green-400/20 rounded-r" aria-hidden="true" style="width: 12%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>preview.cruip.com/twist/</div>
                <div class="font-medium">2.2K</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- Card footer -->
        <div class="text-center pt-4 pb-1 border-t border-gray-100 dark:border-gray-700/60">
          <router-link class="text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400" to="#0">Page Report -&gt;</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalyticsCard06',
}
</script>