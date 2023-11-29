import { Tickets } from '../middleware/thunk-tickets';
import { CheckboxState } from '../store/filter-reducer';
import { sortTicketsByTransfers } from './sortTicketsByTransfers';

function filterByTransfers(tickets: Tickets[], filters: CheckboxState) {
  switch (true) {
    case filters.all:
      return sortTicketsByTransfers(tickets);

    case filters.noTransfers:
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 0,
      );

    case filters.oneTransfer:
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 1,
      );

    case filters.twoTransfers:
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 2,
      );

    case filters.threeTransfers:
      return sortTicketsByTransfers(tickets).filter(
        (ticket) => ticket.segments[0].stops.length === 3,
      );

    default:
      return tickets;
  }
}

export { filterByTransfers };
