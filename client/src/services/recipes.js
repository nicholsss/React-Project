import axios from "axios";
const baseUrl = "/api/recipes";

let token = null;

const getConfig = () => ({
  headers: { Authorization: token }
});

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const destroyToken = () => {
  token = null;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = async newObject => {
  const response = await axios.post(baseUrl, newObject, getConfig())
  return response.data
}

export default { getAll, create, setToken };
