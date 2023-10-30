import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setData } from "../slices/configSlice";

const BASE_URL = "https://fakestoreapi.com";

export const getProducts = createAsyncThunk(
  "config/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products`);

      if (data) {
        return data.map((row) => {
          const { rating, ...restRow } = row;
          return { ...restRow, rating: rating.rate, ratingCount: rating.count };
        });
      }
      return [];
    } catch ({ response }) {
      if (!response) {
        throw err;
      }

      return rejectWithValue(response.data);
    }
  }
);

export const getAllProductCategories = createAsyncThunk(
  "config/getAllProductCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/products/categories`);

      return data ?? [];
    } catch ({ response }) {
      if (!response) {
        throw err;
      }

      return rejectWithValue(response.data);
    }
  }
);

export const createProduct = createAsyncThunk(
  "config/createProduct",
  async (newProduct, { rejectWithValue, getState, dispatch }) => {
    try {
      const { config } = getState();
      const { data } = config;

      const { data: responseData } = await axios.post(
        `${BASE_URL}/products`,
        newProduct
      );

      if (responseData) {
        alert(`Item ${responseData.id} was successfully created!`);
        dispatch(setData([responseData, ...data]));
      }

      return null;
    } catch ({ response }) {
      if (!response) {
        throw err;
      }

      return rejectWithValue(response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "config/updateProduct",
  async (newDetails, { rejectWithValue, getState, dispatch }) => {
    try {
      const { config } = getState();
      const { selectedProduct, data } = config;

      const { data: responseData } = await axios.put(
        `${BASE_URL}/products/${selectedProduct?.id}`,
        newDetails
      );

      if (responseData) {
        alert(`Item ${responseData.id} was successfully updated!`);
        const newData = data.map((row) =>
          row.id === responseData.id ? { ...row, ...responseData } : row
        );
        dispatch(setData(newData));
      }

      return null;
    } catch ({ response }) {
      if (!response) {
        throw err;
      }

      return rejectWithValue(response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "config/deleteProduct",
  async (product, { rejectWithValue, getState, dispatch }) => {
    try {
      const { id } = product;
      const { config } = getState();
      const { data } = config;

      const { data: responseData } = await axios.delete(
        `${BASE_URL}/products/${id}`
      );

      if (responseData) {
        alert(`Item ${id} was successfully deleted!`);
        const newData = data.filter((row) => row.id !== id);
        dispatch(setData(newData));
      }
      return null;
    } catch ({ response }) {
      if (!response) {
        throw err;
      }

      alert(`Cannot find item to be deleted!`);
      return rejectWithValue(response.data);
    }
  }
);
