import axios from "axios";

export const fetch = (resource, callback, params = {}) => {
  axios.get(`/api/${resource}`, {
    params,
    headers: { Authorization: window.localStorage.getItem("authToken") }
  })
    .then(json => callback(json.data))
};
