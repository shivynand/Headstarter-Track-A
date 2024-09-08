// protectedroute.tsx
"use client";
import React, { useEffect } from "react";
import { useAuth } from "../auth/AuthContext"; // Adjust the path as necessary
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Redirect to sign-in if user is not authenticated and loading is false
    if (!user && !loading) {
      router.push("/sign-in");
    }
  }, [user, loading, router]);
  // If user is authenticated, render the children
  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
