"use client";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import { Button } from "@/components/shared/button.component";
import { useTranslation } from "@/translations/clients";

const HomeSection = () => {
  const { t, lang } = useTranslation();

  return (
    <section className=" bg-[url('/main-bg.jpeg')] bg-no-repeat bg-cover bg-center relative z-0 min-h-screen">
      <div className="absolute top-0 left-0 bg-[#00000029] w-full h-full z-1"></div>
      <div className="container mx-auto z-2 relative">
        <ScrollAnimationExample
          objectStart={{ x: lang == "en" ? -80 : "100%" }}
          objectEnd={{ x: lang == "en" ? 0 : 0 }}
        >
          <div className=" min-h-screen  overflow-x-hidden flex flex-col justify-center max-w-full sm:max-w-[50%]">
            <h3 className="text-[34px] leading-[47px] lg:leading-[60px]  lg:text-[54px] text-white">
              {t("header")}
            </h3>
            <p className="text-lg mt-10 text-white">{t("desc")}</p>
            <div className="mt-5">
              <Button
                text={t("apply")}
                className=" !w-auto !bg-greenCustom !px-10 !py-4 !text-base"
              />
            </div>
          </div>
        </ScrollAnimationExample>
      </div>
    </section>
  );
};

export default HomeSection;
