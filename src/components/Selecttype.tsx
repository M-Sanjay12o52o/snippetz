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
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="recently created">Recently created</SelectItem>
          <SelectItem value="least recently created">
            Least recently created
          </SelectItem>
          <SelectItem value="recently updated">Recently updated</SelectItem>
          <SelectItem value="least recently updated">
            Least recently updated
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Selecttype;
