export const state = () => ({
  filteredDishes: [],
  dishes: [
    {
      imageUrl: "https://images.unsplash.com/photo-1598769569837-0ebb3f625485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
      imageAlt: "Grand Place",
      beds: 3,
      baths: 2,
      title: "Modern home in the city center Modern home in the city center",
      priceInCents: 23500,
      formattedPrice: "$23,500",
      reviewCount: 23,
      rating: 4,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1599202937077-3f7cdc53f2e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      imageAlt: "Holiday Inn",
      beds: 2,
      baths: 2,
      title: "Luxury stay in the hot of the city. Feel like home in abroad.",
      priceInCents: 20520,
      formattedPrice: "$20,520",
      reviewCount: 65,
      rating: 4.5,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1598632022981-9426f46c6e97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80",
      imageAlt: "Green Box",
      beds: 3,
      baths: 2,
      title: "Modern home in the city center Modern home in the city center",
      priceInCents: 23500,
      formattedPrice: "$23,500",
      reviewCount: 64,
      rating: 3,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1598632022981-9426f46c6e97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80",
      imageAlt: "Green Box",
      beds: 3,
      baths: 2,
      title: "Modern home in the city center Modern home in the city center",
      priceInCents: 23500,
      formattedPrice: "$23,500",
      reviewCount: 64,
      rating: 3,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1598769569837-0ebb3f625485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
      imageAlt: "Grand Place",
      beds: 3,
      baths: 2,
      title: "Modern home in the city center Modern home in the city center",
      priceInCents: 23500,
      formattedPrice: "$23,500",
      reviewCount: 23,
      rating: 4,
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1598769569837-0ebb3f625485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80",
      imageAlt: "Grand Place",
      beds: 3,
      baths: 2,
      title: "Modern home in the city center Modern home in the city center",
      priceInCents: 23500,
      formattedPrice: "$23,500",
      reviewCount: 23,
      rating: 4,
    },
  ],
});

export const mutations = {
  SET_DISHES(state, val) {
    state.filteredDishes = state.dishes.filter(dish => dish.title.toLowerCase().includes(val.toLowerCase()));
  }
};

export const actions = {
  setDishes({commit}, val) {
    commit('SET_DISHES', val);
  }
};