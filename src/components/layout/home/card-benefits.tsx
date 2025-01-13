import clsx from "clsx";
import { ReactNode } from "react";

const CardBenefits = ({
  icon,
  title,
  body,
  className,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  className?: string;
}) => {
  return (
    <div className={clsx("flex flex-col", className)}>
      {icon}
      <h3 className="text-lg font-black mt-4">{title}</h3>
      <p className="text-[15px]">{body}</p>
    </div>
  );
};

export default CardBenefits;
