import { connectDB } from "./db";
import Ticket from "./Ticket";
import { Types } from "mongoose";

export async function getTicketById(id) {
  await connectDB();

  if (!Types.ObjectId.isValid(id)) {
    return null;
  }

  const ticket = await Ticket.findById(id).lean();
  return ticket;
}
