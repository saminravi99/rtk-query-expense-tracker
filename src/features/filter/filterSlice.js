const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  type: "",
  search: ""
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    typeSelected: (state, action) => {
      state.type = action.payload;
    },
    typeRemoved: (state, action) => {
      state.type = "";
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    clearAllFilter: (state) => {
      state.type = "";
      state.search = "";
    },
  },
});

export default filterSlice.reducer;
export const {
  typeSelected,
  typeRemoved,
  searched,
  clearAllFilter,
} = filterSlice.actions;
