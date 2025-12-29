import { connectDB } from "./db";
import Ticket from "./Ticket";

export async function getTickets() {
  await connectDB();
  return Ticket.find().lean();
}
