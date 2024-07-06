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
    <div className="flex flex-col items-center justify-center space-y-2 py-5 text-xl font-bold  uppercase text-white lg:leading-[80px] 2xl:items-end 2xl:space-y-5 2xl:pb-20 2xl:text-6xl">
      <span className=" tracking-wider   transition-all duration-75 ease-in">
        {text}
      </span>
      <span className="animate-left text-primary ">{textTwo}</span>
    </div>
  );
}

export default DisplayMainText;
