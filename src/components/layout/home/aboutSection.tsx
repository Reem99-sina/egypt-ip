"use client";
import ScrollAnimationExample from "@/components/shared/animation-conponent";
import Card from "./card";
import HeaderSection from "./headerSection";

export const arrayAbout = [
  {
    img: "",
    title: "Lorem",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deserunt officia ex enim consequatur incidunt quaerat",
  },
  {
    img: "",
    title: "Lorem",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deserunt officia ex enim consequatur incidunt quaerat",
  },
  {
    img: "",
    title: "Lorem",
    desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum deserunt officia ex enim consequatur incidunt quaerat",
  },
];

const AboutSection = () => {
  return (
    <section
      className="text-center container mx-auto bg-bodyColor pb-5"
      id="about"
    >
      <HeaderSection title={"About"} />
      <p className="head-gradient font-black text-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
        deserunt officia ex enim consequatur incidunt quaerat
      </p>
      <div className="my-8 flex gap-6 items-center">
        {arrayAbout.map((ele, index) => (
          <ScrollAnimationExample
            objectStart={{
              transitionDelay: `${1 + index}s`,
              visibility: "hidden",
            }}
            objectEnd={{
              transitionDelay: `${1 + index}s`,
              visibility: "visible",
            }}
            key={index}
          >
            <Card {...ele} />
          </ScrollAnimationExample>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
