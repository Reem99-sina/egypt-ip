// import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/icon";
import { useTranslation } from "@/translations/clients";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "@/icon";

export const FooterCopyright = () => {
  const { lang, t } = useTranslation();
  const social = [
    {
      title: "SUPPORT",
      linkTo: "#",
      child: [
        {
          title: t("emailFooter"),
          linkTo: "#",
        },
        {
          title: t("phoneFooter"),
          linkTo: "#",
        },
      ],
    },
    {
      title: "CONTACT",
      child: [
        {
          title: t("termDesc"),
          linkTo:""
        },
      ],
    },
  ];

  return (
    <footer
      className={clsx(
        " border-t-2 border-footerColor bg-footerColor  shadow w-full p-4",
        
      )}
    >
      <div className=" flex flex-col items-center justify-center container mx-auto">
        <div className="text-start text-white flex  items-center gap-4  w-full">
          {/* <img src="/valoro.png" alt="Logo" className="w-12 h-12 mr-2" /> */}

          <div className="  flex justify-between w-full flex-wrap gap-5 items-center">
            {social.map(({ title, child }) => (
              <div key={title} className="flex  gap-3 items-center">
                <div className="flex  items-start justify-start  text-sm gap-[13px] ">
                  {child.map((ele) =>
                    ele.linkTo ? (
                      <Link
                        key={ele?.title}
                        href={ele.linkTo}
                        className="hover:text-blueCustom2 hover:underline"
                      >
                        {ele?.title}
                      </Link>
                    ) : (
                      <p key={ele?.title} className="hover:text-blueCustom2">
                        {ele?.title}
                      </p>
                    )
                  )}
                </div>
                {title == "SUPPORT" && (
                  <div className="flex items-center gap-4 p-2 cursor-pointer">
                    <FaFacebook className="hover:text-blueCustom2" />
                    <FaInstagram className="hover:text-blueCustom2" />
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-center">
              <Link href={`/${lang}/`}>
                <Image
                  src={
                    lang == "ar"
                      ? "/bokra-gray-arabic.png"
                      : "/bokra-gray-eng.png"
                  }
                  width={100}
                  height={50}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
