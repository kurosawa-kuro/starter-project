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
            <h1 class="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Accordion</h1>
          </div>

          <div>

            <!-- Components -->
            <div class="space-y-8 mt-8">

              <!-- Basic Accordion -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Basic Accordion</h2>
                <AccordionBasic title="Accordion Title">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionBasic>
              </div>

              <!-- Table Row with Accordion -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Table Row with Accordion</h2>
                <!-- Start -->
                <div class="rounded-lg border border-gray-200 dark:border-gray-700/60">
                  <div class="overflow-x-auto">
                    <table class="table-auto w-full dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700/60">
                      <AccordionTableItem
                        v-for="item in items"
                        :key="item.id"
                        :item="item"
                      />                        
                    </table>
                  </div>
                </div>
                <!-- End -->
              </div>

              <!-- Rich Table Row with Accordion -->
              <div>
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-6">Rich Table Row with Accordion</h2>
                <!-- Start -->
                <div class="rounded-lg border border-gray-200 dark:border-gray-700/60">
                  <div class="overflow-x-auto">
                    <table class="table-auto w-full dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700/60">
                      <AccordionTableRichItem
                        v-for="item in items2"
                        :key="item.id"
                        :item="item"
                      />                        
                    </table>
                  </div>
                </div>
                <!-- End -->
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
import AccordionBasic from '../../components/AccordionBasic.vue'
import AccordionTableItem from '../../components/AccordionTableItem.vue'
import AccordionTableRichItem from '../../components/AccordionTableRichItem.vue'

import Image01 from '../../images/user-40-07.jpg'

export default {
  name: 'AccordionPage',
  components: {
    Sidebar,
    Header,
    AccordionBasic,
    AccordionTableItem,
    AccordionTableRichItem,
  },
  setup() {

    const sidebarOpen = ref(false)

    const items = ref([
      {
        id: '0',
        image: Image01,
        customer: 'Mark Cameron',
        total: '$129.00',
        status: 'Refunded',
        items: '1',
        location: '🇲🇽 New Mexico, MX',
        type: 'Subscription',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
    ])

    const items2 = ref([
      {
        id: '0',
        image: Image01,
        customer: 'Mark Cameron',
        email: 'mark.cameron@app.com',
        location: '🇬🇧 London, UK',
        date: '22/01/2024',
        amount: '+249.88',
        descriptionTitle: 'Excepteur sint occaecat cupidatat.',
        descriptionBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis. Ut enim ad minim veniam quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ])    

    return {
      sidebarOpen,
      items,
      items2,
    }  
  }
}
</script>