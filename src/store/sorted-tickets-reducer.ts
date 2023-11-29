import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tickets } from '../middleware/thunk-tickets';

export interface SortedTicketsState {
  sortedTickets: Tickets[];
}

const initialState: SortedTicketsState = {
  sortedTickets: [],
};

const sortedTicketSlice = createSlice({
  name: 'sorted',
  initialState,
  reducers: {
    filterTickets(state: SortedTicketsState, action: PayloadAction<{ tickets: Tickets[] }>) {
      const { tickets } = action.payload;
      return {
        ...state,
        sortedTickets: tickets,
      };
    },
  },
  extraReducers: () => {},
});

export const { filterTickets } = sortedTicketSlice.actions;

export const { reducer: sortedTicketReducer } = sortedTicketSlice;
