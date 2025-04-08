import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AppRoutes from "./shared/routing/AppRoutes";

import "./styles.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
