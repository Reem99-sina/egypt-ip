import { motion, useInView, useAnimation, Target } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

const ScrollAnimationExample = ({
  children,
  objectStart,
  objectEnd,
  delay
}: {
  children: ReactNode;
  objectStart?: Target;
  objectEnd?: Target;
  delay?:number
}) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start(objectEnd ? objectEnd : { opacity: 1, y: 0 });
    } else {
      controls.start(objectStart ? objectStart : { opacity: 0, y: 100 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      transition={{duration:0.5,delay:delay}}
      initial={objectStart ? objectStart : { opacity: 0, y: 100 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationExample;
