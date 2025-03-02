import AllSnippets from "@/components/AllSnippets";
import TabsView from "@/components/TabsView";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <div className="mt-24">
        <AllSnippets />
      </div>
      <div>
        <TabsView />
      </div>
    </div>
  );
};

export default page;
