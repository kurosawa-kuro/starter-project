<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">

        <!-- Profile background -->
        <div class="h-56 bg-gray-200 dark:bg-gray-900">
          <img class="object-cover h-full w-full" src="../../images/company-bg.jpg" width="2560" height="440" alt="Company background" />
        </div>

        <!-- Header -->
        <header class="text-center bg-white/30 dark:bg-gray-800/30 pb-6 border-b border-gray-200 dark:border-gray-700/60">
          <div class="px-4 sm:px-6 lg:px-8 w-full">
            <div class="max-w-3xl mx-auto">

              <!-- Avatar -->
              <div class="-mt-12 mb-2">
                <div class="inline-flex -ml-1 -mt-1 sm:mb-0">
                  <img class="rounded-full border-4 border-white dark:border-gray-900" src="../../images/company-icon-01.svg" width="104" height="104" alt="Avatar" />
                </div>
              </div>

              <!-- Company name and info -->
              <div class="mb-4">
                <h2 class="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-2">Revolut Ltd</h2>
                <p>We're building a financial superapp that combines all the best tools into one place 🚀</p>
              </div>
              <!-- Meta -->
              <div class="inline-flex flex-wrap justify-center sm:justify-start space-x-4">
                <div class="flex items-center">
                  <svg class="fill-current shrink-0 text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                  </svg>
                  <span class="text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400 ml-2">London, UK</span>
                </div>
                <div class="flex items-center">
                  <svg class="fill-current shrink-0 text-gray-400 dark:text-gray-500" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                  </svg>
                  <a class="text-sm font-medium whitespace-nowrap text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 ml-2" href="#0">revolut.com</a>
                </div>
              </div>

            </div>
          </div>
        </header>

        <!-- Page content -->
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full">
          <div class="max-w-3xl mx-auto">

            <h3 class="text-xl leading-snug text-gray-800 dark:text-gray-100 font-bold mb-6">Open Positions at Revolut Ltd</h3>

            <!-- Job list -->
            <div class="space-y-6">

              <!-- Group 1 -->
              <div>
                <h4 class="text-gray-800 dark:text-gray-100 font-medium mb-4">Programming</h4>
                <!-- Job list -->
                <div class="space-y-2">
                    <JobListItem
                      v-for="item in items[0]"
                      :key="item.id"
                      :item="item"
                    />                    
                </div>
              </div>

              <!-- Group 2 -->
              <div>
                <h4 class="text-gray-800 dark:text-gray-100 font-medium mb-4">Design</h4>
                <!-- Job list -->
                <div class="space-y-2">
                    <JobListItem
                      v-for="item in items[1]"
                      :key="item.id"
                      :item="item"
                    />                    
                </div>
              </div>

              <!-- Group 3 -->
              <div>
                <h4 class="text-gray-800 dark:text-gray-100 font-medium mb-4">Management / Finance</h4>
                <!-- Job list -->
                <div class="space-y-2">
                    <JobListItem
                      v-for="item in items[2]"
                      :key="item.id"
                      :item="item"
                    />                    
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
import JobListItem from '../../partials/job/JobListItem.vue'

import CompanyImage from '../../images/company-icon-01.svg'

export default {
  name: 'CompanyProfile',
  components: {
    Sidebar,
    Header,
    JobListItem,
  },
  setup() {

    const sidebarOpen = ref(false)

    const items = ref([
      // Group 1
      [
        {
          id: 0,
          image: CompanyImage,
          company: 'Company 01',
          role: 'Senior Software Engineer Backend',
          link: '/job/job-post',
          details: 'Full-time / Remote / London, UK',
          date: 'Jan 7',
          type: 'New',
          fav: false,
        },
        {
          id: 1,
          image: CompanyImage,
          company: 'Company 02',
          role: 'React.js Software Developer',
          link: '/job/job-post',
          details: 'Full-time / Remote / London, UK',
          date: 'Jan 6',
          type: 'New',
          fav: true,
        }, 
        {
          id: 2,
          image: CompanyImage,
          company: 'Company 03',
          role: 'Senior Full Stack Rails Developer',
          link: '/job/job-post',
          details: 'Full-time / Remote / London, UK',
          date: 'Jan 6',
          type: 'New',
          fav: false,
        },                                                        
      ],
      // Group 2
      [
        {
          id: 0,
          image: CompanyImage,
          company: 'Company 01',
          role: 'Senior Web App Designer',
          link: '/job/job-post',
          details: 'Full-time / Remote / London, UK',
          date: 'Jan 3',
          type: '',
          fav: false,
        },
        {
          id: 1,
          image: CompanyImage,
          company: 'Company 02',
          role: 'Senior UI/UX Designer',
          link: '/job/job-post',
          details: 'Full-time / Remote / London, UK',
          date: 'Jan 3',
          type: '',
          fav: false,
        },                                                       
      ],
      // Group 3
      [
        {
          id: 0,
          image: CompanyImage,
          company: 'Company 01',
          role: 'Financial Planning & Analysis Manager',
          link: '/job/job-post',
          details: 'Full-time / Remote / London, UK',
          date: 'Jan 2',
          type: '',
          fav: false,
        },
        {
          id: 1,
          image: CompanyImage,
          company: 'Company 02',
          role: 'Senior Consultant Growth Strategy',
          link: '/job/job-post',
          details: 'Full-time / Remote / London, UK',
          date: 'Jan 2',
          type: '',
          fav: false,
        },                                                       
      ],
    ])

    return {
      sidebarOpen,
      items,
    }  
  }
}
</script>