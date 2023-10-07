
import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './ProductListSlice';

const store = configureStore({
  reducer: {
    productList: productListReducer,
  },
});

export default store;
