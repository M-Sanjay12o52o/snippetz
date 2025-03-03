"use client";

import { FC } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
// import Profile from "./Profile";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex flex-row items-center justify-between p-4 w-full bg-gray-400">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-6">
          <Link href={"/"}>Snippetz</Link>
        </h1>
        <div className="flex flex-row items-center border-2 mr-6 border-white rounded-md">
          <Input
            className="border-white w-60 rounded-md h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-200 border-none"
            placeholder="Search..."
          />
          <div className="rounded-none w-10 h-10 flex items-center justify-center bg-gray-300">
            <Link href={"/search"}>
              <SearchIcon className="text-gray-600" />
            </Link>
          </div>
        </div>
        <Link href={"/all"} className="text-xl hover:text-gray-100 ml-4">
          All snippets
        </Link>
      </div>
      <div className="flex flex-row items-center mr-4">
        {/* <Profile /> */}
        <div className="flex flex-row items-center space-x-2">
          {!isSignedIn && (
            <div className="flex flex-row">
              <div className="bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded-md mr-4 w-24 text-center">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
              <div className="bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded-md w-24 text-center">
                <SignedOut>
                  <SignUpButton />
                </SignedOut>
              </div>
            </div>
          )}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
