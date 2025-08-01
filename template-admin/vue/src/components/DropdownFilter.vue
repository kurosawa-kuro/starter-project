<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="btn px-2.5 bg-white dark:bg-gray-800 border-gray-200 hover:border-gray-300 dark:border-gray-700/60 dark:hover:border-gray-600 text-gray-400 dark:text-gray-500"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Filter</span><wbr />
      <svg class="fill-current" width="16" height="16" viewBox="0 0 16 16">
        <path d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1ZM3 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM7 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Z" />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen" class="origin-top-right z-10 absolute top-full left-0 right-auto min-w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 pt-1.5 rounded-lg shadow-lg overflow-hidden mt-1" :class="align === 'right' ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'">
        <div ref="dropdown">
          <div class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase pt-1.5 pb-2 px-3">Filters</div>
          <ul class="mb-4">
            <li class="py-1 px-3">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-sm font-medium ml-2">Direct VS Indirect</span>
              </label>
            </li>
            <li class="py-1 px-3">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-sm font-medium ml-2">Real Time Value</span>
              </label>
            </li>
            <li class="py-1 px-3">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-sm font-medium ml-2">Top Channels</span>
              </label>
            </li>
            <li class="py-1 px-3">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-sm font-medium ml-2">Sales VS Refunds</span>
              </label>
            </li>
            <li class="py-1 px-3">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-sm font-medium ml-2">Last Order</span>
              </label>
            </li>
            <li class="py-1 px-3">
              <label class="flex items-center">
                <input type="checkbox" class="form-checkbox" />
                <span class="text-sm font-medium ml-2">Total Spent</span>
              </label>
            </li>
          </ul>
          <div class="py-2 px-3 border-t border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-700/20">
            <ul class="flex items-center justify-between">
              <li>
                <button class="btn-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-red-500">Clear</button>
              </li>
              <li>
                <button class="btn-xs bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300" @click="dropdownOpen = false" @focusout="dropdownOpen = false">Apply</button>
              </li>
            </ul>
          </div>          
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DropdownFilter',
  props: ['align'],
  setup() {

    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!dropdownOpen.value || dropdown.value.contains(target) || trigger.value.contains(target)) return
      dropdownOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen.value || keyCode !== 27) return
      dropdownOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return {
      dropdownOpen,
      trigger,
      dropdown,
    }
  }
}
</script>