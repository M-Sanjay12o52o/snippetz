import { Code, Code2 } from "lucide-react";
import { FC } from "react";
import Selecttype from "./Selecttype";

interface AllSnippetsProps {}

const AllSnippets: FC<AllSnippetsProps> = ({}) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center p-4 ml-2">
        <div className="border-black border-2 w-8 h-8 flex items-center mr-2">
          <Code2 />
        </div>
        <div>
          <h1 className="text-2xl text-black">Discover snippets</h1>
        </div>
      </div>
      <div className="mr-4">
        <Selecttype />
      </div>
    </div>
  );
};

export default AllSnippets;
