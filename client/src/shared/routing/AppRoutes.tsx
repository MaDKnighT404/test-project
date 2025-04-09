import { Route, Routes } from "react-router-dom";

import UserList from "../../modules/UsersList/UserList";
import SelectedUser from "../../modules/SelectedUser/SelectedUser";

import { MainLayout } from "../layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<UserList />} />
        <Route path="/user/:id" element={<SelectedUser />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
