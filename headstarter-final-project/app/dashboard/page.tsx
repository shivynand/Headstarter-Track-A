// dashboard/page.tsx
"use client";
import { signOut } from "firebase/auth";
import { useAuth } from "../auth/AuthContext";
import ProtectedRoute from "../auth/ProtectedRoute"; // Adjust the path as necessary
import { auth } from "../firebase/config";

const DashboardPage = () => {

  return (
    <ProtectedRoute>
    <div></div>
    </ProtectedRoute>
  );
};

export default DashboardPage;
