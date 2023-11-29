import { createSlice } from '@reduxjs/toolkit';
import { fetchSearchId } from '../middleware/thunk-search';
import { fetchTicketsBySearchId, Tickets } from '../middleware/thunk-tickets';

interface TicketsState {
  tickets: Tickets[];
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
      });
  },
});

export const { reducer: ticketsReducer } = ticketsSlice;
