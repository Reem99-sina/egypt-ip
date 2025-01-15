import { useTranslation } from "@/translations/clients";
// import { RiAddLargeFill } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";
/**
 * Modifies a given date by adding or subtracting years, months, and/or days.
 * @param {Date} date - The original date to be modified.
 * @param {{
 *   addYears?: number;
 *   addMonths?: number;
 *   addDays?: number;
 * }} [options] - An optional object containing customization options.
 * @returns {Date} The modified date.
 */
export const modifyDate = (
  date: Date,
  options?: { addYears?: number; addMonths?: number; addDays?: number }
) => {
  if (options?.addYears) {
    date.setFullYear(date.getFullYear() + options.addYears);
  }

  if (options?.addMonths) {
    date.setMonth(date.getMonth() + options.addMonths);
  }

  if (options?.addDays) {
    date.setDate(date.getDate() + options.addDays);
  }

  return date;
};

export const propsMissing = {
  placeholder: undefined,
  onPointerEnterCapture: undefined,
  onPointerLeaveCapture: undefined,
};
export const PopularService = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("socialWelfare"),
      desc:
        t("activateARation") +
        " - " +
        t("issuingAReplacement") +
        " - " +
        t("transferOne") +
        " - " +
        t("psychologicalSeparation") +
        " - " +
        t("IncludeMyFamily") +
        " - " +
        t("ExchangeInquiry"),
    },
    { title: t("supply") },
    { title: t("myVehicles") },
    { title: t("cheap") },
    { title: t("commercialRegister") },
    { title: t("documentation") },
    { title: t("courts") },
  ];
};
export const Services = () => {
  const { t } = useTranslation();

  return [
    { desc: t("stepOne") },
    { desc: t("stepTwo") },
    {
      desc: t("stepThree"),
    },
    { desc: t("stepFour") },
  ];
};
export const AboutData = () => {
  const { t } = useTranslation();

  return [
    { title: t("accountOpen"), desc: t("subscribeAccount") },
    { title: t("searchAllServices"), desc: t("searchAllServicesDes") },
  ];
};
export const ServiceShow = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("Researchers"),
    },
    {
      title: t("Teams"),
    },
    { title: t("Innovators") },
  ];
};
export const Collaborations = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("AcademicInstitutions"),
      desc: t("AcademicInstitutionsDesc"),
      image: "/aI.png",
    },
    {
      title: t("GovernmentBodies"),
      desc: t("GovernmentBodiesDesc"),
      image: "/goverment.png",
    },
    {
      title: t("IndustryLeaders"),
      desc: t("IndustryLeadersDesc"),
      image: "/iL.avif",
    },
    {
      title: t("InvestorsandVentCap"),
      desc: t("InvestorsandVentCapDesc"),
      image: "/IVC.jpeg",
    },
  ];
};
export const Faqs = () => {
  const { t } = useTranslation();

  return [
    {
      question: t("faq1"),
      answer: t("ans1"),
    },
    {
      question: t("faq2"),
      answer: t("ans2"),
    },
    {
      question: t("faq3"),
      answer: t("ans3"),
    },
    {
      question: t("faq4"),
      answer: t("ans4"),
    },
    {
      question: t("faq5"),
      answer: t("ans5"),
    },
    {
      question: t("faq6"),
      answer: t("ans6"),
    },
    {
      question: t("faq7"),
      answer: t("ans7"),
    },
  ];
};
export const Partners=[
  "/creative.png",
  "/comMinis.png",
  "/logoCairoUni.png",
  "/searchBody.jpg"
]