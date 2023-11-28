import React from 'react';
import { useSelector } from 'react-redux';

import styles from './tabs.module.scss';
import { RootState } from '../../store/rootReducer';
import { useAppDispatch } from '../../store/store';
import {
  toggleTabCheapest,
  toggleTabSpeediest,
  toggleTabOptimal,
} from '../../store/filter-reducer';

const Tabs: React.FC = () => {
  const { cheapest, speediest, optimal } = useSelector((state: RootState) => state.filters);
  const dispatch = useAppDispatch();

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
