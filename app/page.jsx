// import { get } from "mongoose";
// import TicketCard from "./(components)/TicketCard";
// import Ticket from "./(models)/Ticket";
// const API_URL = process.env.NEXT_PUBLIC_API_URL;

// const getTickets = async () => {
//   try {
//     const res = await fetch(`${API_URL}/api/Tickets`, {
//       cache: "no-store",
//     });

//     return res.json();
//   } catch (error) {
//     console.log("Failed to get tickets", error);
//   }
// };

// const Dashboard = async () => {
//   const { tickets } = await getTickets();

//   const uniqueCategories = [
//     ...new Set(tickets?.map(({ category }) => category)),
//   ];

//   return (
//     <div className="p-5">
//       <div>
//         {tickets &&
//           uniqueCategories?.map((uniqueCategory, categoryIndex) => (
//             <div key={categoryIndex} className="mb-4">
//               <h2>{uniqueCategory}</h2>
//               <div className="lg:grid grid-cols-2 xl:grid-cols-4">
//                 {tickets
//                   .filter((ticket) => ticket.category === uniqueCategory)
//                   .map((filteredTicket, index) => (
//                     <TicketCard
//                       key={index}
//                       id={index}
//                       ticket={filteredTicket}
//                     />
//                   ))}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

//OLD CODE ABOVE

import TicketCard from "./(components)/TicketCard";
import Ticket from "./(models)/Ticket";

export const dynamic = "force-dynamic";

const Dashboard = async () => {
  const tickets = await Ticket.find().lean();

  const uniqueCategories = [
    ...new Set(tickets.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      {uniqueCategories.map((uniqueCategory) => (
        <div key={uniqueCategory} className="mb-4">
          <h2>{uniqueCategory}</h2>

          <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {tickets
              .filter((ticket) => ticket.category === uniqueCategory)
              .map((ticket) => (
                <TicketCard key={ticket._id} ticket={ticket} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
