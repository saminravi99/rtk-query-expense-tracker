import { getTransactionsForPagination } from "./paginationAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  transactionsLength: 0,
  pageNumber: 1,
  isLoading: false,
  isError: false,
  error: "",
};

// async function to set pagination
export const fetchTransactionsForPagination = createAsyncThunk(
  "pagination/fetchTransactions",
  async ({ type, search }) => {
    const transactions = await getTransactionsForPagination( type, search );
    return transactions;
  }
);

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsForPagination.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTransactionsForPagination.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactionsLength = action.payload.length;
      })
      .addCase(fetchTransactionsForPagination.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default paginationSlice.reducer;
export const { setPageNumber } = paginationSlice.actions;
