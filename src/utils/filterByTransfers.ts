import { Tickets } from '../middleware/thunk-tickets';
import { sortTicketsByTransfers } from './sortTicketsByTransfers';

function filterByTransfers(tickets: Tickets[], filterName: string) {
  switch (filterName) {
    case 'all':
      return sortTicketsByTransfers(tickets);

    case 'noTransfers':
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 0,
      );

    case 'oneTransfer':
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 1,
      );

    case 'twoTransfers':
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 2,
      );

    case 'threeTransfers':
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 3,
      );

    default:
      return tickets;
  }
}

export { filterByTransfers };
