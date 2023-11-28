import { combineReducers } from 'redux';
import { filtersReducer } from './filter-reducer';
import { ticketsReducer } from './tickets-reducer';

// Определяем RootState как объединение состояний всех редукторов
export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  filters: filtersReducer,
  tickets: ticketsReducer,
});
