import axios from "axios";

export const fetch = (resource, callback) => {
  axios.get(`/api/${resource}`)
    .then(json => callback(json.data))
};
