import clsx from "clsx";
import Image from "next/image";

const Card = ({
  title,
  desc,
  img,
  className,
}: {
  title?: string;
  desc?: string;
  img?: string;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "bg-white rounded-xl p-4 flex flex-col justify-stretch gap-4 items-center ",
        className
      )}
    >
      {img && (
        <div className="  p-4 ">
          <Image
            src={img}
            width={100}
            height={100}
            alt={img}
            className="rounded-full"
          />
        </div>
      )}
      <div className="">
        {title && (
          <h3 className="text-blueCustom2 text-base font-black">{title}</h3>
        )}
        {desc && <p className="text-descText text-sm">{desc}</p>}
      </div>
    </div>
  );
};

export default Card;
