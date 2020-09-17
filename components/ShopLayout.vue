<template>
  <div>
    <div class="hidden md:block">
      <div class="grid grid-cols-12 gap-4 grid-rows-6 h-screen md:px-4 lg:px-10 xl:px-20 mt-20">
        <div class="col-span-3 row-span-6  bg-gray-400"></div>
        <div class="col-span-9 row-sapn-6">
          <div class="row-span-1 flex items-start justify-between">
            <div class="flex items-start">
              <button class="bg-gray-400 rounded-full font-semibold text-md tracking-wider text-gray-700 px-4 py-2 mr-2 block">Promotions</button>
              <button class="bg-gray-400 rounded-full font-semibold text-md tracking-wider text-gray-700 px-4 py-2 mr-2 block">Grocery</button>
            </div>
            <div class="flex items-center">
              <span class="text-md font-normal text-gray-600">Sort by</span
              ><button class="text-sm font-normal">
                <svg class="ml-2 text-gray-600 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div class="row-span-5 bg-gray-500">
            <div class="flex justify-between">
              <div class="bg-gray-300 h-64 w-64 col-span-6 md:col-span-3 lg:col-span-5 xl:col-span-2"></div>
              <div class="bg-gray-400 h-64 w-64 col-span-6 md:col-span-3 lg:col-span-5 xl:col-span-2"></div>
              <div class="bg-gray-600 h-64 w-64 col-span-6 md:col-span-3 lg:col-span-5 xl:col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="block md:hidden mx-5 mt-10">
      <div class="h-10 my-2 flex items-center">
        <button class="bg-gray-300 h-10 w-10 rounded-full p-2 hover:bg-gray-400 hover:text-gray-900 mr-2">
          <svg viewBox="0 0 20 20" class="fill-current text-gray-800">
            <path
              d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
            />
          </svg>
        </button>
        <button class="bg-gray-400 rounded-full font-semibold text-md tracking-wider text-gray-700 px-4 py-2 mr-2 block">Promotions</button>
        <button class="bg-gray-400 rounded-full font-semibold text-md tracking-wider text-gray-700 px-4 py-2 mr-2 block">Grocery</button>
      </div>
      <div class="flex items-center justify-between py-3">
        <div>
          <span class="text-sm font-normal text-gray-600">62 items</span>
        </div>
        <div class="flex items-center">
          <span class="text-sm font-normal text-gray-600">Sort by</span
          ><button class="text-sm font-normal">
            <svg class="ml-2 text-gray-600 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="bg-gray-600 h-48">
        <div class="grid grid-cols-1">
          <div class="bg-gray-300 h-64 w-64"></div>
          <div class="bg-gray-400 h-64 w-64"></div>
          <div class="bg-gray-600 h-64 w-64"></div>
        </div>
      </div>
    </div>
  </div>
</template>
