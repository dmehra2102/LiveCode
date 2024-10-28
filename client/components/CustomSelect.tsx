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
  value: string;
  placeholder: string;
  selectLabelText: string;
  onChangeFn: (value: string) => void;
  itemList: { value: string; label: string; defaultCode: string }[];
}

const CustomSelect = ({
  value,
  placeholder,
  selectLabelText,
  itemList,
  onChangeFn,
}: Props) => {
  return (
    <div>
      <Select onValueChange={onChangeFn} value={value}>
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
