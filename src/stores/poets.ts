import { defineStore } from "pinia";
import axios, { AxiosError } from "axios";
// Types
import type { Poet } from "./__types__";
// Composables
import { useAxiosError } from "../composables/error";
export const usePoetStore = defineStore("poets", {
  state: () => {
    return {
      poets: [] as Poet["details"][],
      poet: null as Poet | null,
    };
  },
  getters: {
    getPoets(state): Poet["details"][] {
      return state.poets;
    },
    getPoet(state): Poet | null {
      return state.poet;
    },
  },
  actions: {
    async fetchPoets() {
      try {
        const req = await axios.get(`http://localhost:3000/api/poets`);
        this.poets = req.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          useAxiosError(error);
          return;
        }
        alert(error);
      }
    },
    async fetchPoet(id: any) {
      try {
        const apiUrl = `http://localhost:3000/api/poet/${id}`;
        const req = await axios.get(apiUrl);
        this.poet = req.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          useAxiosError(error);
          return;
        }
        alert(error);
      }
    },
  },
});
