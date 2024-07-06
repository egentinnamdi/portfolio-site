import Description from "./Description";
import DisplayImage from "./DisplayImage";
import DisplayMainText from "./DisplayMainText";

function Intro() {
  return (
    <div className=" lg:col-span-2 lg:row-span-2 lg:flex lg:justify-center">
      <div className="  grid h-[100%] w-full grid-cols-2 grid-rows-2 gap-y-12 ">
        <div className=" col-span-2 grid grid-cols-[1.5fr_1fr] grid-rows-1">
          <DisplayMainText />
          <DisplayImage />
        </div>
        <Description />
      </div>
    </div>
  );
}

export default Intro;
