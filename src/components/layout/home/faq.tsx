"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import HeaderSection from "./headerSection";
import { useState } from "react";
import { propsMissing } from "@/utils/date.util";
import { IoIosArrowUp, IoIosArrowDown } from "@/icon";
import { Button } from "@/components/shared/button.component";
import { useTranslation } from "@/translations/clients";

const Faq = () => {
  const [open, setOpen] = useState("");
  const { t } = useTranslation();
  const handleOpen = (value: string) => setOpen(open === value ? "" : value);
  
  return (
    <section
      className=" container mx-auto bg-bodyColor pb-10 text-left flex flex-col items-center justify-center"
      id="faq"
    >
      <HeaderSection title={"Questions we get asked"} />
      <h3 className="text-back font-black text-[28px] -mt-5">
        Frequently Asked Question
      </h3>
      <div className="flex flex-col my-10 w-full">
        <Accordion
          open={"Why" == open}
          icon={"Why" == open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          {...propsMissing}
        >
          <AccordionHeader
            onClick={() => handleOpen("Why")}
            {...propsMissing}
            className="text-lg font-black text-descText"
          >
            Why might I be interested in the AI Assistive Tools Hackathon?
          </AccordionHeader>
          <AccordionBody className="text-descText2">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            ipsa, eveniet facere eum placeat a,
          </AccordionBody>
        </Accordion>
      </div>
      <div className="flex items-center justify-start w-full">
        <Button
          text={t("termsAndConditions")}
          className="bg-blueCustom1 px-10 py-2 rounded-lg !w-auto"
        />
      </div>
    </section>
  );
};

export default Faq;
