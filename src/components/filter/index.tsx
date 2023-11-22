import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './filter.module.scss';
import { RootState } from '../../store/rootReducer';
import { toggleAllFilters, toggleFilter } from '../../store/filter-actions';

const Filter: React.FC = () => {
  const { all, noTransfers, oneTransfer, twoTransfers, threeTransfers } = useSelector(
    (state: RootState) => state.checkboxes,
  );
  const dispatch = useDispatch();

  const handleToggleAll = (isChecked: boolean) => {
    dispatch(toggleAllFilters(isChecked));
  };

  const handleToggleFilter = (filterName: string, isChecked: boolean) => {
    dispatch(toggleFilter(filterName, isChecked));
  };

  return (
    <section className={styles.container}>
      <article className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</article>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.item}
          checked={all}
          onChange={(e) => handleToggleAll(e.target.checked)}
        />
        Все
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.item}
          checked={noTransfers}
          onChange={(e) => handleToggleFilter('noTransfers', e.target.checked)}
        />
        Без пересадок
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.item}
          checked={oneTransfer}
          onChange={(e) => handleToggleFilter('oneTransfer', e.target.checked)}
        />
        1 пересадка
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.item}
          checked={twoTransfers}
          onChange={(e) => handleToggleFilter('twoTransfers', e.target.checked)}
        />
        2 пересадка
      </label>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.item}
          checked={threeTransfers}
          onChange={(e) => handleToggleFilter('threeTransfers', e.target.checked)}
        />
        3 пересадка
      </label>
    </section>
  );
};

export default Filter;
