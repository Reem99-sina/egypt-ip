"use client";

import { ModalRef } from "@/components/shared/modal.component";
import { RefObject, useRef } from "react";
import { useUser } from "@/hooks/useUser";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Link from "next/link";
import { useAuth } from "@/hooks/auth.hook";
import { useTranslation } from "@/translations/clients";
import { Spinner } from "@/components/shared/spinner.component";
import clsx from "clsx";
import { Button } from "@/components/shared/button.component";
import {
  FaUser,
  MdEdit,
  IoIosArrowDown,
  TbSquareCheck,
  IoIosLogIn,
  MdOutlineLanguage,
} from "@/icon";
import { useRouter } from "next/navigation";

interface Props {
  modalRef?: RefObject<ModalRef | null>;
  isHomeVersion?: boolean;
  isMobileVersion?: boolean;
}

const UserInformation: React.FunctionComponent<Props> = ({
  // isHomeVersion,
  isMobileVersion,
}) => {
  // const [stepIndex, setStepIndex] = useState(1);
  // const [type, setType] = useState('');
  // const [stepTwotype, setStepTwoType] = useState('');
  const router = useRouter();
  const { user, isLoadingUser } = useUser();
  const { logout } = useAuth();
  const { changeLanguage, lang, t } = useTranslation();
  const refModal = useRef<ModalRef>(null);
  if (isLoadingUser) {
    return <Spinner />;
  }

  return (
    <>
      {user ? (
        <div className="flex items-center">
          <Menu lockScroll>
            <MenuHandler>
              <div className="flex  cursor-pointer items-center gap-2">
                <div className="flex items-center">
                  <FaUser color={isMobileVersion ? "white" : "#7B8494"} />
                  <p
                    className={clsx(
                      `ml-4 mr-4 cursor-pointer text-sm font-bold sm:text-base ${
                        isMobileVersion ? "text-white" : "text-[#595959]"
                      }`
                    )}
                  >
                    {user?.username}
                  </p>
                  <p
                    className={clsx(
                      ` cursor-pointer text-xs font-bold sm:text-xs ${
                        isMobileVersion ? "text-white" : "text-blueCustom1"
                      }`
                    )}
                  >
                    {user?.userType}
                  </p>
                </div>
                <IoIosArrowDown
                  className={clsx(
                    `${isMobileVersion ? "fill-white" : "text-blueCustom1"}`
                  )}
                />
              </div>
            </MenuHandler>
            <MenuList className="w-56 bg-[#F4F6F9] p-0 shadow-none">
              <Link href="/account/profile">
                <MenuItem className="rounded-none">
                  <div className="relative flex flex-col items-center ">
                    <FaUser />
                    <p
                      className={`mt-4 text-sm font-bold ${
                        isMobileVersion ? "text-white" : "text-blueCustom1"
                      }`}
                    >
                      {user.username}
                    </p>
                    <p className="text-xs font-bold text-blueCustom1">
                      {user.email}
                    </p>
                  </div>
                  <div className="absolute left-[70px] top-11 ">
                    <MdEdit />
                  </div>
                </MenuItem>
              </Link>

              <MenuItem className="rounded-none bg-white">
                <div className="relative flex items-center justify-between ">
                  <div>
                    <FaUser />
                  </div>

                  <div className="flex flex-col">
                    <p
                      className={`text-sm font-bold ${
                        isMobileVersion ? "text-white" : "text-blueCustom1"
                      }`}
                    >
                      {user.username}
                    </p>
                    <p className="text-xs font-normal text-blueCustom1">
                      {user.userType === "admin" ? "حساب شخصي" : user.userType}
                    </p>
                  </div>
                  <div>
                    <TbSquareCheck />
                  </div>
                </div>
              </MenuItem>

              <div
                className="cursor-pointer font-bold"
                onClick={() => refModal?.current?.open()}
              >
                <MenuItem className="my-2 flex flex-row rounded-none    text-[#7B8494]">
                  حساب تعريفي جديد
                </MenuItem>
              </div>

              <Link href="/" onClick={() => logout()} className="font-bold">
                <MenuItem className="mt-[15px] flex flex-row rounded-none bg-[#7B8494] text-white">
                  <IoIosLogIn className="ml-1" />
                  {t("logout")}
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <div className="ml-4 " />

          <p className="ml-2 mr-2 text-[#7B8494] ">|</p>

          <Menu>
            <MenuHandler>
              <div className="flex  cursor-pointer items-center gap-2 rounded-none">
                <MdOutlineLanguage
                  color={`${isMobileVersion ? "white" : "#00A4B4"}`}
                />
              </div>
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center ">
                {/* <KsaFlag className={clsx(lang === 'ar' ? 'ml-1' : 'mr-1')} /> */}
                <div onClick={() => changeLanguage("ar")}>
                  {lang === "ar" ? (
                    <p className="text-sm font-[700px] text-[#7B8494]">
                      اللغة العربية
                    </p>
                  ) : (
                    <p>Arabic</p>
                  )}
                </div>
              </MenuItem>
              <MenuItem className="flex items-center ">
                {/* <UsaFlag className={clsx(lang === 'ar' ? 'ml-1' : 'mr-1')} /> */}
                <div onClick={() => changeLanguage("en")}>
                  {lang === "ar" ? <p>اللغة الانحليزية</p> : <p>English</p>}
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <div className="ml-4 " />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              router.push("/login");
            }}
            text={t("login")}
            className="relative ms-6 flex  h-10 w-32 flex-row !bg-blueCustom1 px-4 py-1 text-sm"
          />
          <div className="flex items-center justify-between ">
            <p
              className={clsx(
                lang == "en" ? "font-black text-base underline" : ""
              )}
              onClick={() => changeLanguage("en")}
            >
              {t("en")}
            </p>

            <p className="ml-2 mr-2 text-[#7B8494] ">|</p>
            <p
              className={clsx(
                lang == "ar" ? "font-black text-base underline" : ""
              )}
              onClick={() => changeLanguage("ar")}
            >
              {t("ar")}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default UserInformation;
