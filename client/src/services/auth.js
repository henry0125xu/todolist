import axios from "axios";
const API_URL = "http://localhost:8080/api/auth";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }
  googleLogin() {
    let x = window.open(API_URL + "/google", "_self");
    console.log(x);
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  register(username, email, password) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
