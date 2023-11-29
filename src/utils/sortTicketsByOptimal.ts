import { Tickets } from '../middleware/thunk-tickets';
import { sortTicketsByTransfers } from './sortTicketsByTransfers';
import { sortTicketsByPrice } from './sortTicketsByPrice';
import { sortTicketsByFastest } from './sortTicketsByFastest';

function sortTicketsByOptimal(tickets: Tickets[]): Tickets[] {
  return tickets.slice().sort((a, b) => {
    switch (true) {
      case a.segments[0]?.stops.length !== b.segments[0]?.stops.length:
        return sortTicketsByTransfers([a, b])[0] === a ? -1 : 1;
      case a.segments[0]?.duration !== b.segments[0]?.duration:
        return sortTicketsByFastest([a, b])[0] === a ? -1 : 1;
      default:
        return sortTicketsByPrice([a, b])[0] === a ? -1 : 1;
    }
  });
}

export { sortTicketsByOptimal };
