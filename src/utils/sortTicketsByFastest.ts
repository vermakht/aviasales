import { Tickets } from '../middleware/thunk-tickets';

function sortTicketsByFastest(tickets: Tickets[]): Tickets[] {
  return tickets.slice().sort((a, b) => {
    const stopsA = a.segments[0]?.duration || 0;
    const stopsB = b.segments[0]?.duration || 0;
    return stopsA - stopsB;
  });
}

export { sortTicketsByFastest };
