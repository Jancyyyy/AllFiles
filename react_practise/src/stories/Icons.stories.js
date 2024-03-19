import React from "react";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Icons from "../Components/atoms/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Atoms/Icons",
  component: Icons,
  tags: ["autodocs"],
};

export const SearchIcon = () => (
  <FontAwesomeIcon icon={faMagnifyingGlass} className={`w-4 h-4 text-gray-500`} />
);
export const UserIcon = () => <FontAwesomeIcon icon={faUser} className={`w-5 h-5`} />;
export const CartIcon = () => <FontAwesomeIcon icon={faCartShopping} className={`w-5 h-5`}/>;
