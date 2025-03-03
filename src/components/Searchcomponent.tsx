import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

interface SearchcomponentProps {}

const Searchcomponent: FC<SearchcomponentProps> = ({}) => {
  return (
    <div className="pt-44 flex flex-col items-center justify-start h-screen bg-gray-900 text-white min-h-screen">
      <div className="flex flex-row items-center mb-4 mr-6">
        <div className="mr-2">
          <SearchIcon />
        </div>
        <div className="text-2xl">
          Search from more then 1000+ Snippets
          {/* TODO: Update the count */}
        </div>
      </div>
      <div className="flex flex-row">
        <Input className="w-96 rounded-sm mr-4" placeholder="Search Snippets" />
        <Button>Search</Button>
      </div>
    </div>
  );
};

export default Searchcomponent;
