import { motion, useInView, useAnimation, Target } from "framer-motion";
import { useRef, useEffect, ReactNode } from "react";

const ScrollAnimationExample = ({
  children,
  objectStart,
  objectEnd,
}: {
  children: ReactNode;
  objectStart?: Target;
  objectEnd?: Target;
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
      initial={objectStart ? objectStart : { opacity: 0, y: 100 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationExample;
