<template>
  <div class="grid xl:grid-cols-2 gap-6">

    <!-- Item 1 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-01.jpg" width="220" height="236" alt="Meetup 01" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Mon 27 Dec, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">Silicon Valley Bootstrapper Breakfast Online for 2024</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-01.jpg" width="28" height="28" alt="User 01" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-04.jpg" width="28" height="28" alt="User 04" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-05.jpg" width="28" height="28" alt="User 05" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+22</div>
          </div>
        </div>
      </div>
    </article>

    <!-- Item 2 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-02.jpg" width="220" height="236" alt="Meetup 02" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Mon 27 Dec, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">New York & New Jersey Virtual Retreat 2024</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-02.jpg" width="28" height="28" alt="User 02" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-03.jpg" width="28" height="28" alt="User 03" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-04.jpg" width="28" height="28" alt="User 04" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+132</div>
          </div>
        </div>
      </div>
    </article>

    <!-- Item 3 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-03.jpg" width="220" height="236" alt="Meetup 03" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Wed 29 Dec, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">The World of AI and Machine Learning — Open Chat</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-06.jpg" width="28" height="28" alt="User 06" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-03.jpg" width="28" height="28" alt="User 03" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-01.jpg" width="28" height="28" alt="User 01" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+12</div>
          </div>
        </div>
      </div>
    </article>

    <!-- Item 4 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-04.jpg" width="220" height="236" alt="Meetup 04" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Wed 29 Dec, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">NYC Code & Coffee 2.0 @ Freehold Brooklyn</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-05.jpg" width="28" height="28" alt="User 05" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-02.jpg" width="28" height="28" alt="User 02" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+17</div>
          </div>
        </div>
      </div>
    </article>

    <!-- Item 5 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-05.jpg" width="220" height="236" alt="Meetup 05" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Mon 3 Jan, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">Acme Inc. London Meetup: Women in Tech Night</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-02.jpg" width="28" height="28" alt="User 02" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-01.jpg" width="28" height="28" alt="User 01" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+117</div>
          </div>
        </div>
      </div>
    </article>

    <!-- Item 6 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-06.jpg" width="220" height="236" alt="Meetup 06" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Thu 6 Jan, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">Founder Worldwide - First Meetup of 2022!</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-03.jpg" width="28" height="28" alt="User 03" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-05.jpg" width="28" height="28" alt="User 05" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-04.jpg" width="28" height="28" alt="User 04" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+64</div>
          </div>
        </div>
      </div>
    </article>

    <!-- Item 7 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-07.jpg" width="220" height="236" alt="Meetup 07" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Thu 6 Jan, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">NYC Blockchain Network - Monthly 3rd Thursday Meetup</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-02.jpg" width="28" height="28" alt="User 02" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-04.jpg" width="28" height="28" alt="User 04" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+112</div>
          </div>
        </div>
      </div>
    </article>

    <!-- Item 8 -->
    <article class="flex bg-white dark:bg-gray-800 shadow-xs rounded-xl overflow-hidden">
      <!-- Image -->
      <router-link class="relative block w-24 sm:w-56 xl:sidebar-expanded:w-40 2xl:sidebar-expanded:w-56 shrink-0" to="/community/meetups-post">
        <img class="absolute object-cover object-center w-full h-full" src="../../images/meetups-thumb-08.jpg" width="220" height="236" alt="Meetup 08" />
        <!-- Like button -->
        <button class="absolute top-0 right-0 mt-4 mr-4">
          <div class="text-gray-100 bg-gray-900/60 rounded-full">
            <span class="sr-only">Like</span>
            <svg class="h-8 w-8 fill-current" viewBox="0 0 32 32">
              <path d="M22.682 11.318A4.485 4.485 0 0019.5 10a4.377 4.377 0 00-3.5 1.707A4.383 4.383 0 0012.5 10a4.5 4.5 0 00-3.182 7.682L16 24l6.682-6.318a4.5 4.5 0 000-6.364zm-1.4 4.933L16 21.247l-5.285-5A2.5 2.5 0 0112.5 12c1.437 0 2.312.681 3.5 2.625C17.187 12.681 18.062 12 19.5 12a2.5 2.5 0 011.785 4.251h-.003z" />
            </svg>
          </div>
        </button>
      </router-link>
      <!-- Content -->
      <div class="grow p-5 flex flex-col">
        <div class="grow">
          <div class="text-sm font-semibold text-violet-500 uppercase mb-2">Fri 7 Jan, 2024</div>
          <router-link class="inline-flex mb-2" to="/community/meetups-post">
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">Build a Personal Brand and Boost Your Career in AI!</h3>
          </router-link>
          <div class="text-sm">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</div>
        </div>
        <!-- Footer -->
        <div class="flex justify-between items-center mt-3">
          <!-- Tag -->
          <div class="text-xs inline-flex items-center font-medium border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full text-center px-2.5 py-1">
            <svg class="w-4 h-3 fill-gray-400 dark:fill-gray-500 mr-2" viewBox="0 0 16 12">
              <path d="m16 2-4 2.4V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.6l4 2.4V2ZM2 10V2h8v8H2Z" />
            </svg>
            <span>Online Event</span>
          </div>
          <!-- Avatars -->
          <div class="flex items-center space-x-2">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-01.jpg" width="28" height="28" alt="User 01" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-05.jpg" width="28" height="28" alt="User 05" />
              <img class="rounded-full border-2 border-white dark:border-gray-800 box-content" src="../../images/avatar-06.jpg" width="28" height="28" alt="User 06" />
            </div>
            <div class="text-xs font-medium text-gray-400 dark:text-gray-500 italic">+32</div>
          </div>
        </div>
      </div>
    </article>

  </div>
</template>

<script>
export default {
  name: 'MeetupsPosts',
}
</script>