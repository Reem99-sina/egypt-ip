import clsx from "clsx";

const HeaderSection = ({
  title,
  light,
}: {
  title: string;
  light?: boolean;
}) => {
  return (
    <div
      className={clsx(
        " font-Inter text-[14px] lg:text-[18px] my-10 font-bold",
        light ? "text-gradient-light" : "text-gradient"
      )}
    >
      <div className="flex justify-center my-2">
        <span
          className={clsx(
            "w-16 h-[1.6px]  bg-gradient-to-r  to-blueCustom1",
            light ? "from-blueCustom2" : "from-black"
          )}
        ></span>
      </div>
      <p className="text-[18px] lg:text-[24px]">{title}</p>
    </div>
  );
};

export default HeaderSection;
