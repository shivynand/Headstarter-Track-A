"use client";
import { useState } from "react";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth} from "../firebase/config"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try { 
        const res =  await createUserWithEmailAndPassword(email, password);
        console.log({res});
        setEmail('');
        setPassword('');
    } catch (e) {
        console.error(e)
    }
    console.log("User signed up:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl overflow-hidden border-4 border-blue-400 dark:border-blue-800 p-8"
      onSubmit={handleSignUp}>
        <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white font-serif">
          Welcome ✨
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mt-3 font-serif">
          Sign up!
        </p>
        <div className="mt-10">
          <div className="relative">
            <label
              className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              placeholder="you@example.com"
              className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-6">
            <label
              className="block mb-3 text-sm font-medium text-zinc-600 dark:text-zinc-200"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="••••••••"
              className="block w-full px-4 py-3 mt-2 text-zinc-800 bg-white border-2 rounded-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-200 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-blue-400"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-10">
            <button
              className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
              type="submit"
            >
              Let's Go
            </button>
          </div>
        </div>
        <div className="px-8 py-4">
          <div className="text-sm text-blue-900 dark:text-blue-300 text-center">
            Have an account already?
            <a className="font-medium underline ml-2" href="/sign-in">
              Sign in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
