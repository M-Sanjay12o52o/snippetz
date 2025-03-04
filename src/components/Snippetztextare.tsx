"use client";

import { FC, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SnippetEditor from "./SnippetEditor";
import { useAuth } from "@clerk/nextjs";

interface SnippetztextareProps { }

const Snippetztextare: FC<SnippetztextareProps> = ({ }) => {
  const { isSignedIn, userId, getToken } = useAuth()
  const [snippet, setSnippet] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [userid, setuserid] = useState<number | null>(null);

  console.log("snippettextarea userid: ", userid);

  useEffect(() => {
    const fetchUserId = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/get-userId?userId=${userId}`);

        if (!response.ok) {
          throw new Error("Failed to fetch userid");
        }

        const data = await response.json();

        setuserid(data.userId);
      } catch (error) {
        console.error("Error fetching userId:", error);
      }
    };

    fetchUserId();
  }, [userId]);

  const sendSnippet = async () => {
    if (!isSignedIn || !userId) {
      console.error("User not signed in.");
      return;
    }

    if (!userid) return;

    try {
      const response = await fetch("/api/post-snippet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: fileName,
          description,
          code: snippet,
          userid,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send snippet");
      }

      console.log("Snippet sent successfully!");
    } catch (error) {
      console.error("Error sending snippet: ", error);
    }
  };


  const handleFileName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.value);
  }

  const handleDescripton = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  return (
    <div className="w-3/4 h-screen pt-8 bg-gray-900 text-white">
      {/* Snippet description input */}
      <Input
        value={description}
        onChange={(e) => handleDescripton(e)}
        className="bg-gray-800 text-white border-gray-700 placeholder-gray-400 focus:border-0"
        placeholder="Snippet description"
      />
      <br />

      {/* Code input container */}
      <div className="border-2 border-gray-700 rounded-md bg-gray-800">
        <div className="flex flex-row justify-between items-center p-2">
          {/* Filename input */}
          <div className="pl-2 w-[300px]">
            <Input
              className="rounded-md bg-gray-700 text-white placeholder-gray-400 border-gray-600
              focus:border-0"
              value={fileName}
              onChange={(e) => handleFileName(e)}
              placeholder="Filename including extension..."
            />
          </div>

          {/* Code settings dropdowns */}
          <div className="flex flex-row">
            <div className="p-2">
              <Select>
                <SelectTrigger className="w-[180px] bg-gray-700 text-white border-gray-600">
                  <SelectValue placeholder="Indent mode" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  <SelectItem
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                    value="spaces"
                  >
                    Spaces
                  </SelectItem>
                  <SelectItem
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                    value="indent"
                  >
                    Indent
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="w-[180px] bg-gray-700 text-white border-gray-600">
                  <SelectValue placeholder="Indent size" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  <SelectItem
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                    value="2"
                  >
                    2
                  </SelectItem>
                  <SelectItem
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                    value="4"
                  >
                    4
                  </SelectItem>
                  <SelectItem
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                    value="6"
                  >
                    6
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="w-[180px] bg-gray-700 text-white border-gray-600">
                  <SelectValue placeholder="Line Wrap mode" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 text-white border-gray-700">
                  <SelectItem
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                    value="no-wrap"
                  >
                    No wrap
                  </SelectItem>
                  <SelectItem
                    className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
                    value="soft-wrap"
                  >
                    Soft wrap
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Code editor */}
        <SnippetEditor fileName={fileName} snippet={snippet} setSnippet={setSnippet} />
      </div>

      {/* Action buttons */}
      <div className="flex flex-row justify-between items-center m-4">
        <Button className="w-20 bg-blue-600 hover:bg-blue-700 text-white">
          Add file
        </Button>
        {/* TODO: Make two options private and public snippets */}
        <Button onClick={() => sendSnippet()} className="w-40 bg-green-600 hover:bg-green-700 text-white">
          Create a snippet
        </Button>
      </div>
    </div>
  );
};

export default Snippetztextare;
