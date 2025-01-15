"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import HeaderSection from "./headerSection";
import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "@/icon";
import { Button } from "@/components/shared/button.component";
import { useTranslation } from "@/translations/clients";
import { Faqs } from "@/utils/date.util";

const Faq = () => {
  const [open, setOpen] = useState("");
  const { t } = useTranslation();
  const handleOpen = (value: string) => setOpen(open === value ? "" : value);

  return (
    <section
      className=" container mx-auto bg-bodyColor pb-10 text-left flex flex-col items-center justify-center"
      id="faq"
    >
      <HeaderSection title={t("headerFaq")} />
      <h3 className="head-gradient font-black text-[28px] -mt-5">
        {t("descFaq")}
      </h3>
      <div className="flex flex-col my-10 w-full">
        {Faqs().map((ele) => (
          <Accordion
            open={ele.question == open}
            icon={ele.question == open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            key={ele.question}
          >
            <AccordionHeader
              onClick={() => handleOpen(ele.question)}
              className="text-lg font-black text-blueCustom3"
            >
              {ele.question}
            </AccordionHeader>
            <AccordionBody className="text-blueCustom1">
              {ele.answer}
            </AccordionBody>
          </Accordion>
        ))}
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
