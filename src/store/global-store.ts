import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer'; // rootReducer, объединяющий все редьюсеры

// Создание хранилища Redux с rootReducer и начальным состоянием
export const store = configureStore({
  reducer: rootReducer,
});
