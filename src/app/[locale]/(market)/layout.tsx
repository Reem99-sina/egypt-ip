"use client";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer-component";
import { Breadcrumbs } from "@/components/shared/breadcrumbs.component";
import { useTranslation } from "@/translations/clients";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation();
  const tabs = [{ title: t("market"), href: "market", text: t("market") }];
  const pathname = usePathname();
  
  return (
    <div
      className={
        "flex h-auto max-w-screen flex-col overflow-x-hidden min-h-screen scroll-smooth relative"
      }
    >
      <div className="flex-col bg-white min-h-screen flex justify-between">
        <div className="flex w-full flex-col items-center bg-headerColor  text-black">
          <div className="container overflow-hidden py-8 ">
            <Header />
          </div>
        </div>
        <div className="bg-bodyColor">
          <div className="container mx-auto py-8">
            <Breadcrumbs
              data={[
                { text: t("home"), href: "/" },
                {
                  text:
                    tabs.find((tab) => pathname.includes(tab.href))?.title ||
                    "",
                },
              ]}
            />
          </div>
        </div>
        <div className=" w-full flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
