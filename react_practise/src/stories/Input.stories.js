import React from "react";
import Input from "../Components/atoms/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
};

export const SearchBarColumn = () => (
  <Input
    className={`bg-transparent block w-full outline-none border-gray-300 sm:text-sm rounded-md focus:border-black focus:ring-black`}
  />
);
