import { createAsyncThunk } from '@reduxjs/toolkit';

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
  async (searchId: string) => {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );
      const data = (await response.json()) as TicketSegment;
      return { tickets: data.tickets, stop: data.stop };
    } catch (error) {
      throw new Error(String(error.message));
    }
  },
);
