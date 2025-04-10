import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./modules/UsersList/context/UserContext";
import AppRoutes from "./shared/routing/AppRoutes";

import "./shared/styles/Layouts.scss";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
