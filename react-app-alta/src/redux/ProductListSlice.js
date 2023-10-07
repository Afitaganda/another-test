import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    // Aksi untuk menambah produk
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    // Aksi untuk mengedit produk
    editProduct: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },

    // Aksi untuk menghapus produk
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const {
  addProduct,
  editProduct,
  deleteProduct,
} = productListSlice.actions;

export default productListSlice.reducer;
