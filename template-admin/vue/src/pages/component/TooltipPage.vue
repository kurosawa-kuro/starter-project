<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" variant="v2" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-900">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" variant="v3" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

          <!-- Page header -->
          <div class="mb-8">
            <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Tooltip</h1>
          </div>

          <div>

            <!-- Components -->
            <div class="space-y-8 mt-8">

              <!-- Tooltip Types -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Tooltip Types</h2>
                <div class="flex flex-wrap items-center -m-4">

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip bg="light">
                        <div class="text-xs whitespace-nowrap">Just a tip</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Label White</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip bg="dark">
                        <div class="text-xs text-gray-200 whitespace-nowrap">Just a tip</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Label Dark</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip size="md" bg="light">
                        <div class="text-xs">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Basic White</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip size="md" bg="dark">
                        <div class="text-xs text-gray-200">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Basic Dark</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip size="lg" bg="light">
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-500">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Large White</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip size="lg" bg="dark">
                        <div class="text-sm font-medium text-gray-200">Excepteur sint occaecat cupidata non proident, sunt in.</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Large Dark</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip size="lg" bg="light">
                        <div class="text-xs">
                          <div class="font-medium text-gray-800 mb-0.5">Let's Talk Paragraph</div>
                          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>                        
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500">Rich White</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip size="lg" bg="dark">
                        <div class="text-xs">
                          <div class="font-medium text-gray-200 mb-0.5">Let's Talk Paragraph</div>
                          <div class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        </div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Rich Dark</div>
                    </div>
                  </div>                                                                                                                              

                </div>
              </div>

              <!-- Tooltip Position -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Tooltip Position</h2>
                <div class="flex flex-wrap items-center -m-4">

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip>
                        <div class="text-xs whitespace-nowrap">Just a tip</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Top</div>
                    </div>
                  </div>
                  
                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip position="bottom">
                        <div class="text-xs whitespace-nowrap">Just a tip</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Bottom</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip position="left">
                        <div class="text-xs whitespace-nowrap">Just a tip</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Left</div>
                    </div>
                  </div>

                  <div class="m-4">
                    <div class="flex items-center space-x-2">
                      <!-- Start -->
                      <Tooltip position="right">
                        <div class="text-xs whitespace-nowrap">Just a tip</div>
                      </Tooltip>
                      <!-- End -->
                      <div class="text-sm font-medium text-gray-500 dark:text-gray-400">Right</div>
                    </div>
                  </div>                                                      

                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import Tooltip from '../../components/Tooltip.vue'

export default {
  name: 'TooltipPage',
  components: {
    Sidebar,
    Header,
    Tooltip,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>