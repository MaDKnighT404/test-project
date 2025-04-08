import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserDescription from "../../modules/UserDecription/UserDescription";

import { MainLayout } from "../layouts/MainLayout";
import UserList from "../../modules/UsersList/UserList";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<UserList />} />
          <Route path="/:id" element={<UserDescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
