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

          <div class="max-w-2xl m-auto mt-16">

            <div class="text-center px-4">
              <div class="inline-flex mb-8">
                <img class="dark:hidden" src="../../images//404-illustration.svg" width="176" height="176" alt="404 illustration" />
                <img class="hidden dark:block" src="../../images//404-illustration-dark.svg" width="176" height="176" alt="404 illustration dark" />                
              </div>
              <div class="mb-6">Hmm...this page doesn't exist. Try searching for something else!</div>
              <router-link to="/" class="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">Back To Dashboard</router-link>
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
  name: 'PageNotFound',
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