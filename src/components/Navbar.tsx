"use client";

import { FC } from "react";
import { Input } from "./ui/input";
import { Plus, SearchIcon } from "lucide-react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface NavbarProps { }

const Navbar: FC<NavbarProps> = ({ }) => {
  const { isSignedIn } = useUser();

  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex flex-row items-center justify-between p-4 w-full bg-gray-800 text-white border-b border-gray-600">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-6">
          <Link href={"/"} className="hover:text-gray-300">
            Snippetz
          </Link>
        </h1>
        <div className="flex flex-row items-center border border-gray-600 rounded-md overflow-hidden">
          <Input
            className="bg-gray-700 text-white w-60 h-10 px-3 focus:outline-none focus:ring-0 border border-transparent rounded-none focus:border-blue-500 focus:border-2"
            placeholder="Search..."
          />
          <div className="w-10 h-10 flex items-center justify-center bg-gray-700 border-l border-gray-600">
            <Link href={"/search"}>
              <SearchIcon className="text-gray-300 hover:text-white" />
            </Link>
          </div>
        </div>
        <Link href={"/all"} className="text-xl hover:text-gray-300 ml-4 mr-4">
          All snippets
        </Link>
        <Link href={"/your-snippets"} className="text-xl hover:text-gray-300 ml-4">
          Your snippets
        </Link>
      </div>
      <div className="flex flex-row items-center mr-4">
        <div className="flex flex-row items-center space-x-2">
          {!isSignedIn && (
            <div className="flex flex-row">
              {/* <div className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md mr-4 w-24 text-center"> */}
              <div className="px-4 py-2 rounded-md border mr-4 border-black bg-gray-700 hover:bg-gray-600 text-white font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-duration-200">
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              </div>
              {/* <div className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md w-24 text-center"> */}
              <div className="px-4 py-2 rounded-md border border-black bg-gray-700 hover:bg-gray-600 text-white font-bold text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition-duration-200">
                <SignedOut>
                  <SignUpButton />
                </SignedOut>
              </div>
            </div>
          )}
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={"/"}>
                <Plus className="cursor-pointer mr-2" />
              </Link>
            </TooltipTrigger>
            <TooltipContent> Create a new Snippet </TooltipContent>
          </Tooltip>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
