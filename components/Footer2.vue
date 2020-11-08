<template>
  <div>
    <footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
      <div class="container py-6">
        <h1 class="text-center text-lg font-bold lg:text-2xl">
          Don't miss out! our unbelivable offers. <br />
          Subscribe us to keep you posted about all our offers and events
        </h1>

        <div class="flex justify-center mt-6">
          <div class="bg-white rounded-lg">
            <div class="flex flex-wrap justify-between md:flex-row">
              <input type="email" class="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none" placeholder="Enter your email" />
              <button class="w-full m-1 p-2 text-sm bg-yellow-600 rounded-lg font-semibold uppercase lg:w-auto">subscribe</button>
            </div>
          </div>
        </div>

        <hr class="h-px mt-6 bg-gray-700 border-none" />

        <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div class="flex items-center justify-between">
            <Logo />
            <div class="mx-4">
              <h4 class="text-lg font-semibold text-yellow-500 tracking-wide">Roti House</h4>
              <p class="text-sm mt-2 font-thin text-gray-200">5, Khun Bu Lom Road, Sihom, Vientiane, Laos</p>
              <p class="text-sm font-thin text-indigo-400">info@rotihouselao.com</p>
              <p class="text-md mt-1 font-thin text-green-500">+856 2058026838 | +856 2054240237</p>
            </div>
          </div>
          <div class="flex mt-4 md:m-0">
            <div class="-mx-4">
              <nuxt-link to="/about" class="px-4 text-sm">About</nuxt-link>
              <nuxt-link to="/blog" class="px-4 text-sm">Blog</nuxt-link>
              <nuxt-link to="/menu" class="px-4 text-sm">Menu</nuxt-link>
              <nuxt-link to="/contact" class="px-4 text-sm">Contact</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>
