import React from 'react';

import styles from './tabs.module.scss';

export function Tabs() {
  return (
    <div className={styles.container}>
      <button className={`${styles.item} ${styles['item--active']}`}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={styles.item}>САМЫЙ БЫСТРЫЙ</button>
      <button className={styles.item}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
}

export default { Tabs };
