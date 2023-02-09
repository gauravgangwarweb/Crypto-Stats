/* eslint-disable no-param-reassign */
const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');

export const fetchData = createAsyncThunk(
  'FETCH_DATA',
  async () => {
    const url = await fetch('https://api.coinstats.app/public/v1/coins');
    const res = await url.json();
    return res;
  },
);

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    data: [],
    selectedCoin: [],
    loading: false,
    error: null,
  },
  reducers: {
    selectCoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { selectCoin } = coinsSlice.actions;

export default coinsSlice.reducer;
