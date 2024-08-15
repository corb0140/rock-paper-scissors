"use client";

import Image from "next/image";
import bgTriangle from "@/public/images/bg-triangle.svg";
import rock from "@/public/images/icon-rock.svg";
import paper from "@/public/images/icon-paper.svg";
import scissors from "@/public/images/icon-scissors.svg";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import RulesModal from "@/app/UI/RulesModal";
import { useRouter } from "next/navigation";
import { resetScore } from "@/app/redux/slices/gameSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const resetScoreHandler = () => {
    dispatch(resetScore());
    router.push("/");
  };

  const goToGame = (pick) => {
    router.push(`/pages/${pick}`);
  };

  return (
    <main className="relative h-[600px] lg:h-[500px] w-full flex flex-col items-center justify-around px-10 lg:px-[30rem]">
      <div className="h-[250px] lg:h-[350px] w-full flex items-center justify-center relative mt-10">
        {/* PAPER SCISSORS */}
        <div className="flex justify-between w-full absolute top-0 left-0 z-10">
          <div
            className="lg:absolute lg:-right-5 lg:-top-10 bg-white border-[12px] lg:border-[15px] border-paperColor rounded-full 
            h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] 
            flex items-center justify-center shadow-[inset_0px_5px_1px_rgba(0,0,0,.1),0px_6px_0px_hsl(230,89%,62%)]"
            onClick={() => goToGame("paper")}
          >
            <Image
              src={paper}
              alt="icon of hand for paper pick"
              width={0}
              height={0}
              className="h-[50%] w-[50%]"
            />
          </div>

          <div
            className="lg:absolute lg:-left-5 lg:-top-10 bg-white border-[12px] lg:border-[15px] border-scissorsColor rounded-full 
            h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] 
            flex items-center justify-center shadow-[inset_0px_5px_1px_rgba(0,0,0,.1),0px_6px_0px_hsl(39,89%,49%)]"
            onClick={() => goToGame("scissors")}
          >
            <Image
              src={scissors}
              alt="icon of hand for scissors pick"
              width={0}
              height={0}
              className="h-[50%] w-[50%]"
            />
          </div>
        </div>

        {/* TRIANGLE */}
        <Image
          src={bgTriangle}
          alt="image of triangle"
          width={0}
          height={0}
          className="h-[65%] w-[65%] lg:h-[100%] lg:w-[100%]"
        />

        {/* ROCK */}
        <div className="absolute bottom-0 w-full flex items-center justify-center">
          <div
            className="bg-white border-[12px] lg:border-[15px] border-rockColor rounded-full 
            h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] 
            flex items-center justify-center shadow-[inset_0px_5px_1px_rgba(0,0,0,.1),0px_6px_0px_hsl(349,71%,52%)]"
            onClick={() => goToGame("rock")}
          >
            <Image
              src={rock}
              alt="icon of hand for rock pick"
              width={0}
              height={0}
              className="h-[50%] w-[50%]"
            />
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-col gap-y-2 lg:absolute lg:bottom-10 lg:right-10">
        <button
          className="border-2 border-darkText rounded-lg py-2 px-10 text-white uppercase tracking-wider font-semibold"
          onClick={toggleModal}
        >
          Rules
        </button>

        <button
          className="border-2 border-darkText rounded-lg py-2 px-10 text-white uppercase tracking-wider font-semibold"
          onClick={resetScoreHandler}
        >
          Reset Score
        </button>
      </div>

      <AnimatePresence>
        {showModal && <RulesModal click={toggleModal} />}
      </AnimatePresence>
    </main>
  );
}
