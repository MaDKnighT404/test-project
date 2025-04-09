import { Link } from "react-router-dom";

interface UserProps {
  id: number;
  name: string;
  description: string;
  isactive: boolean;
  onClick: (id: number) => void;
}

const User = ({ id, name, description, isactive, onClick }: UserProps) => {
  const handleButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    onClick(id);
  };

  return (
    <li className={isactive ? "list-item active" : "list-item"}>
      <Link to={`/user/${id}`}>
        <div className={"list-item-actions"}>
          <div>
            ID: <b>{id}</b>
          </div>
          <button onClick={handleButtonClick} disabled={isactive}>
            {isactive ? "Active" : "Set Active"}
          </button>
        </div>
        <div>{name}</div>
        <div className={"list-item__description"}>{description}</div>
      </Link>
    </li>
  );
};
export default User;
