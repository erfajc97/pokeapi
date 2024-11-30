"use client";
import { Input } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "@/assets/svg/SearchIcon";

interface InputToSearchProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputToSearch = ({ placeholder, onChange }: InputToSearchProps) => {
  return (
    <Input
      onChange={onChange}
      isClearable
      radius="lg"
      classNames={{
        label: "text-white",
        input: [
          "bg-transparent",
          "text-black/90",
          "placeholder:text-default-700/50",
        ],
      }}
      placeholder={placeholder}
      startContent={
        <SearchIcon className="text-black/50 mb-0.5 text-slate-400" />
      }
    />
  );
};

export default InputToSearch;
