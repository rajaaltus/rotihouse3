<template>
  <div class="fixed overflow-hidden" :class="$store.state.sideCart ? 'inset-0' : ''">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity opacity-0 ease-in-out duration-500" :class="$store.state.sideCart ? 'transition-opacity opacity-100' : ''"></div>
      <section class="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div class="relative w-screen max-w-xl transform translate-x-0 transition ease-in-out duration-500 sm:duration-700" :class="$store.state.sideCart ? '' : 'translate-x-full'">
          <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
            <button @click="closeCart" aria-label="Close panel" class="text-gray-300 hover:text-white opacity-0 ease-in-out duration-500" :class="$store.state.sideCart ? 'opacity-100' : ''">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="h-full flex flex-col space-y-6 py-6 bg-gray-200 shadow-xl overflow-y-scroll overflow-x-hidden">
            <header class="px-4 sm:px-6">
              <h2 class="text-lg leading-7 font-medium text-gray-900">
                Cart Items
              </h2>
            </header>
            <div class="relative flex-1 px-4 sm:px-6">
              <!-- Replace with your content -->
              <div class="absolute inset-0 px-4 sm:px-6">
                <div class="h-full border-2 border-dashed border-gray-200">
                  <!-- Main Content here -->
                  <table class="w-full text-center text-xs">
                    <thead class="bg-gray-800 text-gray-300">
                      <tr>
                        <th class="w-1/3 py-2">Name</th>
                        <th class="w-1/6 py-2">Price (unit)</th>
                        <th class="w-1/6 py-2">Qty</th>
                        <th class="w-1/3 py-2">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-solid border-gray-400" v-for="(item, index) in selectedItems" :key="index">
                        <td class="py-2 w-1/3">
                          <div class="flex items-center justify-start">
                            <img class="w-16 h-16 rounded-full bg-white object-cover p-2" :src="item.image" :alt="item.name" />
                            <span class="text-sm ml-2 font-medium text-gray-700">{{ item.name }}</span>
                          </div>
                        </td>
                        <td class="py-2 w-1/6 text-gray-700 text-sm font-medium">{{ item.price }} Kip</td>
                        <td class="py-2 w-1/6 text-gray-700 text-sm">{{ item.quantity }}</td>
                        <td class="py-2 w-1/3 text-gray-700 text-sm font-medium">
                          {{item.price * item.quantity}}
                          <!-- <a class="bg-gray-500 rounded-full px-3 py-1 text-white hover:shadow-md cursor-pointer text-lg font-semibold"><span @click="addToCart(item)"> +</span></a>
                          <a class="bg-red-700 rounded-full px-3 py-1 text-gray-300 hover:shadow-md cursor-pointer text-lg font-semibold"><span @click="removeFromCart(item)"> -</span></a> -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="">
                    <button class="relative w-full bg-green-500 py-3 rounded text-green-100 mt-4">Go to Checkout
                      <span class="absolute right-0 top-0 mr-2 mt-2 bg-green-600  text-white px-2 py-1 rounded-md ml-2 ">145,000 Kip</span>
                    </button>
                    
                  </div>
                  <div>
                    <h4 class="text-lg leading-7 font-medium text-gray-900 mt-10">Delivery location</h4>
                    <div class="flex items-center justify-between mt-4 border-b border-solid border-gray-400 py-2">
                      <div class="flex items-center">
                      <input class="mr-2 leading-tight bg-gray-600" type="radio" />
                      <div class="bg-gray-300 p-2 rounded-full border border-solid">
                        <svg viewBox="0 0 20 20" class="fill-current text-gray-600 w-6 h-6"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" /></svg>
                      </div>
                      </div>
                      <span class="text-sm">122, Ban Simuang, Watnak District, vientiane.</span>
                      <button class="bg-gray-500 text-gray-200 px-4 py-0 rounded text-xs">+</button>
                    </div>
                    <div class="flex items-center justify-between mt-4 border-b border-solid border-gray-400 py-2">
                      <div class="flex items-center">
                      <input class="mr-2 leading-tight bg-gray-600" type="radio" />
                      <div class="bg-gray-300 p-2 rounded-full border border-solid">
                        <svg viewBox="0 0 20 20" class="fill-current text-gray-600 w-6 h-6"><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" /></svg>
                      </div>
                      </div>
                      <span class="text-sm">37, Ban Thapalanxay, Sisattanak District, vientiane.</span>
                      <button class="bg-gray-500 text-gray-200 px-4 py-0 rounded text-xs">+</button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItems: [
        {
          name: "Veg Samosa",
          price: "15000",
          quantity: 2,
          image: "https://api.rotihouselao.com/uploads/501446ec2b374fb88481f7a8210d1c84.jpg",
        },
        {
          name: "Chicken lollipop",
          price: "45000",
          quantity: 1,
          image: "https://api.rotihouselao.com/uploads/9d782dd63cad47f28fdc0bb8a42a34d0.jpeg",
        },
        {
          name: "Poori Masala",
          price: "35000",
          quantity: 2,
          image: "https://api.rotihouselao.com/uploads/1e42692ab04040ec9ce1b3d139a2a9fc.jpg",
        },
      ],
    };
  },
  methods: {
    closeCart() {
      this.$store.dispatch("closeCart");
    },
  },
};
</script>
