import React from 'react';

import styles from './ticket.module.scss';

export function Ticket() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <article className={`${styles['header-item']}`}>13 400 Р</article>
        <img
          className={`${styles['column-logo']}`}
          alt="Logo"
          height={'36px'}
          width={'110px'}
          src="https://c.animaapp.com/HZtlcjuG/img/s7-logo@2x.png"
        />
      </header>
      <section className={styles.group}>
        <article className={styles.element}>
          <div className={styles.column}>
            <div className={`${styles['column-title']}`}>MOW – HKT</div>
            <div className={`${styles['column-item']}`}>10:45 – 08:00</div>
          </div>
          <div className={styles.column}>
            <div className={`${styles['column-title']}`}>В ПУТИ</div>
            <div className={`${styles['column-item']}`}>21ч 15м</div>
          </div>
          <div className={styles.column}>
            <div className={`${styles['column-title']}`}>2 ПЕРЕСАДКИ</div>
            <div className={`${styles['column-item']}`}>HKG, JNB</div>
          </div>
        </article>
        <article className={styles.element}>
          <div className={styles.column}>
            <div className={`${styles['column-title']}`}>MOW – HKT</div>
            <div className={`${styles['column-item']}`}>10:45 – 08:00</div>
          </div>
          <div className={styles.column}>
            <div className={`${styles['column-title']}`}>В ПУТИ</div>
            <div className={`${styles['column-item']}`}>21ч 15м</div>
          </div>
          <div className={styles.column}>
            <div className={`${styles['column-title']}`}>2 ПЕРЕСАДКИ</div>
            <div className={`${styles['column-item']}`}>HKG, JNB</div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default { Ticket };
