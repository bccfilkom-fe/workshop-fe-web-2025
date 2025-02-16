import { useState } from "react";

export const useToggleMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return { isOpen, toggleMenu };
};
