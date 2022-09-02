import axios from "axios";
const API_URL = "http://localhost:8080/api/home";

class CRUDService {
  constructor() {
    this.token = "";
  }
  addSubject(subject) {
    if (localStorage.getItem("token")) {
      this.token = JSON.parse(localStorage.getItem("token"));
    }
    return axios.post(
      API_URL + "/",
      {
        email: JSON.parse(localStorage.getItem("user")).email,
        subject,
      },
      {
        headers: {
          Authorization: this.token,
        },
      }
    );
  }
  removeSubject(_id) {
    if (localStorage.getItem("token")) {
      this.token = JSON.parse(localStorage.getItem("token"));
    }
    return axios.delete(API_URL + "/", {
      data: {
        email: JSON.parse(localStorage.getItem("user")).email,
        _id,
      },
      headers: {
        Authorization: this.token,
      },
    });
  }
}

export default new CRUDService();
