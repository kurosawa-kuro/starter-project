<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-xs rounded-xl">
    <header class="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
      <h2 class="font-semibold text-gray-800 dark:text-gray-100">Direct VS Indirect</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <BarChart :data="chartData" width="595" height="248" />
  </div>
</template>

<script>
import { ref } from 'vue'
import BarChart from '../../charts/BarChart01.vue'

// Import utilities
import { getCssVariable } from '../../utils/Utils'

export default {
  name: 'DashboardCard03',
  components: {
    BarChart,
  },
  setup() {
    const chartData = ref({
      labels: [
        '12-01-2022', '01-01-2023', '02-01-2023',
        '03-01-2023', '04-01-2023', '05-01-2023',
      ],
      datasets: [
        // Light blue bars
        {
          label: 'Direct',
          data: [
            800, 1600, 900, 1300, 1950, 1700,
          ],
          backgroundColor: getCssVariable('--color-sky-500'),
          hoverBackgroundColor: getCssVariable('--color-sky-600'),
          barPercentage: 0.7,
          categoryPercentage: 0.7,
          borderRadius: 4,
        },
        // Blue bars
        {
          label: 'Indirect',
          data: [
            4900, 2600, 5350, 4800, 5200, 4800,
          ],
          backgroundColor: getCssVariable('--color-violet-500'),
          hoverBackgroundColor: getCssVariable('--color-violet-600'),
          barPercentage: 0.7,
          categoryPercentage: 0.7,
          borderRadius: 4,
        },
      ],
    })

    return {
      chartData,
    }    
  }
}
</script>