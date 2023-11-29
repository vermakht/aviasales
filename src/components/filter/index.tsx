import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './filter.module.scss';
import { RootState } from '../../store/root-reducer';
import { useAppDispatch } from '../../store/store';
import { toggleFilterCheckbox, toggleAllCheckbox } from '../../store/filter-reducer';
import { filterByTransfers } from '../../utils/filterByTransfers';
import { filterTickets } from '../../store/sorted-tickets-reducer';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { all, noTransfers, oneTransfer, twoTransfers, threeTransfers } = useSelector(
    (state: RootState) => state.filters,
  );
  const { tickets } = useSelector((state: RootState) => state.tickets);

  useEffect(() => {
    let filteredTickets = [...tickets]; // Создание копии исходного массива билетов

    if (!all) {
      if (noTransfers) {
        filteredTickets = filterByTransfers(tickets, 'noTransfers');
      }
      if (oneTransfer) {
        filteredTickets = filterByTransfers(tickets, 'oneTransfer');
      }
      if (twoTransfers) {
        filteredTickets = filterByTransfers(tickets, 'twoTransfers');
      }
      if (threeTransfers) {
        filteredTickets = filterByTransfers(tickets, 'threeTransfers');
      }
    }

    dispatch(filterTickets({ tickets: filteredTickets }));
  }, [all, noTransfers, oneTransfer, twoTransfers, threeTransfers, dispatch, tickets]);

  const handleToggleAll = (isChecked: boolean) => {
    dispatch(toggleAllCheckbox({ isChecked }));
  };

  const handleToggleFilter = (filterName: string, isChecked: boolean) => {
    dispatch(toggleFilterCheckbox({ filterName, isChecked }));
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
