import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFound } from "./components/Layout/NotFound";
import Admin from "./features/admin/Admin";
import Auth from "./features/auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="admin" />} />
      <Route path="admin/*" element={<Admin />} />
      <Route path="auth/*" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
