import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID iOqvUiLYMN2aW6GcE3t0pdytKo5c5thA93orpT2Vsog",
  },
});
