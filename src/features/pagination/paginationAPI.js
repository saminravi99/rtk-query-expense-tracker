import axios from "../../utils/axios";

export const getTransactionsForPagination = async (type, search) => {
  let queryString = "";

  if (type) {
    queryString += `type_like=${type}`;
  }


  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(`/transactions?${queryString}`);

  return response.data;
};
