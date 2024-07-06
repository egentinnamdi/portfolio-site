import { animated, useSpring } from "@react-spring/web";

function Project({ img, textOne, textTwo }) {

  return (
    <animated.div className={`space-y-8 `}>
      <div className="flex">
        <img
          src={`/${img}.jpg`}
          className="h-96 w-96 flex-grow rounded-2xl object-cover"
          alt={`${img}`}
        />
      </div>
      <div className="flex flex-col items-center space-y-4 ">
        <span className="text-2xl uppercase text-primary">{textOne}</span>
        <span className="text-3xl  font-semibold capitalize">{textTwo}</span>
      </div>
    </animated.div>
  );
}

export default Project;
