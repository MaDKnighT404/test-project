const getSelectedUser = async (id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/items/${id}`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `${response.status} ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      try {
        const errorData = JSON.parse(error.message);
        if (errorData && errorData.message) {
          throw new Error(errorData.message);
        }
      } catch (parseError) {
        throw error;
      }
    }
    throw new Error("Неизвестная ошибка");
  }
};
export default getSelectedUser;
