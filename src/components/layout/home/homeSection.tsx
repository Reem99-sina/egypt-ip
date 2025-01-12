"use client";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import { Button } from "@/components/shared/button.component";
import { useTranslation } from "@/translations/clients";

const HomeSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="bg-bodyColor container  max-w-full" >
      <ScrollAnimationExample objectStart={{ x: 0 }} objectEnd={{ x: 80 }}>
        <div className=" min-h-[90vh]  overflow-x-hidden flex flex-col justify-center ">
          <h3 className="text-[34px] leading-[47px] lg:leading-[60px]   lg:text-[54px] w-[50%] sm:w-full">
            {t("header")}
          </h3>
          <p className="text-lg mt-10">{t("desc")}</p>
          <div className="mt-5">
            <Button
              text={t("apply")}
              className=" !w-auto !bg-blueCustom1 !px-10 !py-4 !text-base"
            />
          </div>
        </div>
      </ScrollAnimationExample>
    </section>
  );
};

export default HomeSection;
