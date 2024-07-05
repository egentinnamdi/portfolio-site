import { useEffect, useState } from "react";

const descriptionText = "a fullstack web developer";
const introText = " i'm egenti nnamdi.";

function DisplayMainText() {
  const [text, setText] = useState("");
  const [textTwo, setTextTwo] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(
    function () {
      if (index < descriptionText.length) {
        const timeout = setTimeout(() => {
          setText((prev) => (prev += introText.charAt(index)));
          setTextTwo((prev) => (prev += descriptionText.charAt(index)));
          setIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    },
    [index],
  );

  return (
    <div className="flex flex-col items-end justify-center  space-y-5  pb-20 font-bold uppercase text-white lg:leading-[80px] 2xl:text-6xl">
      <span className=" tracking-wider  text-primary transition-all duration-75 ease-in">
        {text}
      </span>
      <span className="animate-left  ">{textTwo}</span>
    </div>
  );
}

export default DisplayMainText;
