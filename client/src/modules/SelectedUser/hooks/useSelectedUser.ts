import { useParams } from "react-router-dom";
import getSelectedUser from "../api/getSelectedUser";
import { useQuery } from "@tanstack/react-query";

const useSelectedUser = () => {
  const { id } = useParams();
  console.log(id);

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => {
      if (!id) {
        throw new Error("User ID is required");
      }
      return getSelectedUser(id);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { user, isLoading, error };
};

export default useSelectedUser;
