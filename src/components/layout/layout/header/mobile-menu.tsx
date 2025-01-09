import React, { RefObject, forwardRef, useState } from "react";
import clsx from "clsx";
import { Drawer, DrawerRef } from "@/components/shared/drawer.component";
import { Line } from "@/components/shared/line.component";
import Link from "next/link";
import { useTranslation } from "@/translations/clients";
import { useUser } from "@/hooks/useUser";
import { Spinner } from "@/components/shared/spinner.component";
import { useAuth } from "@/hooks/auth.hook";
import { ModalRef } from "@/components/shared/modal.component";
import {
  FaRegBell,
  FaUser,
  CgCloseR,
  IoIosArrowDown,
  MdOutlineLanguage,
  CiSettings,
  IoMdAdd,
  IoIosLogIn
} from "@/icon";

interface Props {
  title?: string;
  children: React.ReactNode;
  placement?: "top" | "right" | "bottom" | "left";
  width?: number;
  Footer?: React.ReactNode;
  submitButtonOptions?: {
    text: string;
    onClick: () => void;
  };
  TopLeftComponent?: React.ReactNode;
  modalRef: RefObject<ModalRef>;
}

export const MobileMenuDrawer = forwardRef<DrawerRef, Props>(
  (
    {
      modalRef,
      children,
      placement = "left",
      width = 300,
      Footer,
      TopLeftComponent,
    },
    ref
  ) => {
    const { logout } = useAuth();

    const { user, isLoadingUser } = useUser();
    const { changeLanguage, lang } = useTranslation();
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const toggleLangMenu = () => {
      setIsLangMenuOpen(!isLangMenuOpen);
    };
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const toggleProfileMenu = () => {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    };
    if (isLoadingUser) {
      return <Spinner />;
    }

    return (
      <Drawer ref={ref} width={width} placement={placement}>
        <div className=" h-screen w-full   bg-secondary2 ">
          <div className="flex justify-between justify-items-start py-4 pe-3 ps-4 ">
            {/* <Link href={`/${lang}/`}>
              <SmallFullWhiteLogoIcon />
              logo
            </Link> */}
            <div className="flex flex-col gap-4">
              {TopLeftComponent ? (
                TopLeftComponent
              ) : (
                <CgCloseR
                  className="mr-4  cursor-pointer "
                  onClick={() => {
                    (
                      ref as React.MutableRefObject<DrawerRef> | null
                    )?.current?.close();
                  }}
                />
              )}
              <div>
                <div>
                  <div className="flex  cursor-pointer items-center gap-2 rounded-none ">
                    <MdOutlineLanguage
                      stroke={"white"}
                      onClick={toggleLangMenu}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isLangMenuOpen && (
            <div className="-mt-[40px] mb-[8px] me-[6px] ms-[150px] flex w-fit flex-col gap-y-2   self-end rounded bg-white p-2">
              <div className="flex items-center ">
                <span onClick={() => changeLanguage("ar")}>
                  {lang === "ar" ? (
                    <p className="text-sm font-[700px] text-[#7B8494]">
                      اللغة العربية
                    </p>
                  ) : (
                    <p>Arabic</p>
                  )}
                </span>
              </div>
              <div className="flex items-center ">
                <span onClick={() => changeLanguage("en")}>
                  {lang === "ar" ? <p>اللغة الانحليزية</p> : <p>English</p>}
                </span>
              </div>
            </div>
          )}
          <Line />

          {user ? (
            <div className="  flex flex-1 flex-col overflow-y-scroll bg-secondary2 scrollbar-hide ">
              <div className="ms-4 flex items-center">
                <div>
                  <div
                    className="mt-6  flex cursor-pointer items-center gap-2"
                    onClick={toggleProfileMenu}
                  >
                    <div className="flex items-center">
                      <span className="ml-4 cursor-pointer">
                        <FaRegBell stroke={"white"} />
                      </span>
                      <FaUser stroke={"white"} />
                      <p
                        className={clsx(
                          "ml-4 mr-4 cursor-pointer text-xs text-white"
                        )}
                      >
                        {user?.username}
                      </p>
                    </div>
                    <IoIosArrowDown className={clsx("fill-white")} />
                  </div>

                  {isProfileMenuOpen && (
                    <div className="mt-4 w-56 rounded bg-[#F4F6F9]  p-4 shadow-none">
                      <Link
                        href="/account/profile"
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className="rounded-none">
                          <div className="relative flex flex-col items-center ">
                            <FaUser />
                            <p className={"mt-4 text-sm font-bold "}>
                              {user?.username}
                            </p>
                            <p>{user?.email}</p>
                          </div>
                        </div>
                      </Link>

                      <div
                        className="rounded-none"
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className="my-2 flex flex-row rounded-none  text-sm  text-[#7B8494]">
                          <CiSettings className="ml-2" />
                          الدعم الفني
                        </div>
                      </div>
                      <Link
                        href="/account/profile"
                        className=" text-xs font-bold text-[#7B8494]"
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className="rounded-none">
                          <div className="my-2 flex flex-row rounded-none  text-sm  text-[#7B8494]">
                            <FaUser className="ml-2" />
                            إعدادات الحساب
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/account/profile"
                        className="font-bold"
                        onClick={() => {
                          (
                            ref as React.MutableRefObject<DrawerRef> | null
                          )?.current?.close();
                        }}
                      >
                        <div className="my-2 flex flex-row rounded-none  text-sm  text-[#7B8494]">
                          <IoMdAdd className="ml-1" />
                          حساب تعريفي جديد
                        </div>
                      </Link>

                      <Link
                        href="/"
                        onClick={() => logout()}
                        className="font-bold"
                      >
                        <div className="mt-[15px] flex flex-row rounded bg-[#7B8494] p-2 text-white">
                          <IoIosLogIn className="ml-1" />
                          تسجيل الخروج
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>{" "}
            </div>
          ) : (
            <div className="mt-6 flex items-center">
              <button
                onClick={() => {
                  modalRef.current?.open();
                }}
                className="relative ms-6 flex  h-10 w-32 flex-row rounded bg-primary px-4 py-1 text-sm"
              >
                <span className=" absolute  top-2 mr-1 flex text-white">
                  تسجيل الدخول
                </span>
              </button>
             
            </div>
          )}
          <div className=" mb-44  ms-8 bg-secondary2 text-white">
            {children}
          </div>

          <Line />

          <div className=":p-6 mx-8  bg-secondary2 py-3">
            {Footer && Footer}
          </div>
        </div>
      </Drawer>
    );
  }
);
