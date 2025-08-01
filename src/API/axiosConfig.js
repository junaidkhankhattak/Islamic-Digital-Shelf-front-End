
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api", // Change this to your Spring Boot base URL
 
});

export default instance;
