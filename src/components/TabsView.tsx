import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface TabsViewProps {}

const TabsView: FC<TabsViewProps> = ({}) => {
  return (
    <div className="mx-4">
      <Tabs defaultValue="all" className="w-[400px]">
        <TabsList>
          <TabsTrigger className="w-28" value="all">
            All snippets
          </TabsTrigger>
          <TabsTrigger className="w-28" value="forked">
            Forked
          </TabsTrigger>
          <TabsTrigger className="w-28" value="starred">
            Starred
          </TabsTrigger>
        </TabsList>

        {/* Ensure each tab has a corresponding TabsContent */}
        <TabsContent className="mt-4 pl-4" value="all">
          <p>Here are all the snippets.</p>
        </TabsContent>
        <TabsContent className="mt-4 pl-4" value="forked">
          <p>These are the forked snippets.</p>
        </TabsContent>
        <TabsContent className="mt-4 pl-4" value="starred">
          <p>Your starred snippets appear here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsView;
