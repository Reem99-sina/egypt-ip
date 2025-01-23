import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { SlArrowUp, SlArrowDown } from "@/icon";

const FilterCustom = ({
  children,
  title,
  styleHeader
}: {
  children: React.ReactNode;
  title: string;
  styleHeader?:string
}) => {
  const [open, setOpen] = React.useState("");

  const handleOpen = (value: string) => setOpen(open === value ? "" : value);

  return (
    <Accordion
      open={open === title}
      icon={open === title ? <SlArrowUp /> : <SlArrowDown />}
    >
      <AccordionHeader onClick={() => handleOpen(title)} className={styleHeader}>
        {title}
      </AccordionHeader>
      <AccordionBody>{children}</AccordionBody>
    </Accordion>
  );
};

export default FilterCustom;
