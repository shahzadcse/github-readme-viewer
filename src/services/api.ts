import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com",
});

export const readmeapi = axios.create({
  baseURL: "https://raw.githubusercontent.com/",
});
