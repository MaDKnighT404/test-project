import { createContext, useContext, useState } from "react";

interface UserContextType {
  activeUserId: number | null;
  setActiveUserId: (id: number | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  const handleSetActiveUserId = (id: number | null) => {
    setActiveUserId(id);
  };

  return (
    <UserContext.Provider value={{ activeUserId, setActiveUserId: handleSetActiveUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
