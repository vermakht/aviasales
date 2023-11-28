import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';

import styles from './ticket.module.scss';
import { RootState } from '../../store/rootReducer';
import { useAppDispatch } from '../../store/store';
import { fetchSearchId } from '../../middleware/thunk-search';
import { fetchTicketsBySearchId } from '../../middleware/thunk-tickets';
import { convertMinutesToHoursAndMinutes } from '../../utils/flightDurationConverter';
import { arrayToString } from '../../utils/enumerationToString';
import { formatTimeRange } from '../../utils/departureArrivalTimeConverter';
import { getStopsEnding } from '../../utils/getStopsEnding';

const Ticket: React.FC = () => {
  const dispatch = useAppDispatch(); // Заменяем useDispatch на useAppDispatch
  const { searchId, tickets, stop, isLoadingSearchId, isLoadingTickets, isError, errorMessage } =
    useSelector((state: RootState) => state.tickets);

  useEffect(() => {
    // Отправить запрос на получение searchId сразу после монтирования компонента
    dispatch(fetchSearchId());
  }, []); // Пустой массив зависимостей гарантирует выполнение только при монтировании

  useEffect(() => {
    // Проверка, что есть searchId и не идет загрузка поиска и нет флага остановки
    if (searchId && !isLoadingSearchId && !stop) {
      dispatch(fetchTicketsBySearchId());
    }
  }, [dispatch, searchId, isLoadingSearchId, stop]);

  // Проверка состояния загрузки и получения данных
  if (isLoadingSearchId && isLoadingTickets) {
    return (
      <section className={styles['container-spin']}>
        <Spin />
      </section>
    );
  }

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  return (
    <>
      {tickets.map((ticket, index) => (
        <div key={index} className={styles.container}>
          <header className={styles.header}>
            <article className={styles['header-item']}>
              {ticket.price.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
                minimumFractionDigits: 0,
              })}
            </article>
            <img
              className={styles['column-logo']}
              alt="Logo"
              height={'36px'}
              width={'110px'}
              src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}
            />
          </header>
          <section className={styles.group}>
            {ticket.segments.map((segment, segmentIndex) => (
              <article key={segmentIndex} className={styles.element}>
                <div className={styles.column}>
                  <div className={`${styles['column-title']}`}>
                    {segment.origin} – {segment.destination}
                  </div>
                  <div className={`${styles['column-item']}`}>
                    {formatTimeRange(segment.date, segment.duration)}
                  </div>
                </div>
                <div className={styles.column}>
                  <div className={`${styles['column-title']}`}>В ПУТИ</div>
                  <div className={`${styles['column-item']}`}>
                    {convertMinutesToHoursAndMinutes(segment.duration)}
                  </div>
                </div>
                <div className={styles.column}>
                  <div className={`${styles['column-title']}`}>
                    {segment.stops.length === 0
                      ? 'Без пересадок'
                      : `${segment.stops.length} ${getStopsEnding(segment.stops.length)}`}
                  </div>
                  <div className={`${styles['column-item']}`}>{arrayToString(segment.stops)}</div>
                </div>
              </article>
            ))}
          </section>
        </div>
      ))}
    </>
  );
};

export default Ticket;
