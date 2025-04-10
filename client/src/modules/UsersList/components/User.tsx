import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import type { User as UserType } from "../types";

const User = ({ user }: { user: UserType }) => {
  const { activeUserId, setActiveUserId } = useUserContext();

  const handleItemClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveUserId(user.id);
  };

  const isActive = user.id === activeUserId;

  return (
    <li className={isActive ? "list-item active" : "list-item"}>
      <Link to={`/user/${user.id}`}>
        <div className={"list-item__actions"}>
          <div>
            ID: <b>{user.id}</b>
          </div>
          <button onClick={handleItemClick} disabled={isActive}>
            {isActive ? "Active" : "Set Active"}
          </button>
        </div>
        <div>{user.name}</div>
        <div className={"list-item__description"}>{user.description}</div>
      </Link>
    </li>
  );
};

export default User;
