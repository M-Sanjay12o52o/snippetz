import Searchcomponent from "@/components/Searchcomponent";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gray-300">
      <Searchcomponent />
    </div>
  );
};

export default page;
