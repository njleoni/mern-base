import axios from "axios";

export default {
  //* Gets all books
  getAllTax: function () {
    return axios.get("/api/tax");
  },
  //* Saves answers to db
  saveAnswers: function (answers) {
    return axios.post("/api/answers", answers);
  // Get user data upon login
  },
  //* this works NOT USED
  getUser: function (user) {
    return axios.get("/api/save", { params: { q: user } });
  },
  //* this works NOT USED
  saveUser: function(userData) {
    return axios.post("/api/save", userData);
  },
  //* this works
  getLastAnswer: function () {
    return axios.get("/api/answers");
  },
  //* this works
  updateUser: function (user) {
    return axios.put("/api/answers", user)
  },
  //* get all results
  getResults: function () {
    return axios.get("/api/results");
  }
};
