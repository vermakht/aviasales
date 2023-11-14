import { ActionTypes } from './actions';

// Типы данных state
export interface CheckboxState {
  [key: string]: boolean;
}

// Локальное состсояние для хранения чекбоксов
const initialState: CheckboxState = {
  all: false,
  noTransfers: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
};

// Типы данных внутри действий над локальным состсояним для текущего reducer
interface Action {
  type: ActionTypes; // Обязательное поле, представляющее тип действия
  payload: {
    filterName: string;
    isChecked: boolean;
  }; // Опциональное поле, содержащее данные, связанные с действием
}

export const filterReducer = (state: CheckboxState = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_ALL:
      const checked = action.payload.isChecked;
      return {
        ...state,
        all: checked,
        noTransfers: checked,
        oneTransfer: checked,
        twoTransfers: checked,
        threeTransfers: checked,
      };

    case ActionTypes.TOGGLE_FILTER:
      const { filterName, isChecked } = action.payload;

      // Обновляем состояние переданного фильтра
      const updatedState = {
        ...state,
        [filterName]: isChecked,
      };
      console.log(updatedState);

      const allChecked =
        updatedState.oneTransfer && updatedState.twoTransfers && updatedState.threeTransfers;

      return {
        ...updatedState,
        all: allChecked,
      };

    default:
      return state;
  }
};
