import axios from 'axios';

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["Cache-Control"] = "no-cache";
axios.defaults.headers["pragma"] = "no-cache";

//axios.defaults.baseURL = "http://82.156.109.184:3000/api";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = false;

export function post(url, data, otherConfig) {
  return axios.post(url, data, otherConfig);
}

export function get(url, data, otherConfig) {
  return axios.get(url, { params: data, ...otherConfig });
}


