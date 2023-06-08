// if there's an error in axios requests, we handle it here
// We use response.data.status && response.data.messages
// define error;
// we use watch(), to show the error for 3 seconds, after error has changed
// we should handle axios' errors in components and stores
// show them in a generic position for server errors
// and localize client errors close to the relative component
// should be extendible to show successfull notification like purchassing.

import { ref } from "vue";
import type { AxiosError } from "axios";

export let error = ref();

export const useAxiosError = async (httpError: AxiosError) => {
  if (httpError.response?.data) {
    error.value = httpError.response.data;
  } else if (httpError.message) {
    error.value = httpError;
  }

  setTimeout(() => {
    error.value = null;
  }, 3000);
};
