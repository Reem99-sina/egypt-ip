import FooterLogin from "@/components/login/footerLogin";
import { ReactNode } from "react";
import { FaWindowClose } from "@/icon";
import Link from "next/link";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex  w-full">
      <div className="flex-1 flex flex-col justify-between bg-bgColor1">
        <div className="flex  p-9">
          <Link href={"/"}>
            <FaWindowClose
              color="blueCustom1"
              className="rounded w-[30px] h-[30px] text-blueCustom1"
            />
          </Link>
        </div>
        <div className="flex flex-1 flex-col items-center  justify-center">
          <div>{children}</div>
        </div>
        <div>
          <FooterLogin />
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-t from-[#54b5a6] to-blueCustom1 min-h-screen"></div>
    </div>
  );
};

export default Layout;
