import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store/rootReducer';

export interface Tickets {
  price: number;
  carrier: string;
  segments: {
    origin: string;
    destination: string;
    date: string;
    duration: number;
    stops: string[];
  }[];
}

interface TicketSegment {
  tickets: Tickets[];
  stop: boolean;
}

// Thunk-действие для получения билетов по searchId
export const fetchTicketsBySearchId = createAsyncThunk(
  'tickets/fetchTicketsBySearchId',
  async (_, { getState }) => {
    const state = getState() as RootState;

    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${state.tickets.searchId}`,
      );
      if (response.ok) {
        const { tickets, stop } = (await response.json()) as TicketSegment;
        return { tickets, stop };
      }
    } catch (error) {
      throw new Error(String(error.message));
    }
  },
);
