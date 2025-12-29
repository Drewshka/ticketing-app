"use client";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
import { fa0, faX } from "@fortawesome/free-solid-svg-icons";
import { routerServerGlobal } from "next/dist/server/lib/router-utils/router-server-context";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const deleteTicket = async () => {
    const res = await fetch(`/api/Tickets/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
        onClick={deleteTicket}
      />
    </div>
  );
};

export default DeleteBlock;
