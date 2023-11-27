/* Определение перечисления (enum) символьных констант для различных типов действий (actions), каждый из которых имеет
строковое значение в качестве своего ассоциированного значения.
 */
export enum ActionTypes {
  TOGGLE_ALL_CHECKBOX = 'TOGGLE_ALL_CHECKBOX',
  TOGGLE_FILTER_CHECKBOX = 'TOGGLE_FILTER_CHECKBOX',
  TOGGLE_TAB_CHEAPEST = 'TOGGLE_TAB_CHEAPEST',
  TOGGLE_TAB_SPEEDIEST = 'TOGGLE_TAB_SPEEDIEST',
  TOGGLE_TAB_OPTIMAL = 'TOGGLE_TAB_OPTIMAL',
}

// Действия
export const toggleAllFilters = (isChecked: boolean) => ({
  type: ActionTypes.TOGGLE_ALL_CHECKBOX,
  payload: { isChecked },
});

export const toggleFilter = (filterName: string, isChecked: boolean) => ({
  type: ActionTypes.TOGGLE_FILTER_CHECKBOX,
  payload: { filterName, isChecked },
});

export const toggleTabCheapest = () => ({
  type: ActionTypes.TOGGLE_TAB_CHEAPEST,
});

export const toggleTabSpeediest = () => ({
  type: ActionTypes.TOGGLE_TAB_SPEEDIEST,
});

export const toggleTabOptimal = () => ({
  type: ActionTypes.TOGGLE_TAB_OPTIMAL,
});
