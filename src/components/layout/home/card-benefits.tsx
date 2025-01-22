import clsx from "clsx";
import { ReactNode } from "react";

const CardBenefits = ({
  icon,
  title,
  color,
  body,
  className,
}: {
  icon: ReactNode;
  title?: string;
  color?:string;
  body?: string;
  className?: string;
}) => {
  return (
    <div className={clsx("flex flex-col ", className)}>
      {icon}
      {title && <h3 className={clsx("text-lg font-black mt-4",color)}>{title}</h3>}
      {body && <p className="text-[15px]">{body}</p>}
    </div>
  );
};

export default CardBenefits;
