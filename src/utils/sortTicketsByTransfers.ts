import { Tickets } from '../middleware/thunk-tickets';

function sortTicketsByTransfers(tickets: Tickets[]): Tickets[] {
  return tickets.slice().sort((a, b) => {
    const stopsA = a.segments[0]?.stops.length || 0;
    const stopsB = b.segments[0]?.stops.length || 0;
    return stopsA - stopsB;
  });
}

export { sortTicketsByTransfers };
