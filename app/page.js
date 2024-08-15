"use client";

import Image from "next/image";
import bgTriangle from "@/public/images/bg-triangle.svg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import RulesModal from "@/app/UI/RulesModal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <main className="h-[600px] w-full flex flex-col items-center justify-around">
      <Image
        src={bgTriangle}
        alt="image of triangle"
        width={0}
        height={0}
        className="h-[200px] w-[200px] mt-10"
      />

      <button
        className="border-2 border-darkText rounded-lg py-2 px-10 text-white uppercase tracking-wider font-semibold"
        onClick={toggleModal}
      >
        Rules
      </button>

      <AnimatePresence>
        {showModal && <RulesModal click={toggleModal} />}
      </AnimatePresence>
    </main>
  );
}
