<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">

          <!-- Page header -->
          <div class="mb-8">
            <!-- Title -->
            <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Account Settings</h1>
          </div>

          <!-- Content --> 
          <div class="bg-white dark:bg-gray-800 shadow-xs rounded-xl mb-8">
            <div class="flex flex-col md:flex-row md:-mr-px">
              <SettingsSidebar />
              <PlansPanel />
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
import SettingsSidebar from '../../partials/settings/SettingsSidebar.vue'
import PlansPanel from '../../partials/settings/PlansPanel.vue'

export default {
  name: 'Apps',
  components: {
    Sidebar,
    Header,
    SettingsSidebar,
    PlansPanel,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>