import { User } from "../types";

const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${process.env.API_URL}/items`);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("unknown error");
  }
};

export default getUsers;
