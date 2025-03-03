import { FC } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelecttypeProps {}

const Selecttype: FC<SelecttypeProps> = ({}) => {
  return (
    <div className="items-center">
      <Select defaultValue="recently created">
        <SelectTrigger className="w-[180px] bg-gray-700 text-white border-gray-600">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 text-white border-gray-700">
          <SelectItem
            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
            value="recently created"
          >
            Recently created
          </SelectItem>
          <SelectItem
            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
            value="least recently created"
          >
            Least recently created
          </SelectItem>
          <SelectItem
            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
            value="recently updated"
          >
            Recently updated
          </SelectItem>
          <SelectItem
            className="bg-gray-800 hover:bg-gray-700 focus:bg-gray-700"
            value="least recently updated"
          >
            Least recently updated
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Selecttype;
