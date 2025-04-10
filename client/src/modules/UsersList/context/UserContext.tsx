import { createContext, useContext, useState, ReactNode, useRef, useEffect } from "react";

interface UserContextType {
  activeUserId: number | null;
  setActiveUserId: (id: number | null) => void;
}

// Создаем глобальную переменную для хранения состояния между монтированиями
let globalActiveUserId: number | null = null;

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Инициализируем состояние из глобальной переменной
  const [activeUserId, setActiveUserId] = useState<number | null>(globalActiveUserId);

  // Обновляем глобальную переменную при изменении состояния
  const handleSetActiveUserId = (id: number | null) => {
    setActiveUserId(id);
    globalActiveUserId = id;
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
