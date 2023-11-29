import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

import { rootReducer } from './root-reducer'; // rootReducer, объединяющий все редьюсеры

// Создание хранилища Redux с rootReducer и начальным состоянием
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
