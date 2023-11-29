import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Типы данных state
export interface CheckboxState {
  [key: string]: boolean;
}

// Локальное состояние для хранения чекбоксов
const initialState: CheckboxState = {
  all: false,
  noTransfers: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
  cheapest: false,
  speediest: false,
  optimal: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleAllCheckbox(state: CheckboxState, action: PayloadAction<{ isChecked: boolean }>) {
      const { isChecked } = action.payload;
      return {
        ...state,
        all: isChecked,
        noTransfers: isChecked,
        oneTransfer: isChecked,
        twoTransfers: isChecked,
        threeTransfers: isChecked,
      };
    },
    toggleFilterCheckbox(
      state: CheckboxState,
      action: PayloadAction<{ filterName: string; isChecked: boolean }>,
    ) {
      const { filterName, isChecked } = action.payload;
      const updatedState = {
        ...state,
        [filterName]: isChecked,
      };

      const allChecked =
        updatedState.oneTransfer && updatedState.twoTransfers && updatedState.threeTransfers;

      return {
        ...updatedState,
        all: allChecked,
      };
    },
    toggleTabCheapest(state: CheckboxState) {
      return {
        ...state,
        cheapest: true,
        speediest: false,
        optimal: false,
      };
    },
    toggleTabSpeediest(state: CheckboxState) {
      return {
        ...state,
        cheapest: false,
        speediest: true,
        optimal: false,
      };
    },
    toggleTabOptimal(state: CheckboxState) {
      return {
        ...state,
        cheapest: false,
        speediest: false,
        optimal: true,
      };
    },
  },
  extraReducers: () => {},
});

export const {
  toggleAllCheckbox,
  toggleFilterCheckbox,
  toggleTabCheapest,
  toggleTabSpeediest,
  toggleTabOptimal,
} = filtersSlice.actions;

export const { reducer: filtersReducer } = filtersSlice;
