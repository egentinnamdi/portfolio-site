import Description from "./Description";
import DisplayImage from "./DisplayImage";
import DisplayMainText from "./DisplayMainText";

function Intro() {
  return (
    <div className="flex w-screen flex-col justify-center 2xl:col-span-2  2xl:row-span-2">
      <div className="  grid h-[100%] flex-grow grid-cols-2 grid-rows-2 gap-y-12 ">
        <div className=" flex flex-grow flex-col 2xl:col-span-2 2xl:grid 2xl:grid-cols-[1.5fr_1fr] 2xl:grid-rows-1">
          <DisplayMainText />
          <DisplayImage />
        </div>
        <Description />
      </div>
    </div>
  );
}

export default Intro;
