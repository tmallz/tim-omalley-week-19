import axios from "axios";

const getEmployees = {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
}

 export default getEmployees;