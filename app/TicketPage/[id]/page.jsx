// import TicketCard from "@/app/(components)/TicketCard";

import TicketForm from "@/app/(components)/TicketForm";

const TicketPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      {/* TicketPage {id} */}
      <TicketForm />
    </div>
  );
};

export default TicketPage;
