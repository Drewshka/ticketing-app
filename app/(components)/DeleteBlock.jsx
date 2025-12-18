const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
import { fa0, faX } from "@fortawesome/free-solid-svg-icons";

const DeleteBlock = () => {
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon
        icon={faX}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
};

export default DeleteBlock;
