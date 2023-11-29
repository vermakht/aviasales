import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId } from '../middleware/thunk-search';
import { fetchTicketsBySearchId, Tickets } from '../middleware/thunk-tickets';
import { sortTicketsByPrice } from '../utils/sortTicketsByPrice';
import {
  toggleAllCheckbox,
  toggleFilterCheckbox,
  toggleTabCheapest,
  toggleTabOptimal,
  toggleTabSpeediest,
} from './filter-reducer';
import { sortTicketsByFastest } from '../utils/sortTicketsByFastest';
import { sortTicketsByOptimal } from '../utils/sortTicketsByOptimal';
import { filterByTransfers } from '../utils/filterByTransfers';
import { RootState } from './rootReducer';

interface TicketsState {
  tickets: Tickets[];
  sortedTickets: Tickets[];
  searchId: string;
  stop: boolean;
  isLoadingSearchId: boolean;
  isLoadingTickets: boolean;
  isErrorSearchId: boolean;
  isErrorTicketsBySearchId: boolean;
  errorMessage: string | null;
}
// Начальное состояние
const initialState: TicketsState = {
  tickets: [],
  sortedTickets: [],
  searchId: '',
  stop: false,
  isLoadingSearchId: false,
  isLoadingTickets: false,
  isErrorSearchId: false,
  isErrorTicketsBySearchId: false,
  errorMessage: null,
};

// Создание среза состояния для билетов
export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.isLoadingSearchId = true;
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId;
        state.isLoadingSearchId = false;
      })
      .addCase(fetchSearchId.rejected, (state, action) => {
        state.isLoadingSearchId = false;
        state.errorMessage = action.error.message ?? null;
        state.isErrorSearchId = true;
      })
      .addCase(fetchTicketsBySearchId.pending, (state) => {
        state.isLoadingTickets = true;
      })
      .addCase(fetchTicketsBySearchId.fulfilled, (state, action) => {
        const { tickets, stop } = action.payload || {};
        if (Array.isArray(state.tickets) && Array.isArray(tickets)) {
          state.tickets = [...state.tickets, ...tickets];
          state.sortedTickets = sortTicketsByPrice(state.tickets);
        }
        if (typeof stop === 'boolean') {
          state.stop = stop;
        }
        state.isLoadingTickets = false;
      })
      .addCase(fetchTicketsBySearchId.rejected, (state, action) => {
        state.isLoadingTickets = false;
        state.errorMessage = action.error.message ?? null;
        state.isErrorTicketsBySearchId = true;
      })
      .addCase(toggleAllCheckbox, (state) => {
        state.sortedTickets = filterByTransfers(state.tickets, stateFilter);
      })
      .addCase(toggleFilterCheckbox, (state) => {
        state.sortedTickets = filterByTransfers(state.tickets, stateFilter);
      })
      .addCase(toggleTabCheapest, (state) => {
        state.sortedTickets = sortTicketsByPrice(state.tickets);
      })
      .addCase(toggleTabSpeediest, (state) => {
        state.sortedTickets = sortTicketsByFastest(state.tickets);
      })
      .addCase(toggleTabOptimal, (state) => {
        state.sortedTickets = sortTicketsByOptimal(state.tickets);
      });
  },
});

export const { reducer: ticketsReducer } = ticketsSlice;
