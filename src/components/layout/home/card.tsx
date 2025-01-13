

const Card = ({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img?: string;
}) => {

  return (
    <div className="bg-white rounded-xl p-4 flex flex-col justify-evenly items-center h-full  lg:max-w-[355px] min-h-[150px] ">
      {img && (
        <div className="text-white bg-blueCustom1 p-4 rounded-full">
          {img}
        </div>
      )}
      <div>
        <h3 className="text-blueCustom2 text-lg font-black">{title}</h3>
        <p className="text-descText text-base">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
