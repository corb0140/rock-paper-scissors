import Game from "@/app/components/Game";

const page = ({ params }) => {
  const { playerPick } = params;

  return <Game playerPick={playerPick} />;
};

export default page;
