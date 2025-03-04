import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import SnippetsDisplay from "./SnippetsDisplay";
import ForkedSnippetsDisplay from "./ForkedSnippetsDisplay";
import StarredSnippetsDisplay from "./StarredSnippetsDisplay";

interface TabsViewProps { }

const TabsView: FC<TabsViewProps> = ({ }) => {
  return (
    <div className="mx-4 bg-gray-900 text-white p-4 rounded-md">
      <Tabs defaultValue="all" className="w-full h-80 px-72">
        <TabsList className="flex bg-gray-800 text-white border border-gray-600 rounded-lg ml-46">
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
          <SnippetsDisplay />
        </TabsContent>
        <TabsContent className="mt-4 pl-4" value="forked">
          <ForkedSnippetsDisplay />
        </TabsContent>
        <TabsContent className="mt-4 pl-4" value="starred">
          <StarredSnippetsDisplay />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsView;
