import AboutSection from "@/components/layout/home/aboutSection";
import HomeSection from "@/components/layout/home/homeSection";
import Partner from "@/components/layout/home/partner";

export default function Home() {
  return (
    <div className="bg-bodyColor">

      <HomeSection />
      <Partner/>
      <AboutSection/>
    </div>
  );
}
