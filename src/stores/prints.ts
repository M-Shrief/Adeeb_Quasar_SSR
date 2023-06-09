import { defineStore } from "pinia";
// Types
import type { Print } from "./__types__";

export const usePrintStore = defineStore("prints", {
  state: () => {
    return {
      prints: [] as Print[],
    };
  },
  // need to persist state on client or maybe using cache
  // persist: {
  //   storage: sessionStorage,
  // },
  getters: {
    getPrints(state): Print[] {
      return state.prints;
    },
  },
  actions: {
    addPrint(print: Print) {
      const printsIds = this.prints.map(printItem => printItem.id);
      if (!printsIds.includes(print.id)) {
        this.prints.push(print);
      }
    },
    prepPrints(prints: Print[]) {
      // it's normal in big orders to repeat the same print
      this.prints = this.prints.concat(prints);
    },
    removePrint(print: Print) {
      let printIndex = this.getPrints
        .map((verse) => verse.id)
        .indexOf(print.id);
      this.getPrints.splice(printIndex, 1);
    },
  },
});
