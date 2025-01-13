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
    { title: t("socialWelfare") },
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
    { title: t("EgyptDigitalJustice"), desc: t("EgyptDigitalJusticeDesc") },
    { title: t("Facilities"), desc: t("FacilitiesDesc") },
    {
      title: t("EducationAndUniversities"),
      desc: t("EducationAndUniversitiesDesc"),
    },
    { title: t("socialProtection"), desc: t("socialProtectionDesc") },
    { title: t("Properties"), desc: t("PropertiesDesc") },
    { title: t("civilServices"), desc: t("civilServices") },
    {
      title: t("companiesAndEstablishments"),
      desc: t("companiesAndEstablishmentsDesc"),
    },
    { title: t("travelAndRelocation"), desc: t("travelAndRelocationDesc") },
  ];
};
export const AboutData = () => {
  const {t}=useTranslation()
  
  return [
    { title: t("accountOpen"), desc: t("subscribeAccount") },
    {  title: t("searchAllServices"), desc:t("searchAllServicesDes") },
  ];
};
