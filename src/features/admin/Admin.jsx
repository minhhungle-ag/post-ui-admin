import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../../components/Layout/AdminLayout";
import Users from "../users/Users";

export default function Admin() {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Navigate to="users" />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </AdminLayout>
  );
}
