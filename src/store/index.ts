import { IMarket } from "@/types/IMarket";
import Vue from "vue";
import Vuex, { createStore } from "vuex";

export interface ICartItem {
  market: IMarket;
  count: number;
}

export interface State {
  cart: ICartItem[];
}

const store = createStore<State>({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, payload: IMarket) {
      if (!state.cart.find((item) => item.market.id == payload.id))
        state.cart.push({ market: payload, count: 1 });
    },

    removeFromCart(state, payload: number) {
      const newState = state.cart.filter((item) => item.market.id !== payload);
      state.cart = newState;
    },

    setNumber(state, payload: { itemId: number; value: number }) {
      const currentIndex = state.cart.findIndex(
        (item) => item.market.id === payload.itemId
      );
      if (currentIndex > 0) {
        state.cart[currentIndex].count = payload.value;
      }
    },
  },
  getters: {
    getState(state) {
      return state.cart;
    },
  },
});

export default store;
