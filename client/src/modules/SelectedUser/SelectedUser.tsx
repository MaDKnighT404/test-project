import { Link } from "react-router-dom";
import useSelectedUser from "./hooks/useSelectedUser";

import "./styles/SelectedUser.scss";

const SelectedUser = () => {
  const { user, isLoading, error } = useSelectedUser();

  return (
    <div className="user-selected-wrapper">
      <Link to={"/"}>Go Back</Link>
      <h2>User Details</h2>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {user && (
        <>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Description: {user.description}</p>
        </>
      )}
    </div>
  );
};

export default SelectedUser;
