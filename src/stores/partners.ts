import { defineStore } from "pinia";
import axios, { AxiosError } from "axios";
// types
import type { Partner } from "./__types__";
// Stores
import { useOrderStore } from './orders';
// Composables
import { useAxiosError } from "../composables/error";
export const usePartnerStore = defineStore("partners", {
  state: () => ({
    partner: null as Partner | null,
  }),
  // persist: {
  //   storage: sessionStorage,
  // },
  getters: {
    getPartner(state): Partner | null {
      return state.partner;
    },
  },
  actions: {
    async signup(partner: Partner) {
      try {
        let api = `${import.meta.env.VITE_API_URL}/partner/signup`;

        const req = await axios.post(api, partner);
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + req.data.accessToken;
        this.partner = req.data.partner;
        return true;
      } catch (error) {
        if (error instanceof AxiosError) {
          useAxiosError(error);
          return false;
        }
        alert(error);
        return false;
      }
    },
    async login(partner: Partner) {
      try {
        let api = `${import.meta.env.VITE_API_URL}/partner/login`;
        const req = await axios.post(api, partner);
        this.partner = req.data.partner;
        axios.defaults.withCredentials = true;
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + req.data.accessToken;
        return true;
      } catch (error) {
        if (error instanceof AxiosError) {
          useAxiosError(error);
          return false;
        }
        alert(error);
        return false;
      }
    },
    async logout() {
      const orderStore = useOrderStore();
      orderStore.reset();
      axios.defaults.headers.common["Authorization"] = undefined;
      this.partner = null;
      axios.defaults.withCredentials = false;
    },
  },
});
