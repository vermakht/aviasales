import React from 'react';
import { Header } from '../header';
import Filter from '../filter';
import Tabs from '../tabs';
import Ticket from '../ticket';

import styles from './app.module.css';

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Filter />
        <div className={styles.ticket}>
          <Tabs />
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default { App };
