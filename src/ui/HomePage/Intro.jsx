import DisplayImage from "./DisplayImage";
import DisplayMainText from "./DisplayMainText";
function Intro() {
  return (
    <div className="w-screen 2xl:h-[75vh]">
      <div className="flex flex-grow flex-col 2xl:grid 2xl:h-full 2xl:grid-cols-[1.5fr_1fr] 2xl:grid-rows-1">
        <DisplayMainText />
        <DisplayImage />
      </div>
    </div>
  );
}

export default Intro;
