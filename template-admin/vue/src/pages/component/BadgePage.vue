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
            <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Badge</h1>
          </div>

          <div>

            <!-- Components -->
            <div class="space-y-8 mt-8">

              <!-- Basic Small -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Basic Small</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="btn-xs text-xs bg-violet-500/20 text-violet-600 px-2.5 py-1 rounded-full shadow-none">Working on</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-sky-500/20 text-sky-700 rounded-full text-center px-2.5 py-1">Exciting news</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-green-500/20 text-green-700 rounded-full text-center px-2.5 py-1">Product</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-yellow-500/20 text-yellow-700 rounded-full text-center px-2.5 py-1">Announcement</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-red-500/20 text-red-700 rounded-full text-center px-2.5 py-1">Bug Fix</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-blue-500/20 text-blue-600 rounded-full text-center px-2.5 py-1">Customer Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-gray-400/20 text-gray-500 dark:text-gray-400 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-600 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Basic Large -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Basic Large</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-violet-500/20 text-violet-600 rounded-full text-center px-2.5 py-1">Working on</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-sky-500/20 text-sky-700 rounded-full text-center px-2.5 py-1">Exciting news</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-green-500/20 text-green-700 rounded-full text-center px-2.5 py-1">Product</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-yellow-500/20 text-yellow-700 rounded-full text-center px-2.5 py-1">Announcement</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-red-500/20 text-red-700 rounded-full text-center px-2.5 py-1">Bug Fix</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-blue-500/20 text-blue-600 rounded-full text-center px-2.5 py-1">Customer Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-gray-400/20 text-gray-500 dark:text-gray-400 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-gray-700 text-gray-100 dark:bg-gray-200 dark:text-gray-600 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Basic with Icon -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Basic with Icon</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="inline-flex items-center text-xs font-medium bg-gray-900/60 text-gray-100 rounded-full text-center px-2 py-0.5">
                      <svg class="w-3 h-3 shrink-0 fill-current text-yellow-500 mr-1" viewBox="0 0 12 12">
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                      <span>Special Offer</span>
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="inline-flex items-center text-sm font-medium bg-gray-900/60 text-gray-100 rounded-full text-center px-2 py-0.5">
                      <svg class="w-3 h-3 shrink-0 fill-current text-yellow-500 mr-1" viewBox="0 0 12 12">
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                      <span>Special Offer</span>
                    </div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Basic for Charts -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Basic for Charts</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+29%</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm font-medium text-red-700 px-1.5 bg-red-500/20 rounded-full">-14%</div>
                    <!-- End -->
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

export default {
  name: 'BadgePage',
  components: {
    Sidebar,
    Header,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>