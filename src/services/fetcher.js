import axios from "axios";

export const fetch = (resource, callback) => {
  axios.get(`/api/${resource}`, {
    headers: { Authorization: window.localStorage.getItem("authToken") }
  })
    .then(json => callback(json.data))
};
