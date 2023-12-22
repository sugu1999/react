import{configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import productsReducer from './slices/productsSlice'

export const reduxStore=configureStore({
    reducer:{
        counterState:counterReducer,
        productsState:productsReducer
    }
})