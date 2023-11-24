import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './ticket.module.scss';
import { RootState } from '../../store/rootReducer';
import { useAppDispatch } from '../../store/store';
import { fetchSearchId } from '../../middleware/thunk-search';
import { fetchTicketsBySearchId } from '../../middleware/thunk-tickets';
import { convertMinutesToHoursAndMinutes } from '../../utils/flightDurationConverter';
import { arrayToString } from '../../utils/enumerationToString';

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
      dispatch(fetchTicketsBySearchId(searchId));
    }
  }, [dispatch, searchId, isLoadingSearchId, stop]);

  // Проверка состояния загрузки и получения данных
  if (isLoadingSearchId || isLoadingTickets) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {errorMessage}</div>;
  }

  // Далее можно использовать данные о билетах (tickets) и searchId
  return (
    <div className={styles.container}>
      {tickets.map((ticket) => (
        <div key={ticket.price} className={styles.ticket}>
          <div className={styles.header}>
            <div className={styles.price}>{ticket.price} ₽</div>
          </div>

          {ticket.segments.map((segment) => (
            <div key={segment.date} className={styles.segment}>
              <div className={styles.cities}>
                <div>
                  {segment.origin} – {segment.destination}
                </div>
                <div>{new Date(segment.date).toLocaleString()}</div>
              </div>

              <div className={styles.duration}>
                {convertMinutesToHoursAndMinutes(segment.duration)}
              </div>

              {segment.stops.length > 0 && (
                <div className={styles.stops}>{arrayToString(segment.stops)}</div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Ticket;
