"use client";

import { useSelector } from "react-redux";

export default function Header() {
  const score = useSelector((state) => state.game.score);

  return (
    <header className="h-auto p-4">
      <div className="h-auto border-4 border-headerOutline rounded-lg p-5 flex justify-between">
        {/* ROCK, PAPER, SCISSORS */}
        <div className="flex flex-col h-[4.5rem]">
          <h1 className="uppercase font-bold text-2xl leading-5 text-white">
            Rock
          </h1>
          <h1 className="uppercase font-bold text-2xl leading-5 text-white">
            Paper
          </h1>
          <h1 className="uppercase font-bold text-2xl leading-5 text-white">
            Scissors
          </h1>
        </div>

        {/* SCORE */}
        <div className="bg-white flex flex-col leading-5 items-center justify-center w-[4.5rem] h-[4.5rem] rounded-lg">
          <p className="text-scoreText font-sm tracking-wider">score</p>
          <p className="text-darkText text-4xl font-bold">{score}</p>
        </div>
      </div>
    </header>
  );
}
