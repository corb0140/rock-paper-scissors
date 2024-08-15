import Image from "next/image";
import imageRules from "@/public/images/image-rules.svg";
import close from "@/public/images/icon-close.svg";
import { motion } from "framer-motion";

export default function RulesModal({ click }) {
  const variants = {
    hidden: { y: "100vh" },
    visible: { y: 0, transition: { duration: 0.5 } },
    exit: { y: "100vh", transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col items-center justify-around gap-y-10 p-10 h-screen w-full bg-white fixed top-0 left-0 z-10 "
    >
      <h1 className="text-darkText text-3xl font-bold uppercase tracking-wide">
        Rules
      </h1>

      <Image src={imageRules} alt="Rules" width={0} height={0} />

      <Image
        src={close}
        alt="Close"
        width={0}
        height={0}
        className="hover:cursor-pointer"
        onClick={click}
      />
    </motion.div>
  );
}
