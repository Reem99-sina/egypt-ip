import { useTranslation } from "@/translations/clients";

export const FooterCopyright = () => {
  const { t } = useTranslation();

  return (
    <footer className="  border-t-2 border-footerColor bg-footerColor  shadow w-full">
      <div className="mx-auto flex w-full max-w-screen-xl gap-2 p-4 sm:justify-center md:flex  md:items-center">
        <span className=" text-sm text-white sm:text-center ">
          {" "}
          <p className="cursor-pointer  underline"> {t("termsOfUse")}</p>
        </span>
        <span className=" text-sm text-white sm:text-center"> |</span>
        <span className=" text-sm text-white sm:text-center">
          {" "}
          {/* {t('AllRightsReserved')}© 2024{' '} */}
        </span>
      </div>
    </footer>
  );
};
