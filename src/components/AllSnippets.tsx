import { Code2 } from "lucide-react";
import { FC } from "react";
import Selecttype from "./Selecttype";

interface AllSnippetsProps { }

const AllSnippets: FC<AllSnippetsProps> = ({ }) => {
  return (
    <div className="flex flex-row items-center justify-between pt-4 bg-gray-900 text-white">
      <div className="flex flex-row items-center p-4 ml-2">
        <div className="border-white border-2 w-8 h-8 flex items-center justify-center mr-2">
          <Code2 className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl">Discover snippets</h1>
        </div>
      </div>
      <div className="mr-4">
        <Selecttype />
      </div>
    </div>
  );
};

export default AllSnippets;
