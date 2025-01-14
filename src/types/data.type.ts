import { ReactNode } from "react";

interface linksProps {
  id: number;
  text: string;
  to: string;
  onClick?: () => void;
  icon?: ReactNode;
}
export interface linksdropdownProps {
  id: number;
  text?: string;
  to?: string;
  dropdownItems?: linksProps[];
}
