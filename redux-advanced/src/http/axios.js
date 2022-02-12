import axios from "axios";

//* Base URL
const baseURL = "https://react-test-98851-default-rtdb.firebaseio.com/";

//* Axios Config
export const Axios = axios.create({
  baseURL: baseURL, // 기본 서버 주소 입력
  headers: {
    "content-type": "application/x-www-form-urlencoded",
  },
});
