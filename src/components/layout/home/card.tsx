import clsx from "clsx";
import Image, { StaticImageData } from "next/image";


const Card = ({
  title,
  desc,
  img,
  className,
}: ({
  title?: string;
  desc?: string;
  img?: StaticImageData|string;
  className?: string;
})) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl p-4 flex flex-col justify-around gap-4 items-center ",
        className
      )}
    >
      {img && (
        <div className=" h-[100px] flex items-center justify-center">
          <Image
            src={img}
            width={100}
            height={100}
            alt={""}
            className="rounded-full"
          />
        </div>
      )}
      <div className=" flex flex-col items-center justify-start min-h-[100px]">
        {title && (
          <h3 className="text-blueCustom2 text-base font-black">{title}</h3>
        )}
        {desc && <p className="text-descText text-sm">{desc}</p>}
      </div>
    </div>
  );
};

export default Card;
