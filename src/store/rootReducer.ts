import { combineReducers } from 'redux';
import { filterReducer } from './filter-reducer';

// Определяем RootState как объединение состояний всех редукторов
export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  checkboxes: filterReducer,
});
