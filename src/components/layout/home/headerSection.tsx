const HeaderSection = ({ title }: { title: string }) => {
  return (
    <div className=" font-Inter text-[14px] lg:text-[18px] my-10 font-medium flex items-center flex-col justify-center text-gradient  ">
      <div className="flex justify-center bg-gradient-to-r from-black to-blueCustom1">
       <span className="w-16 h-[1px]"></span>
      </div>
      <p className="text-[18px] lg:text-[24px]">{title}</p>
    </div>
  );
};

export default HeaderSection;
