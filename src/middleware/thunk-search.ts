import { createAsyncThunk } from '@reduxjs/toolkit';

export interface SearchIdResponse {
  searchId: string;
}

// Создаем асинхронное Thunk-действие с помощью createAsyncThunk
export const fetchSearchId = createAsyncThunk<SearchIdResponse>(
  'tickets/fetchSearchId',
  async () => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search');
      return (await response.json()) as SearchIdResponse;
    } catch (error) {
      throw new Error(String(error.message));
    }
  },
);
