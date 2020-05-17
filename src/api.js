import axios from "axios";

export const submitUser = (signup) => {
  return axios.post('/', signup)
              .then(resp => resp.data)
              .catch(error => console.error(error))
};