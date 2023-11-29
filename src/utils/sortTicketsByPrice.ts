import { Tickets } from '../middleware/thunk-tickets';

function sortTicketsByPrice(tickets: Tickets[]): Tickets[] {
  return tickets.slice().sort((a, b) => a.price - b.price);
}

export { sortTicketsByPrice };
