import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SnippetztextareProps {}

const Snippetztextare: FC<SnippetztextareProps> = ({}) => {
  return (
    <div className="w-3/4 h-screen pt-28">
      <Input className="" placeholder="Snippet description" />
      <br />
      <div className="border-2 border-gray-500 rounded-md">
        <div className="flex flex-row justify-between items-center">
          <div className="pl-2 w-[300px]">
            <Input
              className="rounded-none"
              placeholder="Filename including extension..."
            />
          </div>
          <div className="flex flex-row">
            <div className="p-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Indent mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="spaces">Spaces</SelectItem>
                  <SelectItem value="indent">Indent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Indent size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Line Wrap mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="no-wrap">No wrap</SelectItem>
                  <SelectItem value="soft-wrap">Soft wrap</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <Input className="h-96 rounded-none" />
      </div>
      <div className="flex flex-row justify-between items-center m-4">
        <Button className="w-40">Add file</Button>
        {/* TODO: Make two options private and public snippets */}
        <Button className="w-40">Create a snippet</Button>
      </div>
    </div>
  );
};

export default Snippetztextare;
