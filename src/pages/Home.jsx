import Contact from "../Contact/Contact";
import Generic from "../ui/Generic";
import Description from "../ui/HomePage/Description";
import Navbar from "../ui/Navbar";
import { lazy, Suspense, useEffect, useState } from "react";

const Intro = lazy(() => import("../ui/HomePage/Intro"));
const PortContainer = lazy(() => import("../ui/Portfolio/PortContainer"));
const BgImage = lazy(() => import("../ui/HomePage/BgImage"));

function Home() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(function () {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // 2xl:grid 2xl:min-h-[150vh] 2xl:w-full 2xl:grid-cols-2 2xl:grid-rows-[150px_1fr_3fr]
  return (
    <div className="flex flex-col">
      <Suspense fallback={<div className="bg-secondary min-h-screen"></div>}>
        <BgImage />
      </Suspense>
      <Navbar />
      <Intro />
      <Description />
      <Generic />
      {/* <Suspense fallback={<span>Loading...</span>}>
        <PortContainer />
      </Suspense> */}
      <Contact />
    </div>
  );
}

export default Home;
