import axios from "axios";
import { toast } from "react-toastify";
import * as Sentry from "@sentry/react";

// 1st arg: success, 2nd arg: error > both of args are functions
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    Sentry.captureException(error);
    // toast.error("An unexpected error occurred.");
    toast("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
