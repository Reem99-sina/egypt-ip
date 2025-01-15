import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer/footer-component";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "flex h-auto max-w-screen flex-col overflow-x-hidden min-h-screen scroll-smooth relative"
      }
    >
      <div className="flex-col bg-white min-h-screen flex justify-between">
        <div className="flex w-full flex-col items-center bg-transparent absolute top-0 !z-10 text-white">
          <div className="container overflow-hidden py-8 ">
            <Header />
          </div>
        </div>
        <div className=" w-full flex-1">{children}</div>

        <Footer />
      </div>
    </div>
  );
}
