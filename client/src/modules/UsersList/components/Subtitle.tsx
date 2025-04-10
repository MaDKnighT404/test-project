import { useUserContext } from "../context/UserContext";

const SubTitle = () => {
  const { activeUserId } = useUserContext();
  const activeItemText = activeUserId !== null ? activeUserId : "Empty";

  return <h2 className={"list-subtitle"}>Active Item ID: {activeItemText}</h2>;
};

export default SubTitle;
