import { ICartItem } from "@/types/ICartItem";
import { IMarket } from "@/types/IMarket";
import { createStore } from "vuex";

export interface State {
  cart: ICartItem[];
  fullPrice: number;
  currentExchange: number;
}

const store = createStore<State>({
  state() {
    return {
      cart: [],
      fullPrice: 0,
      currentExchange: 20,
    };
  },
  mutations: {
    addToCart: (state, payload: IMarket) => {
      if (!state.cart.find((item) => item.market.id == payload.id))
        state.cart.push({ market: payload, count: 1 });
    },

    removeFromCart: (state, payload: number) => {
      const newState = state.cart.filter((item) => item.market.id !== payload);
      state.cart = newState;
    },

    setCount: (state, payload: { itemId: number; value: number }) => {
      const currentIndex = state.cart.findIndex(
        (item) => item.market.id === payload.itemId
      );
      if (currentIndex > 0) {
        state.cart[currentIndex].count = payload.value;
      }
    },
    setCurrentExchange: (state, payload: number) => {
      state.currentExchange = payload;
    },
  },
  getters: {
    getCart: (state) => {
      return state.cart;
    },
    getFullPrice: (state) => {
      state.fullPrice = state.cart.reduce(
        (previous, item) => previous + item.market.currency * item.count,
        0
      );
      return state.fullPrice;
    },
    getCurrentExchange: (state) => {
      return state.currentExchange;
    },
  },
});

export default store;
