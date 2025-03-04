import AllSnippets from "@/components/AllSnippets";
import TabsView from "@/components/TabsView";
import { FC } from "react";

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="mt-2">
        <AllSnippets />
      </div>
      <div className="bg-gray-900 w-full min-h-screen overflow-auto">
        <TabsView />
      </div>
    </div>
  );
};

export default page;
