import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface TabsViewProps {}

const TabsView: FC<TabsViewProps> = ({}) => {
  return (
    <div className="mx-4 bg-gray-900 text-white p-4 rounded-md">
      <Tabs defaultValue="all" className="w-[400px]">
        <TabsList className="flex bg-gray-800 text-white border border-gray-600 rounded-lg">
          <TabsTrigger
            className="w-28 py-2 text-white data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            value="all"
          >
            All snippets
          </TabsTrigger>
          <TabsTrigger
            className="w-28 py-2 text-white data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            value="forked"
          >
            Forked
          </TabsTrigger>
          <TabsTrigger
            className="w-28 py-2 text-white data-[state=active]:bg-gray-700 data-[state=active]:text-white"
            value="starred"
          >
            Starred
          </TabsTrigger>
        </TabsList>

        <TabsContent className="mt-4 pl-4" value="all">
          <p className="text-gray-300">Here are all the snippets.</p>
        </TabsContent>
        <TabsContent className="mt-4 pl-4" value="forked">
          <p className="text-gray-300">These are the forked snippets.</p>
        </TabsContent>
        <TabsContent className="mt-4 pl-4" value="starred">
          <p className="text-gray-300">Your starred snippets appear here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsView;
