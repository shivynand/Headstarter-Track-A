// Navbar.tsx
"use client";
import Link from "next/link";
import { useAuth } from "../auth/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export default function Navbar() {
  const { user, loading } = useAuth(); // Get user and loading state

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row bg-blue-600 w-full h-auto justify-between font-serif text-yellow-400 py-4 border-b-2 border-blue-500">
      <Link
        className="flex hover:cursor-pointer hover:text-white px-6"
        href="/"
      >
        About
      </Link>
      <div className="flex space-x-4">
        {loading ? (
          // Optionally, you can show a loading spinner or placeholder here
          <span className="text-yellow-400">Loading...</span>
        ) : (
          <>
            {!user ? (
              <>
                <Link
                  className="flex hover:cursor-pointer hover:text-white px-6"
                  href="/sign-up"
                >
                  Sign up
                </Link>

                <Link
                  className="flex hover:cursor-pointer hover:text-white px-6"
                  href="/sign-in"
                >
                  Sign in
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="flex hover:cursor-pointer hover:text-white px-6"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
                <button
                  className="flex hover:cursor-pointer hover:text-white px-6"
                  onClick={handleSignOut}
                >
                  Sign out
                </button>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
