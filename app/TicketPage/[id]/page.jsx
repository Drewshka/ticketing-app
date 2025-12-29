import TicketForm from "@/app/(components)/TicketForm";
// import { getTicketById } from "@/app/(models)/getTicketById";
const API_URL = process.env.API_URL;

const getTicketById = async (id) => {
  const res = await fetch(`${API_URL}/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket.");
  }

  return res.json();
};

const TicketPage = async ({ params }) => {
  const { id } = await params;
  const EDITMODE = id === "new" ? false : true;
  let updateTicketData = {};

  if (EDITMODE) {
    updateTicketData = await getTicketById(id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }

  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default TicketPage;
