import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ///состояние counter и его редюсер
  },
});

///мы используем слово counter из объекта reducer, чтобы связать редюсер counterReducer с определенной частью состояния в Redux store.//
