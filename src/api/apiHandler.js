import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getItems(endPoint) {
    return service
      .get(endPoint)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getOneItem(endPoint) {
    return service
      .get(endPoint)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getUser(endPoint) {
    return service
      .get(endPoint)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateUser(endPoint, data) {
    return service
      .patch(endPoint, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteUser(endPoint) {
    return service
      .delete(endPoint)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  createOne(endPoint, data) {
    return service
      .post(endPoint, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteOne(endPoint) {
    return service
      .delete(endPoint)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateOne(endPoint, data) {
    return service
      .patch(endPoint, data)
      .then((res) => res.data)
      .catch(errorHandler);
  },
};
