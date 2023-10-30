import { createSlice } from "@reduxjs/toolkit";
import { getProducts, getAllProductCategories } from "../thunks/configThunk";

const LOADING_STATUS = { IDLE: "idle", LOADING: "loading" };

const configSlice = createSlice({
  name: "config",
  initialState: {
    status: LOADING_STATUS.IDLE,
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setIsEditing: (state, action) => {
      state.isEditing = action.payload;
    },
    setAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
    setisCreating: (state, action) => {
      state.isCreating = action.payload;
    },
    clearRowData: (state) => {
      state.data = [];
    },
    resetActionDialog: (state) => {
      state.isEditing = false;
      state.selectedProduct = undefined;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = LOADING_STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.status = LOADING_STATUS.IDLE;
      })
      .addCase(getProducts.rejected, (state) => {
        state.status = LOADING_STATUS.IDLE;
      })
      .addCase(getAllProductCategories.pending, (state) => {
        state.status = LOADING_STATUS.LOADING;
      })
      .addCase(getAllProductCategories.fulfilled, (state, { payload }) => {
        state.allCategories = payload;
        state.status = LOADING_STATUS.IDLE;
      })
      .addCase(getAllProductCategories.rejected, (state) => {
        state.status = LOADING_STATUS.IDLE;
      });
  },
});

export const {
  setSelectedProduct,
  setIsEditing,
  clearRowData,
  resetActionDialog,
  setData,
  setAllCategories,
  setisCreating,
} = configSlice.actions;

export const selectRowData = (state) => state.config.data;
export const selectSelectedProduct = (state) => state.config.selectedProduct;
export const selectProductCategories = (state) => state.config.allCategories;
export const selectIsEditing = (state) => state.config.isEditing;
export const selectIsLoading = (state) =>
  state.config.status === LOADING_STATUS.LOADING ?? false;
export const selectIsCreating = (state) => state.config.isCreating ?? false;

export default configSlice;
