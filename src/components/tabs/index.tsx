import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import styles from './tabs.module.scss';
import { RootState } from '../../store/root-reducer';
import { useAppDispatch } from '../../store/store';
import {
  toggleTabCheapest,
  toggleTabSpeediest,
  toggleTabOptimal,
} from '../../store/filter-reducer';
import { sortTicketsByPrice } from '../../utils/sortTicketsByPrice';
import { filterTickets } from '../../store/sorted-tickets-reducer';
import { sortTicketsByFastest } from '../../utils/sortTicketsByFastest';
import { sortTicketsByOptimal } from '../../utils/sortTicketsByOptimal';

const Tabs: React.FC = () => {
  const { cheapest, speediest, optimal } = useSelector((state: RootState) => state.filters);
  const { tickets } = useSelector((state: RootState) => state.tickets);
  const dispatch = useAppDispatch();

  const sortedTicketsByPrice = useMemo(() => sortTicketsByPrice(tickets), [tickets]);
  const sortedTicketsByFastest = useMemo(() => sortTicketsByFastest(tickets), [tickets]);
  const sortedTicketsByOptimal = useMemo(() => sortTicketsByOptimal(tickets), [tickets]);

  useEffect(() => {
    let filteredTickets = [...tickets];

    if (cheapest) {
      filteredTickets = sortedTicketsByPrice;
    }
    if (speediest) {
      filteredTickets = sortedTicketsByFastest;
    }
    if (optimal) {
      filteredTickets = sortedTicketsByOptimal;
    }

    dispatch(filterTickets({ tickets: filteredTickets }));
  }, [
    cheapest,
    speediest,
    optimal,
    tickets,
    sortedTicketsByPrice,
    sortedTicketsByFastest,
    sortedTicketsByOptimal,
  ]);

  const handleTabCheapest = () => {
    dispatch(toggleTabCheapest());
  };

  const handleTabSpeediest = () => {
    dispatch(toggleTabSpeediest());
  };

  const handleTabOptimal = () => {
    dispatch(toggleTabOptimal());
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.item} ${cheapest ? styles['item--active'] : ''}`}
        onClick={() => handleTabCheapest()}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${styles.item} ${speediest ? styles['item--active'] : ''}`}
        onClick={() => handleTabSpeediest()}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`${styles.item} ${optimal ? styles['item--active'] : ''}`}
        onClick={() => handleTabOptimal()}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default Tabs;
