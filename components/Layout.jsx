import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import Nav from "../components/navbar";

export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-slate-500 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 px-4 rounded-lg"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-slate-800 min-h-screen flex">
        <Nav />
        <div className="bg-white flex-grow mt-4 mr-4 mb-4 p-4 rounded-lg">
            {children}
        </div>
      </div>
    );
  }
}
