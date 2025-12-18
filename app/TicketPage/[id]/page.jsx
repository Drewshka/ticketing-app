// import TicketCard from "@/app/(components)/TicketCard";

const TicketPage = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      TicketPage {id}
      {/* <TicketCard /> */}
    </div>
  );
};

export default TicketPage;
