import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://redux-toolkit-expense-tracker-saminravi99.onrender.com",
});

export default axiosInstance;

//http://localhost:9000
//https://redux-toolkit-expense-tracker-saminravi99.onrender.com/transactions