import clsx from "clsx";

import { FaInstagram } from "react-icons/fa";

const InstagramIcon = ({ w, h, fill }:{w:string,h:string,fill:string}) => {
  return (
    <svg className={clsx(w, h)}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a3ab9" />
          <stop offset="40%" stopColor="#bc2a8d" />
          <stop offset="80%" stopColor="#fccc63" />
          <stop offset="100%" stopColor="#fbad50" />
        </linearGradient>
      </defs>
      <FaInstagram
        className={clsx("  hover:fill-[url(#gradient)]", w, h, fill)}
      />
    </svg>
  );
};

export default InstagramIcon;
