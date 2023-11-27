import { ActionTypes } from './filter-actions';

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
  cheapest: true,
  speediest: false,
  optimal: false,
};

// Типы данных внутри действий над локальным состоянием для текущего reducer
interface Action {
  type: ActionTypes; // Обязательное поле, представляющее тип действия
  payload: {
    filterName: string;
    isChecked: boolean;
  }; // Опциональное поле, содержащее данные, связанные с действием
}

export const filterReducer = (state: CheckboxState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL_CHECKBOX:
      const checked = action.payload.isChecked;
      return {
        ...state,
        all: checked,
        noTransfers: checked,
        oneTransfer: checked,
        twoTransfers: checked,
        threeTransfers: checked,
      };

    case ActionTypes.TOGGLE_FILTER_CHECKBOX:
      const { filterName, isChecked } = action.payload;

      // Обновляем состояние переданного фильтра
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

    case ActionTypes.TOGGLE_TAB_CHEAPEST:
      return {
        ...state,
        cheapest: true,
        speediest: false,
        optimal: false,
      };

    case ActionTypes.TOGGLE_TAB_SPEEDIEST:
      return {
        ...state,
        cheapest: false,
        speediest: true,
        optimal: false,
      };

    case ActionTypes.TOGGLE_TAB_OPTIMAL:
      return {
        ...state,
        cheapest: false,
        speediest: false,
        optimal: true,
      };

    default:
      return state;
  }
};
