import AboutSection from "@/components/layout/home/aboutSection";
import BenefitsSection from "@/components/layout/home/benefitsSection";
import Faq from "@/components/layout/home/faq";
import HomeSection from "@/components/layout/home/homeSection";
import HowToParticipate from "@/components/layout/home/howToParticipate";
import Partner from "@/components/layout/home/partner";
import WhoisSection from "@/components/layout/home/whoisSection";

export default function Home() {
  return (
    <div className="bg-bodyColor">
      <HomeSection />
      <Partner />
      <AboutSection />
      <BenefitsSection />
      <WhoisSection />
      <HowToParticipate />
      <Faq />
    </div>
  );
}
