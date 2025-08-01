<template>
  <div class="relative">
    <button
      ref="trigger"
      class="btn justify-between min-w-44 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
      aria-label="Select date range"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="flex items-center">
        <svg class="fill-current text-gray-400 dark:text-gray-500 shrink-0 mr-2" width="16" height="16" viewBox="0 0 16 16">
          <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
          <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
        </svg>
        <span>{{options[selected].period}}</span>
      </span>
      <svg class="shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500" width="11" height="7" viewBox="0 0 11 7">
        <path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen" class="z-10 absolute top-full right-0 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1">
        <div
          ref="dropdown"
          class="font-medium text-sm text-gray-600 dark:text-gray-300"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >

          <button
            v-for="option in options"
            :key="option.id"
            class="flex items-center w-full hover:bg-gray-50 dark:hover:bg-gray-700/20 py-1 px-3 cursor-pointer"
            :class="option.id === selected && 'text-violet-500'"
            @click="selected = option.id; dropdownOpen = false"
          >
            <svg class="shrink-0 mr-2 fill-current text-violet-500" :class="option.id !== selected && 'invisible'" width="12" height="9" viewBox="0 0 12 9">
              <path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
            </svg>
            <span>{{option.period}}</span>
          </button>          
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DateSelect',
  setup() {

    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)    
    const selected = ref(2)

    const options = ref([
      {
        id: 0,
        period: 'Today'
      },
      {
        id: 1,
        period: 'Last 7 Days'
      },
      {
        id: 2,
        period: 'Last Month'
      },
      {
        id: 3,
        period: 'Last 12 Months'
      },
      {
        id: 4,
        period: 'All Time'
      }
    ])

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
      selected,
      options,
    }
  }
}
</script>