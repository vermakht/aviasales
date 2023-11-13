import React from 'react';

import styles from './filter.module.scss';

export function Filter() {
  return (
    <section className={styles.container}>
      <article className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</article>
      <label className={styles.label}>
        <input type="checkbox" className={styles.item} />
        Все
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.item} />
        Без пересадок
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.item} />1 пересадка
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.item} />2 пересадка
      </label>
      <label className={styles.label}>
        <input type="checkbox" className={styles.item} />3 пересадка
      </label>
    </section>
  );
}

export default { Filter };
