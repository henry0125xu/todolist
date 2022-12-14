import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }
  googleLogin(username, email) {
    return axios.post(API_URL + "/google", { username, email });
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
