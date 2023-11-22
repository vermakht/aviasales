/* Определение перечисления (enum) символьных констант для различных типов действий (actions), каждый из которых имеет
строковое значение в качестве своего ассоциированного значения.
 */
export enum ActionTypes {
  TOGGLE_ALL = 'TOGGLE_ALL',
  TOGGLE_FILTER = 'TOGGLE_FILTER',
}

// Действия
export const toggleAllFilters = (isChecked: boolean) => ({
  type: ActionTypes.TOGGLE_ALL,
  payload: { isChecked },
});

export const toggleFilter = (filterName: string, isChecked: boolean) => ({
  type: ActionTypes.TOGGLE_FILTER,
  payload: { filterName, isChecked },
});
