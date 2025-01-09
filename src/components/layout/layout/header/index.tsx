"use client";

import { useTranslation } from "@/translations/clients";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { ModalRef } from "@/components/shared/modal.component";
// import { LoginForm } from '@/components/login/login-form.component';
import UserInformation from "./user-information";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { DrawerRef } from "@/components/shared/drawer.component";
import { Button } from "@/components/shared/button.component";
import { MobileMenuDrawer } from "./mobile-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import {  IoIosArrowDown, IoIosArrowUp } from "@/icon";

export const Header = () => {
  const { t,lang } = useTranslation();
  const pathname = usePathname();

  const homeVersion = useMemo(() => pathname.endsWith(`/${lang}`), [pathname]);

  const modalRef = useRef<ModalRef>(null);
  const drawerRef = useRef<DrawerRef>(null);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const links=useMemo(()=>{
    return  [
      {
        id: 1,
        text: t("aboutThePlatform"),
        to: "test/1",
      },
      {
        id: 2,
        text: t('intellectualPropertyMarket'),
        dropdownItems: [
          {
            id: 1,
            text: t('tradingPlatform'),
            to: "/",
          },
          // {
          //   id: 3,
          //   text: "سوق الاستخدام العام",
          //   to: "/general-use-market",
          // },
          // {
          //   id: 2,
          //   text: "الفرص الابتكارية",
          //   to: "/challenges",
          // },
        ],
      },
      // {
      //   id: 3,
      //   text: " سوق مقدمي الخدمات",
      //   dropdownItems: [
      //     {
      //       id: 1,
      //       text: " سجل مقدمي الخدمات",
      //       to: "/provider-services/list",
      //     },
      //     {
      //       id: 2,
      //       text: "تقدم خدمة ",
      //       to: "/provider-services/provide-service",
      //     },
      //   ],
      // },
      // {
      //   id: 4,
      //   text: " الأخبار و الفعاليات",
      //   to: "test/1",
      // },
    ];
  },[])

  return (
    <>
      <header>
        <div
          className={clsx(
            "flex w-full flex-row items-center justify-between text-sm font-bold"
          )}
        >
          <div className="flex items-center justify-between">
            <button
              className="block py-2 sm:hidden"
              onClick={() => {
                drawerRef.current?.open();
              }}
            >
              <RxHamburgerMenu />
            </button>
            {/* logo */}
          </div>

          <div
            className={clsx(" invisible flex items-center gap-x-4 sm:visible")}
          >
            <div className="invisible flex flex-row  sm:visible">
              {links.map((link, index) => (
                <div
                  key={link.id}
                  className="flex flex-row items-center font-sans "
                >
                  {link.dropdownItems?.length ? (
                    <Menu>
                      <MenuHandler>
                        <div className="flex  cursor-pointer items-center gap-2 ">
                          <div
                            className={clsx(
                              "relative text-sm font-bold text-[#595959] hover:after:absolute hover:after:bottom-[-3px] hover:after:block hover:after:h-px hover:after:w-full hover:after:bg-primary"
                            )}
                          >
                            <div className="flex items-center justify-around">
                              <p>{link.text}</p>
                              <IoIosArrowDown
                                className={clsx("mr-2 fill-blue-gray-500")}
                              />
                            </div>
                          </div>
                        </div>
                      </MenuHandler>
                      <MenuList className="p-0">
                        {link.dropdownItems.map((item) => (
                          <Link
                            href={item.to}
                            key={item.id}
                            className="text-sm font-normal text-[#595959]"
                          >
                            <MenuItem className="p-4">{item.text}</MenuItem>
                          </Link>
                        ))}
                      </MenuList>
                    </Menu>
                  ) : (
                    <Link
                      href={link.to as string}
                      className={clsx(
                        "relative text-sm font-bold text-[#595959] hover:after:absolute hover:after:bottom-[-3px] hover:after:block hover:after:h-px hover:after:w-full hover:after:bg-primary"
                      )}
                    >
                      {link.text}
                    </Link>
                  )}
                  {index !== links.length - 1 && (
                    <div
                      className={clsx(
                        "mx-3 h-full w-[1px] bg-[#595959]  opacity-30"
                      )}
                    />
                  )}
                </div>
              ))}
              <div />
            </div>

            <UserInformation modalRef={modalRef} isHomeVersion={homeVersion} />
          </div>
        </div>

        {/* <Modal ref={modalRef} size='xxl'>
          <LoginForm modalRef={modalRef} />
        </Modal> */}
      </header>

      <MobileMenuDrawer
        modalRef={modalRef}
        width={320}
        placement="right"
        ref={drawerRef}
        Footer={
          <Button
            onClick={() => {
              drawerRef.current?.close();
            }}
            text="Accessibility Icons"
          />
        }
      >
        <div className="ms-8 bg-secondary2 text-white">
          <nav className="mt-4">
            <ul className="list-disc">
              {links.map((link) => (
                <div key={link.id}>
                  <li>
                    {link.dropdownItems ? (
                      <div>
                        <div
                          className="mb-2 flex cursor-pointer items-center gap-4"
                          onClick={() =>
                            setOpenDropdownId(
                              link.id === openDropdownId ? null : link.id
                            )
                          }
                        >
                          <p>{link.text}</p>
                          {openDropdownId === link.id ? (
                            <IoIosArrowUp className={clsx("fill-white")} />
                          ) : (
                            <IoIosArrowDown className={clsx("fill-white")} />
                          )}
                        </div>
                        {openDropdownId === link.id && (
                          <ul className="list-disc">
                            {link.dropdownItems.map((item) => (
                              <li key={item.id}>
                                <Link
                                  onClick={() => drawerRef.current?.close()}
                                  href={item.to}
                                >
                                  {item.text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        onClick={() => drawerRef.current?.close()}
                        href={link.to}
                      >
                        {link.text}
                      </Link>
                    )}
                  </li>
                  <div className="my-3 ms-[-17px] flex h-[1px] flex-1 bg-divider" />
                </div>
              ))}
            </ul>
          </nav>
        </div>
      </MobileMenuDrawer>
    </>
  );
};
