import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  placeholder: string;
  selectLabelText: string;
  itemList: { value: string; label: string; defaultCode: string }[];
}

const CustomSelect = ({ placeholder, selectLabelText, itemList }: Props) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px] border-[2px] border-purple-700">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selectLabelText}</SelectLabel>
            {itemList.map((item, index) => (
              <SelectItem value={item.value} key={`${item.value}-${index}`}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;
