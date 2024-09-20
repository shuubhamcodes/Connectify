// import Display from "@/components/shared/Display";
import Display from "../../components/shared/Display"; // Updated import path
import Player from "../../components/shared/Player"; // Updated import path
import { PlayerContext } from "../../context/PlayerContext"; // Updated import path
import { useContext } from "react"; // No change needed for external library


const Songs = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    return <div>Loading...</div>;
  }
  const { audioRef, track } = context;
  return (
    <div className="w-full h-screen overflow-y-scroll bg-black">
      <Display />
      <Player />
      <audio preload="auto" ref={audioRef} src={track.file}></audio>
    </div>
  );
};

export default Songs;
