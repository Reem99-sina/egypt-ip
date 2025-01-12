import Image from "next/image";

const Card = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) => {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col justify-end items-center min-h-[400px]">
      {img && <Image src={img} width={100} height={100} alt="" />}
      <div>
        <h3 className="head-gradient text-lg font-black">{title}</h3>
        <p className="text-descText text-base">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
