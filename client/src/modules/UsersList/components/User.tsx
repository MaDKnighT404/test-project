import { Link } from "react-router-dom";

import Button from "../../../shared/components/Button";

interface UserProps {
  id: number;
  name: string;
  description: string;
  isactive: boolean;
  onClick: (id: string) => void;
}

const User = ({ id, name, description, isactive, onClick }: UserProps) => {
  return (
    <li className={isactive ? "list-item active" : "list-item"}>
      <Link to={`/user/${id}`}>
        <div className={"list-item-actions"}>
          <div>
            ID: <b>{id}</b>
          </div>
          <Button onClick={onClick} id={id} disabled={isactive}>
            {isactive ? "Active" : "Set Active"}
          </Button>
        </div>
        <div>{name}</div>
        <div className={"list-item__description"}>{description}</div>
      </Link>
    </li>
  );
};

export default User;
