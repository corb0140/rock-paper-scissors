"use client";

import Image from "next/image";
import rock from "@/public/images/icon-rock.svg";
import paper from "@/public/images/icon-paper.svg";
import scissors from "@/public/images/icon-scissors.svg";

import RulesModal from "@/app/UI/RulesModal";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
// import { useSelector, useDispatch } from "react-redux";
// import { setPick } from "@/app/redux/slices/gameSlice";

export default function Game({ playerPick }) {
  const [showModal, setShowModal] = useState(false);
  //   const dispatch = useDispatch();
  //   const pick = useSelector((state) => state.game.pick);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-5 h-[600px] w-full flex flex-col items-center justify-around">
      <div className="w-full h-auto p-2 flex justify-between">
        {/* PLAYER */}
        <div className="flex flex-col items-center gap-y-5">
          <div
            className={`bg-white rounded-full h-[120px] w-[120px] flex items-center justify-center border-[12px] 
            border-${
              playerPick === "rock"
                ? "rockColor"
                : playerPick === "paper"
                ? "paperColor"
                : "scissorsColor"
            } 
            shadow-[inset_0px_5px_1px_rgba(0,0,0,.1),0px_6px_0px_${
              playerPick === "rock"
                ? "hsl(349,71%,52%)"
                : playerPick === "paper"
                ? "hsl(230,89%,62%)"
                : "hsl(39,89%,49%)"
            }]`}
          >
            <Image
              src={
                playerPick === "rock"
                  ? rock
                  : playerPick === "paper"
                  ? paper
                  : scissors
              }
              alt="image of triangle"
              width={0}
              height={0}
              className="h-[50%] w-[50%]"
            />
          </div>

          <p className="uppercase text-white font-semibold">You Picked</p>
        </div>

        {/* COMPUTER */}
        <div className="flex flex-col items-center gap-y-5">
          <div
            className={`bg-white border-[12px] border-paperColor rounded-full h-[120px] w-[120px] flex items-center justify-center
          shadow-[inset_0px_5px_1px_rgba(0,0,0,.1),0px_6px_0px_hsl(230,89%,62%)]`}
          >
            <Image
              src={paper}
              alt="image of triangle"
              width={0}
              height={0}
              className="h-[50%] w-[50%]"
            />
          </div>

          <p className="uppercase text-white font-semibold">The House Picked</p>
        </div>
      </div>

      {/* BUTTON & MODAL */}
      <button
        className="border-2 border-darkText rounded-lg py-2 px-10 text-white uppercase tracking-wider font-semibold"
        onClick={toggleModal}
      >
        Rules
      </button>

      <AnimatePresence>
        {showModal && <RulesModal click={toggleModal} />}
      </AnimatePresence>
    </div>
  );
}
