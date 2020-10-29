<template>
  <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-2 h-16">
    <div class="flex justify-center md:absolute md:top-0 md:left-0 md:mx-20 md:my-2">
      <Logo />
    </div>
    <!-- <svg viewBox="0 0 20 20" class="absolute top-0 right-0 m-3 md:hidden fill-current text-gray-100 h-6 w-6"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg> -->
    <div class="hidden md:block md:absolute md:top-0 md:right-0 md:mx-20 md:my-4">
      <div class="flex items-center">
        <button class="p-1 rounded-full focus:outline-none bg-gray-600 hover:bg-gray-500 duration-200">
          <svg fill="none" class="w-5 h-5 text-white" viewBox="0 0 24 24" stroke="currentColor" @click="toggleColor">
            <path v-if="$colorMode.preference === 'dark'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15 6h0M6 6h0m12 0h0M6 18h0m10-6a4 4 0 11-8 0 4 4 0 018 0z" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 15A9 9 0 019 4a9 9 0 003 17 9 9 0 008-6z" />
          </svg>
        </button>
        <nuxt-link class="text-sm font-semibold uppercase tracking-wide px-4 hover:text-gray-600 leading-loose" to="/menu">Our Menu</nuxt-link>
        <nuxt-link class="text-sm font-semibold uppercase tracking-wide px-4 hover:text-gray-600" to="/about">About</nuxt-link>
        <nuxt-link class="text-sm font-semibold uppercase tracking-wide px-4 hover:text-gray-600" to="/contact">Contact</nuxt-link>
        <account-dropdown class="hidden md:block sm:ml-6" />
      </div>
    </div>

    <div class="block md:hidden absolute top-0 right-0 m-3">
      <button @click="isOpen = !isOpen" type="button" class="relative z-50 block text-gray-500 focus:outline-none hover:text-white">
        <svg viewBox="0 0 20 20" class="fill-current text-red-300 w-6 h-6 mx-4">
          <path v-if="!isOpen" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          <path v-if="isOpen" d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden bg-gray-900 absolute z-40 top-0 overflow-hidden w-full h-full mt-4 h-30 pt-1/2 text-center">
      <nuxt-link to="/menu" class="block px-2 py-1 rounded text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2">Our Menu</nuxt-link>
      <nuxt-link to="/about" class="mt-1 block px-2 py-1 rounded text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2">About</nuxt-link>
      <nuxt-link to="/contact" class="mt-1 block px-2 py-1 rounded text-white font-semibold hover:bg-gray-800 sm:mt-0 sm:ml-2">Contact</nuxt-link>
      <div class="overflow-hidden">
        <svg data-name="Layer 1" xmlns:xlink="http://www.w3.org/1999/xlink" width="903.8" height="657.1">
          <defs>
            <linearGradient id="a" x1="736" y1="734.2" x2="736" y2="307.2" gradientUnits="userSpaceOnUse">
              <stop offset="0" stop-color="gray" stop-opacity=".3" />
              <stop offset=".5" stop-color="gray" stop-opacity=".1" />
              <stop offset="1" stop-color="gray" stop-opacity=".1" />
            </linearGradient>
            <linearGradient id="b" x1="381.4" y1="718.2" x2="381.4" y2="312.2" xlink:href="#a" />
          </defs>
          <ellipse cx="63.9" cy="514.6" rx="45" ry="16" opacity=".1" />
          <ellipse cx="790.9" cy="580.7" rx="45" ry="16" opacity=".1" />
          <path d="M533 18c-69 27-143 28-212 3C224-14 96-23 49 139c-81 276 84 374 84 374s115 26 179 73c91 66 202 88 306 57 67-20 125-52 141-106 46-149 17-239 100-278s37-185-22-189-198 31-241-36c-16-24-39-25-63-16z" opacity=".1" />
          <path d="M789 583s12-41-2-71a65 65 0 01-5-40 108 108 0 015-19" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2" />
          <path d="M778 434c0 5 9 19 9 19s10-14 10-19a9 9 0 00-19 0zM763 461c3 5 19 12 19 12s-1-17-3-21a9 9 0 10-16 9zM764 509c5 2 22 0 22 0s-9-14-14-16a9 9 0 10-8 16zM773 544c4 3 21 5 21 5s-7-16-11-19a9 9 0 00-10 14z" fill="#6c63ff" />
          <path d="M801 474c-4 3-21 7-21 7s4-17 8-20a9 9 0 0113 13zM810 516c-4 2-21 0-21 0s9-14 13-16a9 9 0 018 16zM814 558c-4 3-21 4-21 4s6-16 10-19a9 9 0 0111 15z" fill="#6c63ff" />
          <path d="M64 515s26-87-5-152c-13-27-17-57-11-86a232 232 0 0112-41" fill="none" stroke="#535461" stroke-miterlimit="10" stroke-width="2" />
          <path
            d="M41 196c0 11 20 42 20 42s19-31 19-42a19 19 0 10-39 0zM9 255c6 9 39 25 39 25s0-37-6-46a19 19 0 00-33 21zM11 356c9 5 46 2 46 2s-19-32-29-36a19 19 0 00-17 34zM29 432c8 7 45 10 45 10s-14-34-22-41a19 19 0 00-23 31zM89 282c-8 7-44 15-44 15s9-36 17-43a19 19 0 0127 28zM109 371c-10 5-46 2-46 2s19-32 29-36a19 19 0 1117 34zM117 461c-9 6-45 9-45 9s13-34 22-40a19 19 0 0123 31zM379 300l-56-7-4-2 5-1 55 8 3 1-3 1zM380 301l-56-6-5 1 4 2 56 5 3-1-2-1zM463 343l56-7 4-2-4-1-56 8-3 1 3 1zM463 344l56-6 4 1-4 2-56 5-3-1 3-1z"
            fill="#6c63ff"
          />
          <path fill="#40414d" d="M265 403h14v195h-14zM562 403h14v195h-14z" />
          <path d="M260 387h314a22 22 0 0122 22v3H238v-3a22 22 0 0122-22z" fill="#dfe6f5" />
          <path d="M259 387h314a22 22 0 0122 22v3H237v-3a22 22 0 0122-22z" opacity=".1" />
          <path d="M260 382h314a22 22 0 0122 22v3H238v-3a22 22 0 0122-22z" fill="#dfe6f5" />
          <circle cx="417.3" cy="339.2" r="27.2" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="417.3" cy="339.2" r="21.6" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="417.3" cy="339.2" r="16.4" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="417.3" cy="339.2" r="9.2" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="401.4" cy="353.9" r="27.2" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="401.4" cy="353.9" r="21.6" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="401.4" cy="353.9" r="16.4" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="401.4" cy="353.9" r="9.2" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="433.1" cy="353.9" r="27.2" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="433.1" cy="353.9" r="21.6" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="433.1" cy="353.9" r="16.4" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <circle cx="433.1" cy="353.9" r="9.2" fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" />
          <path d="M361 346h113v5a40 40 0 01-40 40h-33a40 40 0 01-40-40v-5z" fill="#6c63ff" />
          <path d="M464 346a45 45 0 01-46 44h-22a45 45 0 0010 1h23a45 45 0 0045-45z" opacity=".1" />
          <path fill="#40414d" d="M569 551v14H274v-14zM152 504h12v108h-12zM246 504h12v108h-12z" />
          <path d="M267 486c0 7-24 13-54 13s-54-6-54-13 24-13 54-13 54 6 54 13z" fill="#f6c6cd" />
          <path d="M143 486h124v11a11 11 0 01-10 10h-96a18 18 0 01-18-18v-3z" fill="#40414d" />
          <path d="M121 361l3-1a7 7 0 018 5l32 138-4 1a13 13 0 01-15-9l-29-126a7 7 0 015-8zM684 614h-12V506h12zM590 614h-11V506h11z" fill="#40414d" />
          <path d="M569 488c0 7 24 13 55 13s53-6 53-13-23-13-53-13-55 5-55 13z" fill="#f6c6cd" />
          <path d="M676 509h-96a11 11 0 01-11-10v-11h125v3a18 18 0 01-18 18z" fill="#40414d" />
          <path d="M677 506l-4-1 31-138a7 7 0 018-5l3 1a7 7 0 015 8l-28 126a13 13 0 01-15 9z" fill="#40414d" />
          <path
            d="M829 567l4-1s-6-40-6-76v-3a344 344 0 010-15c0-34-13-49-13-49s-16-23-26-27l-2-10 1-1a129 129 0 0011-9c5-5 10-10 9-17a12 12 0 000-2c-1-7-9-13-12-20-3-6-2-13-4-19s-11-12-17-9l-6 5c-4 4-12 4-18 2s-9-9-18-9a11 11 0 012 1 14 14 0 00-2 0 10 10 0 017 8 7 7 0 010 1c-4 2-8 1-13 1s-9 2-9 6a3 3 0 000 1c1 3 5 5 5 7a75 75 0 01-26 8l1 1h-1l11 9c5 3 11 4 16 6a32 32 0 00-2 12c0 16 11 29 26 32l8 11s-17 23-17 57a100 100 0 001 13c-11-1-35-4-53-17-24-18-52-12-46-2s35 20 40 21h3c-6 2-10 3-10 6 0 5 25 21 40 21 10 1 22 4 32 7 1 20-4 27-4 27l4 2-1 3c-7 3-14 7-21 8a112 112 0 00-25 9l-34 16a20 20 0 00-11 16c-1 6 1 15 12 22 1 6 5 12 14 18l69 51c1 9-1 26-11 29-13 3-3 16 8 15a14 14 0 008 1c11-3 52-17 55-39a21 21 0 000-2 19 19 0 00-2-11 19 19 0 011 3c-4-8-12-13-18-15l-3-1a8 8 0 000-2l-65-45s28-23 57-20 34-1 34-1 15-14 16-31h1v-3z"
            transform="translate(-148 -121)"
            fill="url(#a)"
          />
          <path d="M602 562s3 29-11 33-1 17 10 15 50-17 52-38-26-29-26-29z" fill="#b8616e" />
          <path d="M602 562s3 29-11 33-1 17 10 15 50-17 52-38-26-29-26-29z" opacity=".1" />
          <path d="M607 563s3 29-10 33-1 17 9 15 50-17 52-38-26-29-26-29z" fill="#b8616e" />
          <path d="M635 545l-25 19v3c9-3 30-9 30-20a48 48 0 00-5-2z" opacity=".1" />
          <path fill="#f8bdc5" d="M609 291h10v8h-10z" />
          <path d="M609 420s-17 13-31 16a102 102 0 00-23 8l-32 16a19 19 0 00-11 16c-1 9 3 21 24 28l69 56 21-18-73-55 56-35z" fill="#758ac8" />
          <path d="M609 420s-17 13-31 16a102 102 0 00-23 8l-32 16a19 19 0 00-11 16c-1 9 3 21 24 28l69 56 21-18-73-55 56-35z" opacity=".1" />
          <path d="M599 360s-32 1-55-16-49-13-44-2 33 19 37 20l68 19z" fill="#f8bdc5" />
          <path d="M599 360s-32 1-55-16-49-13-44-2 33 19 37 20l68 19z" opacity=".1" />
          <path d="M603 412l-11 31s-59 37-64 42c-4 4-9 19 8 31l67 51s37-8 34-23l-61-44s27-23 54-19 32-2 32-2 21-21 14-42-73-25-73-25z" fill="#758ac8" />
          <path d="M590 268s30 32 28 42 24-28 24-28-8-20-6-41z" fill="#f8bdc5" />
          <path d="M616 298a88 88 0 016-7 90 90 0 0013-12c6-8 29 27 29 27s14 15 12 53 2 89 2 89l-5 2a31 31 0 01-27-4c-7-5-16-10-23-10-13-1-25-9-25-9s6-14-3-58 14-75 14-75 1 9 7 4z" opacity=".1" />
          <path d="M681 444l-5 2-3 1a31 31 0 01-27-4c-7-5-16-10-23-10-13-1-28-11-28-11s9-11 0-55 14-76 14-76 1 10 7 4a87 87 0 016-6 90 90 0 0013-13c6-8 29 27 29 27s14 16 12 54v12c0 36 5 75 5 75z" fill="#5e52ad" />
          <path d="M631 358l1 19s-47 3-57-7 27 29 35 31c7 2 27 4 37 4a15 15 0 0014-8 14 14 0 001-8c-2-12 0-37 0-37z" opacity=".1" />
          <path d="M631 356l1 19s-47 3-57-7-45-7-44 0c1 5 24 21 38 22s33 7 41 9c7 2 27 4 37 5a15 15 0 0014-9 14 14 0 001-8c-2-12 0-36 0-36z" fill="#f8bdc5" />
          <path d="M642 299s-21 3-18 33 6 33 6 33l34-4c4-1 2-33 2-33s-1-30-24-29z" opacity=".1" />
          <path d="M642 298s-21 3-18 33 6 33 6 33l34-4c4-1 2-33 2-33s-1-29-24-29z" fill="#5e52ad" />
          <path d="M634 260c-1-7 2-9 2-18l-46 26 12 14a33 33 0 008 1c12 0 18-13 24-23z" opacity=".1" />
          <circle cx="609" cy="249" r="32.7" fill="#f8bdc5" />
          <path
            d="M617 239c-5 3-5 10-2 15s9 9 14 12c2 1 4 2 5 1a7 7 0 004-1 123 123 0 0011-10c5-5 9-10 9-17-1-8-9-13-12-21l-4-18c-2-6-10-12-16-9l-5 5c-4 4-12 4-18 2s-8-9-16-9c4 2 7 6 6 10-3 2-8 1-12 1s-9 2-8 6c1 3 5 5 4 8a68 68 0 01-24 7c-1 1 9 10 11 10l14 5c13 5 26 6 39 3z"
            opacity=".1"
          />
          <path
            d="M617 238c-5 3-5 11-2 15s9 9 14 12c2 1 4 2 5 1a7 7 0 004-1 123 123 0 0011-10c5-4 9-10 9-17-1-8-9-13-12-20l-4-19c-2-6-10-12-16-9l-5 5c-4 4-12 4-18 2s-8-9-16-9c4 2 7 6 6 10-3 2-8 1-12 1s-9 2-8 6c1 3 5 5 4 8a68 68 0 01-24 8c-1 0 9 9 11 9l14 6c13 4 26 6 39 2z"
            fill="#916168"
          />
          <path d="M656 559a20 20 0 012 11c-3 21-42 35-53 38-5 1-11-2-14-6 2 5 9 9 15 8 11-3 50-17 52-38a19 19 0 00-2-13z" fill="#fff" opacity=".1" />
          <path
            d="M523 705c0-2-5-5-24-6-14-1-18-8-20-15 5 0 8-1 9-2v-1a94 94 0 01-1-15 59 59 0 011-13 38 38 0 001-9c0-17-6-47-6-47l-1-25a17 17 0 00-9-15 14 14 0 00-6-1l-60-8c-2-1-9-6-25-3l-9-27a8 8 0 01-1-1c1-4 3-9 14-9l2 2 1-2h90c4 1 40-8 41-9 14-13-41-7-41-7-5 1-23 0-41-1 9-14 17-59 17-59s32-16 23-25-37 20-37 20-12 33-17 43c-2 4-4 5-7 5l2-2s-23-18-25-25a17 17 0 00-1-3c-1-7-3-13-8-17a17 17 0 00-2-2l-4-3 2-9c17-2 30-16 30-33a33 33 0 00-1-8 15 15 0 0013-6c3-5 3-12 0-18a21 21 0 00-4-5 27 27 0 00-11-7l-10-4a44 44 0 01-3-5 26 26 0 00-4-5c-5-5-12-8-19-10h-27c-3 0-7 1-9 4v7c-1 8-9 12-17 14s-17 3-21 10c-3 6-1 14 0 20a50 50 0 01-7 35l-11 15a29 29 0 00-2 20c1 2 2 4 1 6a10 10 0 01-2 4 53 53 0 01-38 20 11 11 0 004 5 25 25 0 007 5 108 108 0 0022 8c5 2 10 2 15 2s11-4 13-9l2-9c2-5 8-9 12-13a347 347 0 00-2 36v11c0 14-1 23-10 41a10 10 0 00-1 6 7 7 0 002 6 59 59 0 00-1 10c0 13 4 30 27 34l40-2s57-11 73-3a6 6 0 014 6 13 13 0 010 2 39 39 0 00-1 8c0 17 4 56 4 56v16c-3 4-6 10-5 14v1a5 5 0 000 1v1a5 5 0 001 0c5 6 31 18 39 17 9 0 38 1 39-12a2 2 0 000-1z"
            transform="translate(-148 -121)"
            fill="url(#b)"
          />
          <path d="M302 558s-12 15-7 21 30 18 38 17c8 0 37 1 38-12 0 0 2-6-24-7s-18-28-18-28z" fill="#594c76" />
          <path d="M159 432s-12 41 24 48l39-2s55-11 70-3c0 0 6 1 4 9s3 62 3 62v18s34 0 38-4c0 0-3-16 0-29s-5-54-5-54l-1-24a17 17 0 00-9-15 13 13 0 00-6-2s-68-11-92-9l-65 5z" opacity=".1" />
          <path d="M159 431s-12 41 24 48l39-2s55-11 70-3c0 0 6 1 4 9s3 62 3 62v18s34 0 38-4c0 0-3-16 0-29s-5-54-5-54l-1-24a17 17 0 00-9-15 13 13 0 00-6-2s-68-11-92-9l-65 5z" fill="#8b9cd1" />
          <path d="M262 350s8 10 13 0 16-43 16-43 27-29 36-20-22 25-22 25-11 61-21 62h-25l-5-11z" fill="#f8bdc5" />
          <path d="M262 350s8 10 13 0 16-43 16-43 27-29 36-20-22 25-22 25-11 61-21 62h-25l-5-11z" opacity=".1" />
          <path d="M226 300s18 21 20 28 24 25 24 25-16 12-13 18-21-20-21-20l-28-41z" fill="#eb6475" />
          <path d="M226 300s18 21 20 28 24 25 24 25-16 12-13 18-21-20-21-20l-28-41z" opacity=".1" />
          <path d="M238 276s-9 29-9 40-38-3-37-9 22-28 23-37 23 6 23 6z" fill="#f8bdc5" />
          <path d="M208 296s-35-9-40 42 4 57-11 88 102 4 102 4-6-7-25-4l-9-27s-3-12 14-12 9-35 9-35-9-30-14-33-14-21-26-23z" opacity=".1" />
          <path d="M208 294s-35-9-40 42 4 57-11 88 102 4 102 4-6-7-25-4l-9-27s-3-12 14-12 9-35 9-35-9-30-14-33-14-21-26-23z" fill="#eb6475" />
          <path d="M243 366s73 8 85 6c0 0 53-6 40 7-1 1-36 9-40 8h-89l-1-10z" fill="#f8bdc5" />
          <path d="M187 341l53 48s10-20 13-20-36-59-36-59-10-12-16-6-24 2-14 37z" opacity=".1" />
          <path d="M186 339l53 48s10-20 13-20-36-59-36-59-10-12-16-6-24 2-14 37z" fill="#eb6475" />
          <circle cx="228.8" cy="261.3" r="33" fill="#f8bdc5" />
          <path
            d="M258 253c5 2 12 0 15-6s4-11 1-17-8-9-14-11l-10-4-4-6c-4-7-13-12-21-13l-26-1c-3 0-7 1-8 4l-1 7c0 8-9 12-16 14s-16 3-20 10c-3 6-1 14 0 20a51 51 0 01-7 35c-4 5-8 9-10 15a30 30 0 00-2 19l1 6a10 10 0 01-3 5 51 51 0 01-36 19c1 4 5 7 9 9a103 103 0 0021 8c5 1 10 2 15 1s10-3 12-8l3-8c2-7 9-10 12-16s5-6 5-12 3-14 8-17c6-4 13-3 19 0s10 1 15 6a122 122 0 0029 19c-1-9-2-19-10-24l-5-5c-2-4 1-8 0-12s-7-5-9-8-1-7 1-10l7-8 7-5a27 27 0 006-5c1-2 2-5 4-6 3-2 8 4 12 5z"
            opacity=".1"
          />
          <path
            d="M257 252c5 2 12 0 15-6s4-11 1-17-8-9-14-11l-10-4-4-6c-4-7-13-12-21-13l-26-1c-3 0-7 1-8 4l-1 7c0 8-9 12-16 14s-16 3-20 10c-3 6-1 14 0 20a51 51 0 01-7 35c-4 5-8 9-10 15a30 30 0 00-2 19l1 6a10 10 0 01-3 5 51 51 0 01-36 19c1 4 5 7 9 9a103 103 0 0021 8c5 1 10 2 15 1s10-3 12-8l3-8c2-7 9-10 12-16s5-6 5-12 3-14 8-17c6-4 13-3 19 0s10 1 15 6a122 122 0 0029 19c-1-9-2-19-10-24l-5-5c-2-4 1-8 0-12s-7-5-9-8-1-7 1-10l7-8 7-5a27 27 0 006-5c1-2 2-5 4-6 3-2 8 4 12 5z"
            fill="#916168"
          />
          <g opacity=".1" fill="#fff"><path d="M328 557a35 35 0 011-8h-1a35 35 0 000 8zM333 594c-8 1-33-11-38-17a5 5 0 01-1-3 6 6 0 001 5c5 6 30 18 38 17 8 0 37 1 38-12a2 2 0 000-1c-3 12-30 11-38 11z" /></g>
          <path fill="#ffd77c" stroke="#ffab50" stroke-miterlimit="10" stroke-width=".3" d="M372 296h1v41h-1zM373 296h1v41h-1zM374 296h1v41h-1zM375 296h1v41h-1zM376 296h1v41h-1zM377 296h1v41h-1zM378 296h1v41h-1z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    this.$colorMode.preference = "light";
  },
  methods: {
    toggleColor() {
      if (this.$colorMode.preference === "light") this.$colorMode.preference = "dark";
      else this.$colorMode.preference = "light";
    },
  },
};
</script>
