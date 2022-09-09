import axios from "../../utils/axios";

export const getTransactions = async (type, search, pageNumber) => {
    let queryString = "";
    if (type) {
        queryString += `type_like=${type}`;
    }
    if (search) {
        queryString += `&q=${search}`;
    }
    const response = await axios.get(
      `/transactions?${queryString}&_page=${pageNumber}&_limit=10&_sort=id&_order=desc`
    );

    return response.data;
};

export const getAllTransactions = async () => {
    const response = await axios.get("/transactions");
    return response.data;
};

export const getLatestTransactions = async () => {
    const response = await axios.get("/transactions?_sort=id&_order=desc&_limit=5");

    return response.data;
};

export const addTransaction = async (data) => {
    const response = await axios.post("/transactions", data);

    return response.data;
};

export const editTransaction = async (id, data) => {
    const response = await axios.put(`/transactions/${id}`, data);

    return response.data;
};

export const deleteTransaction = async (id) => {
    const response = axios.delete(`/transactions/${id}`);

    return response.data;
};
