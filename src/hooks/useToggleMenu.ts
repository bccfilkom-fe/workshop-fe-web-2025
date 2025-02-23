import { Dispatch, SetStateAction } from "react";

export const useToggleMenu = (
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
) => {
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return { isOpen, toggleMenu };
};
