"use client";

import Image from "next/image";
import rock from "@/public/images/icon-rock.svg";
import paper from "@/public/images/icon-paper.svg";
import scissors from "@/public/images/icon-scissors.svg";

import RulesModal from "@/app/UI/RulesModal";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { incrementScore } from "@/app/redux/slices/gameSlice";

export default function Game({ playerPick }) {
  const [showModal, setShowModal] = useState(false);
  const [computerPick, setComputerPick] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const pick = useSelector((state) => state.game.pick);

  useEffect(() => {
    const randomPick = pick[Math.floor(Math.random() * pick.length)];
    setComputerPick(randomPick);
  }, [pick]);

  useEffect(() => {
    if (
      (playerPick === "rock" && computerPick === "scissors") ||
      (playerPick === "paper" && computerPick === "rock") ||
      (playerPick === "scissors" && computerPick === "paper")
    ) {
      dispatch(incrementScore());
    }
  }, [playerPick, computerPick, dispatch]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-5 lg:px-96 h-[600px] lg:h-[550px] w-full flex flex-col items-center justify-around">
      <div className="w-full h-auto p-2 lg:p-5 flex justify-between">
        {/* PLAYER */}
        <div className="flex flex-col items-center gap-y-5">
          <div
            className={`bg-white rounded-full h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] flex items-center justify-center 
            border-[12px] lg:border-[15px]
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
            className={`bg-white rounded-full h-[120px] w-[120px] lg:h-[180px] lg:w-[180px] flex items-center justify-center
            border-[12px] lg:border-[15px]
            border-${
              computerPick === "rock"
                ? "rockColor"
                : computerPick === "paper"
                ? "paperColor"
                : "scissorsColor"
            }  
          shadow-[inset_0px_5px_1px_rgba(0,0,0,.1),0px_6px_0px_${
            computerPick === "rock"
              ? "hsl(349,71%,52%)"
              : computerPick === "paper"
              ? "hsl(230,89%,62%)"
              : "hsl(39,89%,49%)"
          }]`}
          >
            <Image
              src={
                computerPick === "rock"
                  ? rock
                  : computerPick === "paper"
                  ? paper
                  : scissors
              }
              alt="image of triangle"
              width={0}
              height={0}
              className="h-[50%] w-[50%]"
            />
          </div>

          <p className="uppercase text-white font-semibold">The House Picked</p>
        </div>
      </div>

      {/* PLAY AGAIN */}
      <div className="flex flex-col gap-y-5">
        <p className="uppercase font-bold text-6xl text-white tracking-wide">
          {playerPick === computerPick
            ? "It's a tie"
            : playerPick === "rock" && computerPick === "scissors"
            ? "You Win"
            : playerPick === "paper" && computerPick === "rock"
            ? "You Win"
            : playerPick === "scissors" && computerPick === "paper"
            ? "You Win"
            : "You Lose"}
        </p>

        <button
          className="bg-white text-darkText uppercase tracking-widest rounded-lg py-2 px-10"
          onClick={() => {
            router.push("/");
          }}
        >
          Play Again
        </button>
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
